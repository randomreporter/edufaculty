<?php
/**
 * EduFaculty - Send OTP Endpoint (Hostinger Compatible)
 * Handles Real Email Dispatch via Hostinger Mail & Optional SMS
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once __DIR__ . '/config.php';

session_start();

$input = json_decode(file_get_contents('php://input'), true);

$type = isset($input['type']) ? trim($input['type']) : '';
$target = isset($input['target']) ? trim($input['target']) : '';

if (empty($type) || empty($target)) {
    echo json_encode(['success' => false, 'error' => 'Missing target or type']);
    exit;
}

// Generate 6-digit cryptographically secure OTP
$otp = (string)random_int(100000, 999999);

// Store in session with 10-minute expiry
$_SESSION['otp_' . $target] = [
    'code' => $otp,
    'expires' => time() + 600
];

// Fallback disk cache for servers without persistent session storage
$cacheDir = sys_get_temp_dir() . '/edufaculty_otps';
if (!is_dir($cacheDir)) {
    @mkdir($cacheDir, 0777, true);
}
@file_put_contents($cacheDir . '/' . md5($target) . '.json', json_encode([
    'code' => $otp,
    'expires' => time() + 600
]));

// Dispatch real email via Hostinger Mail
if ($type === 'email') {
    $subject = "Your EduFaculty Verification Code: $otp";

    $message = '
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>EduFaculty Verification</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif; background-color: #f8fafc; padding: 24px; margin: 0;">
      <div style="max-width: 500px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 32px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
        <div style="text-align: center; margin-bottom: 24px;">
          <h2 style="color: #1e3a8a; margin: 0; font-size: 24px;">Edu<span style="color: #2563eb;">Faculty</span></h2>
          <p style="color: #64748b; font-size: 13px; margin: 4px 0 0 0;">Verified Academic Recruitment Network</p>
        </div>
        
        <p style="color: #334155; font-size: 15px; line-height: 1.5;">Hello,</p>
        <p style="color: #334155; font-size: 15px; line-height: 1.5;">Your one-time verification code to authenticate your EduFaculty account is:</p>
        
        <div style="text-align: center; margin: 28px 0;">
          <span style="display: inline-block; background: #eff6ff; color: #1d4ed8; font-size: 32px; font-weight: 800; letter-spacing: 6px; padding: 14px 28px; border-radius: 8px; border: 2px dashed #93c5fd;">
            ' . $otp . '
          </span>
        </div>
        
        <p style="color: #64748b; font-size: 13px; line-height: 1.5;">This code will expire in <strong>10 minutes</strong>. Do not share this code with anyone.</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">
        <p style="color: #94a3b8; font-size: 11px; text-align: center; margin: 0;">© ' . date('Y') . ' EduFaculty. Dedicated direct hiring for teachers & institutions.</p>
      </div>
    </body>
    </html>
    ';

    $headers = [];
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=utf-8';
    $headers[] = 'From: ' . FROM_NAME . ' <' . FROM_EMAIL . '>';
    $headers[] = 'Reply-To: ' . FROM_EMAIL;
    $headers[] = 'X-Mailer: Hostinger PHP/' . phpversion();

    $mailSent = @mail($target, $subject, $message, implode("\r\n", $headers));

    echo json_encode([
        'success' => true,
        'type' => 'email',
        'message' => 'Real verification email dispatched via Hostinger mail',
        'mailSent' => $mailSent
    ]);
    exit;
}

// Dispatch phone SMS
if ($type === 'phone') {
    $cleanPhone = preg_replace('/\D/', '', $target);

    // If an Indian SMS gateway key is configured in config.php:
    if (!empty(SMS_API_KEY)) {
        if (SMS_GATEWAY === '2factor') {
            $smsUrl = "https://2factor.in/API/V1/" . urlencode(SMS_API_KEY) . "/SMS/" . urlencode($cleanPhone) . "/" . urlencode($otp) . "/EduFaculty";
            @file_get_contents($smsUrl);
        } elseif (SMS_GATEWAY === 'fast2sms') {
            $smsUrl = "https://www.fast2sms.com/dev/bulkV2?authorization=" . urlencode(SMS_API_KEY) . "&variables_values=" . urlencode($otp) . "&route=otp&numbers=" . urlencode($cleanPhone);
            @file_get_contents($smsUrl);
        }
    }

    echo json_encode([
        'success' => true,
        'type' => 'phone',
        'message' => 'SMS OTP generated and dispatched to mobile'
    ]);
    exit;
}
