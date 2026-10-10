# EduFaculty - Direct Teacher Recruitment Portal

A dedicated, direct recruitment portal connecting verified schools, colleges, and coaching institutes with certified educators across India.

## Key Features
- **Anti-Middleman / Anti-Consultancy Verification**: Mandatory official school website + government affiliation (CBSE/ICSE/UDISE+) verification.
- **Pure Email Verification**: Real 6-digit OTP authentication via Hostinger Mail (`noreply@festiveradar.com`).
- **Direct Candidate Contact**: 1-click Direct WhatsApp & Direct Phone Call for verified school HRs.
- **Vacancy Lifecycle Management**: Active vs Filled/Closed status, 1-click reactivation, and duplication.
- **School Profile Management**: Real-time profile updates that automatically propagate to all posted listings.

## Automated Deployment to Hostinger
This repository includes a GitHub Action in `.github/workflows/deploy.yml` that automatically deploys every push to Hostinger.

### Setup Steps:
1. In Hostinger hPanel &rarr; **Files** &rarr; **FTP Accounts**, note:
   - FTP Host (e.g. `ftp.festiveradar.com`)
   - FTP Username
   - FTP Password
2. In your GitHub repository &rarr; **Settings** &rarr; **Secrets and variables** &rarr; **Actions**:
   - `HOSTINGER_FTP_HOST`: Your FTP host
   - `HOSTINGER_FTP_USERNAME`: Your FTP username
   - `HOSTINGER_FTP_PASSWORD`: Your FTP password
3. Every `git push` to `main` will automatically deploy your latest code to Hostinger!
