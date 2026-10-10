<?php
/**
 * EduFaculty - Verify OTP Endpoint
 * Validates the 6-digit OTP code submitted by the user
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

session_start();

$input = json_decode(file_get_contents('php://input'), true);

$target = isset($input['target']) ? trim($input['target']) : '';
$code = isset($input['code']) ? trim($input['code']) : '';

if (empty($target) || empty($code)) {
    echo json_encode(['success' => false, 'error' => 'Target identifier or code missing']);
    exit;
}

$storedOtp = null;
$expires = 0;

// 1. Check session
if (isset($_SESSION['otp_' . $target])) {
    $storedOtp = $_SESSION['otp_' . $target]['code'];
    $expires = $_SESSION['otp_' . $target]['expires'];
}

// 2. Check disk cache fallback
$cacheFile = sys_get_temp_dir() . '/edufaculty_otps/' . md5($target) . '.json';
if (!$storedOtp && file_exists($cacheFile)) {
    $data = json_decode(file_get_contents($cacheFile), true);
    if ($data) {
        $storedOtp = $data['code'];
        $expires = $data['expires'];
    }
}

if (!$storedOtp) {
    echo json_encode(['success' => false, 'error' => 'No OTP found for this email/phone. Please request a new code.']);
    exit;
}

if (time() > $expires) {
    echo json_encode(['success' => false, 'error' => 'This verification code has expired. Please request a fresh one.']);
    exit;
}

if ($storedOtp !== $code) {
    echo json_encode(['success' => false, 'error' => 'Incorrect verification code. Please check your inbox / phone and try again.']);
    exit;
}

// Clear verified OTP
unset($_SESSION['otp_' . $target]);
if (file_exists($cacheFile)) {
    @unlink($cacheFile);
}

echo json_encode([
    'success' => true,
    'verified' => true,
    'message' => 'Identity successfully authenticated'
]);
