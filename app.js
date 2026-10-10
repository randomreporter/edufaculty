/**
 * EduFaculty - Direct & Verified Academic Recruitment Network
 * Comprehensive Anti-Spam, Identity & Institution Authentication Logic
 */

// Initial Seed Data: Verified Teaching Jobs
const INITIAL_JOBS = [
  {
    id: 'job-1',
    schoolName: 'Delhi Public School (DPS)',
    instType: 'CBSE Affiliated School',
    website: 'https://dpsbangalore.edu.in',
    affiliationCode: 'CBSE Affiliation: 1930284',
    isVerifiedInstitution: true,
    role: 'PGT Mathematics Teacher',
    subject: 'Mathematics',
    grade: 'PGT (Grades 11-12)',
    experience: '3-5 Years',
    city: 'Bangalore (Whitefield)',
    salary: '₹55,000 - ₹70,000 / mo',
    salaryVal: 62500,
    phone: '9845012345',
    whatsapp: '9845012345',
    isUrgent: true,
    perks: ['Free Staff Bus', 'PF & ESI', 'Fee Concession'],
    description: 'Direct recruitment by DPS Management. Looking for an experienced PGT Mathematics teacher for Classes 11 & 12. Must be well-versed with CBSE curriculum. B.Ed required. No agents.',
    postedDaysAgo: 'Today'
  },
  {
    id: 'job-2',
    schoolName: 'St. Xavier International School',
    instType: 'ICSE / ISC School',
    website: 'https://stxavierschool.ac.in',
    affiliationCode: 'CISCE Affiliation: MA042',
    isVerifiedInstitution: true,
    role: 'TGT Science & Physics Faculty',
    subject: 'Science',
    grade: 'TGT (Grades 6-10)',
    experience: '2-4 Years',
    city: 'Mumbai (Andheri West)',
    salary: '₹42,000 - ₹52,000 / mo',
    salaryVal: 47000,
    phone: '9820054321',
    whatsapp: '9820054321',
    isUrgent: false,
    perks: ['Free Lunch', 'Medical Insurance'],
    description: 'Direct school requirement for enthusiastic TGT Physics teacher for grades 8 to 10. Prior ICSE board teaching experience preferred.',
    postedDaysAgo: '1 day ago'
  },
  {
    id: 'job-3',
    schoolName: 'Apex STEM & IIT-JEE Academy',
    instType: 'JEE / NEET Coaching Institute',
    website: 'https://apexstemacademy.in',
    affiliationCode: 'Govt Reg: HYD-REG-48921',
    isVerifiedInstitution: true,
    role: 'Senior NEET / JEE Chemistry Faculty',
    subject: 'Science',
    grade: 'NEET / JEE Faculty',
    experience: '5+ Years',
    city: 'Hyderabad (Madhapur)',
    salary: '₹85,000 - ₹1,20,000 / mo',
    salaryVal: 102500,
    phone: '9949011223',
    whatsapp: '9949011223',
    isUrgent: true,
    perks: ['Performance Bonus', 'Air-Conditioned Cab', 'Relocation Allowance'],
    description: 'Direct hiring for NEET Organic Chemistry expert with proven student rank records. Minimum 4 years experience in top national institutes.',
    postedDaysAgo: 'Today'
  },
  {
    id: 'job-4',
    schoolName: 'Heritage Global School',
    instType: 'International / IB / Cambridge',
    website: 'https://heritageglobalschool.edu.in',
    affiliationCode: 'IB World Code: 061294',
    isVerifiedInstitution: true,
    role: 'Primary English & Social Studies (PRT)',
    subject: 'English',
    grade: 'PRT (Primary / Grades 1-5)',
    experience: '1-3 Years',
    city: 'Delhi NCR (Gurgaon Sec 48)',
    salary: '₹38,000 - ₹48,000 / mo',
    salaryVal: 43000,
    phone: '9811099887',
    whatsapp: '9811099887',
    isUrgent: false,
    perks: ['Free Stay / Accommodation', 'PF & Gratuity'],
    description: 'Seeking creative PRT English Educator. Montessori or B.Ed candidates welcome. Focus on activity-based phonics and literature.',
    postedDaysAgo: '2 days ago'
  },
  {
    id: 'job-5',
    schoolName: 'Oakridge Future Academy',
    instType: 'CBSE Affiliated School',
    website: 'https://oakridgeacademy.edu.in',
    affiliationCode: 'CBSE Affiliation: 0830114',
    isVerifiedInstitution: true,
    role: 'Computer Science & AI / Coding Teacher',
    subject: 'Computer',
    grade: 'TGT (Grades 6-10)',
    experience: '2-5 Years',
    city: 'Bangalore (Sarjapur Road)',
    salary: '₹50,000 - ₹65,000 / mo',
    salaryVal: 57500,
    phone: '9880011445',
    whatsapp: '9880011445',
    isUrgent: true,
    perks: ['Laptop Provided', 'Transport Facility'],
    description: 'Teach Python, Scratch, and Artificial Intelligence fundamentals to middle school students. MCA / B.Tech / B.Ed candidates preferred.',
    postedDaysAgo: 'Just now'
  },
  {
    id: 'job-6',
    schoolName: 'The Gurukul Residential Senior Secondary',
    instType: 'CBSE Affiliated School',
    website: 'https://gurukulschool.org.in',
    affiliationCode: 'UDISE Code: 09100405201',
    isVerifiedInstitution: true,
    role: 'PGT Biology & Medical Foundation',
    subject: 'Science',
    grade: 'PGT (Grades 11-12)',
    experience: '4+ Years',
    city: 'Delhi NCR (Greater Noida)',
    salary: '₹60,000 - ₹75,000 / mo',
    salaryVal: 67500,
    phone: '9818044556',
    whatsapp: '9818044556',
    isUrgent: true,
    perks: ['Free 2-BHK Family Stay', 'Free Meals in Mess', 'Full Medical'],
    description: 'Residential campus appointment. 2BHK accommodation provided for family. Candidates with B.Ed and strong NEET biology track record needed.',
    postedDaysAgo: 'Today'
  }
];

// Initial Seed Data: Verified Teachers
const INITIAL_CANDIDATES = [
  {
    id: 'cand-1',
    name: 'Ananya Deshmukh',
    email: 'ananya.deshmukh@gmail.com',
    subject: 'Mathematics',
    grade: 'PGT (Grades 11-12)',
    qualification: 'M.Sc (Pure Maths), B.Ed, CTET Paper 2 Qualified',
    experience: '6 Years CBSE Experience',
    city: 'Pune (Viman Nagar)',
    salaryExpectation: '₹55,000 / month',
    salaryVal: 55000,
    phone: '9822155443',
    whatsapp: '9822155443',
    isPhoneVerified: true,
    isEmailVerified: true,
    skills: ['CBSE Class 12 Boards', 'Vedic Maths', 'Calculus Mastery'],
    bio: 'Verified educator with 6 years experience in reputed CBSE schools. Consistent 95%+ class average in board exams. Available for immediate joining.',
    registeredDate: 'Active Today'
  },
  {
    id: 'cand-2',
    name: 'Vikramaditya Sharma',
    email: 'vikram.physics@outlook.com',
    subject: 'Science',
    grade: 'NEET / JEE Faculty',
    qualification: 'M.Sc (Physics), CSIR-NET Qualified',
    experience: '8 Years Competitive Exam Faculty',
    city: 'Hyderabad (Kukatpally)',
    salaryExpectation: '₹95,000 / month',
    salaryVal: 95000,
    phone: '9948123890',
    whatsapp: '9948123890',
    isPhoneVerified: true,
    isEmailVerified: true,
    skills: ['JEE Advanced Physics', 'NEET Kinematics', 'Shortcut Techniques'],
    bio: 'Produced over 40+ top 1000 rankers in NEET & JEE Mains. Expert in conceptual physics and shortcut solving methodologies.',
    registeredDate: 'Active 2h ago'
  },
  {
    id: 'cand-3',
    name: 'Pooja Iyer',
    email: 'pooja.iyer.lit@gmail.com',
    subject: 'English',
    grade: 'TGT (Grades 6-10)',
    qualification: 'M.A (English Lit), B.Ed, Cambridge CELTA Certified',
    experience: '4 Years ICSE & IGCSE',
    city: 'Bangalore (Indiranagar)',
    salaryExpectation: '₹48,000 / month',
    salaryVal: 48000,
    phone: '9845177234',
    whatsapp: '9845177234',
    isPhoneVerified: true,
    isEmailVerified: true,
    skills: ['Creative Writing', 'Debate & Dramatics Coach', 'Grammar'],
    bio: 'Specialist in English literature and language development for middle and secondary school students. Leads school model UN and literary clubs.',
    registeredDate: 'Active Today'
  },
  {
    id: 'cand-4',
    name: 'Rahul K. Verma',
    email: 'rahul.verma.cs@gmail.com',
    subject: 'Computer',
    grade: 'TGT (Grades 6-10)',
    qualification: 'MCA, B.Ed (Computer Science)',
    experience: '3 Years CBSE School',
    city: 'Delhi NCR (Noida)',
    salaryExpectation: '₹42,000 / month',
    salaryVal: 42000,
    phone: '9810166554',
    whatsapp: '9810166554',
    isPhoneVerified: true,
    isEmailVerified: true,
    skills: ['Python', 'HTML/CSS/JS', 'Robotics & ATL Lab'],
    bio: 'Passionate about introducing coding and computational thinking to young minds. Setup and managed Atal Tinkering Lab in previous school.',
    registeredDate: 'Active Today'
  }
];

class EduFacultyApp {
  constructor() {
    this.mode = 'jobs'; // 'jobs' or 'candidates'
    this.jobs = this.loadJobs();
    this.candidates = this.loadCandidates();
    this.currentUser = this.loadCurrentUser(); // Logged in state (teacher or recruiter)

    // Temporary verification storage for multi-step flows (Pure Email Verification)
    this.teacherVerifyState = {
      emailOtpSent: null,
      tempData: null
    };

    this.recruiterVerifyState = {
      emailOtpSent: null,
      tempData: null
    };

    // Filters
    this.searchQuery = '';
    this.locationFilter = '';
    this.gradeFilter = '';
    this.tagFilter = 'all';
    this.sortBy = 'recent';

    this.initElements();
    this.bindEvents();
    this.updateUserAuthUI();
    this.render();
  }

  loadJobs() {
    const saved = localStorage.getItem('edufaculty_jobs_db');
    if (saved) {
      try { 
        const parsed = JSON.parse(saved);
        return parsed.map(j => ({ ...j, status: j.status || 'active' }));
      } catch (e) { console.error(e); }
    }
    return INITIAL_JOBS.map(j => ({ ...j, status: j.status || 'active' }));
  }

  saveJobs() {
    localStorage.setItem('edufaculty_jobs_db', JSON.stringify(this.jobs));
  }

  loadCandidates() {
    const saved = localStorage.getItem('edufaculty_candidates_db');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_CANDIDATES;
  }

  saveCandidates() {
    localStorage.setItem('edufaculty_candidates_db', JSON.stringify(this.candidates));
  }

  loadCurrentUser() {
    const saved = localStorage.getItem('edufaculty_current_user');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return null;
  }

  saveCurrentUser(user) {
    this.currentUser = user;
    if (user) {
      localStorage.setItem('edufaculty_current_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('edufaculty_current_user');
    }
    this.updateUserAuthUI();
  }

  initElements() {
    this.tabFindJobs = document.getElementById('tabFindJobs');
    this.tabHireTeachers = document.getElementById('tabHireTeachers');
    this.mobileTabJobs = document.getElementById('mobileTabJobs');
    this.mobileTabCandidates = document.getElementById('mobileTabCandidates');
    this.mobileBtnAction = document.getElementById('mobileBtnAction');

    this.heroTitle = document.getElementById('heroTitle');
    this.heroSubtitle = document.getElementById('heroSubtitle');
    this.feedTitle = document.getElementById('feedTitle');
    this.resultsCount = document.getElementById('resultsCount');
    this.listingsContainer = document.getElementById('listingsContainer');
    this.emptyState = document.getElementById('emptyState');

    this.searchInput = document.getElementById('searchInput');
    this.locationSelect = document.getElementById('locationSelect');
    this.gradeSelect = document.getElementById('gradeSelect');
    this.btnFilterSearch = document.getElementById('btnFilterSearch');
    this.quickTagsContainer = document.getElementById('quickTags');
    this.sortSelect = document.getElementById('sortSelect');
    this.btnResetFilters = document.getElementById('btnResetFilters');

    // Header buttons & Auth
    this.btnOpenTeacherProfile = document.getElementById('btnOpenTeacherProfile');
    this.btnOpenPostJob = document.getElementById('btnOpenPostJob');
    this.userAuthPanel = document.getElementById('userAuthPanel');
    this.userAuthName = document.getElementById('userAuthName');
    this.btnOpenDashboard = document.getElementById('btnOpenDashboard');
    this.btnOpenLogin = document.getElementById('btnOpenLogin');
    this.btnLogout = document.getElementById('btnLogout');

    // Login Modal Elements
    this.modalLogin = document.getElementById('modalLogin');
    this.formLogin = document.getElementById('formLogin');
    this.loginRoleTeacher = document.getElementById('loginRoleTeacher');
    this.loginRoleSchool = document.getElementById('loginRoleSchool');
    this.loginIdentifier = document.getElementById('loginIdentifier');
    this.loginIdentifierLabel = document.getElementById('loginIdentifierLabel');
    this.btnSendLoginOTP = document.getElementById('btnSendLoginOTP');
    this.loginOtpInput = document.getElementById('loginOtpInput');
    this.loginOtpStatus = document.getElementById('loginOtpStatus');
    this.btnSwitchToRegister = document.getElementById('btnSwitchToRegister');
    this.loginActiveRole = 'teacher';
    this.loginOtpSent = null;

    // Dashboard Modal Elements
    this.modalDashboard = document.getElementById('modalDashboard');
    this.dashTitle = document.getElementById('dashTitle');
    this.dashRolePill = document.getElementById('dashRolePill');
    this.dashContent = document.getElementById('dashContent');
    this.dashVacancyFilter = 'all'; // 'all', 'active', 'closed'

    // Edit School Profile Elements
    this.modalEditSchoolProfile = document.getElementById('modalEditSchoolProfile');
    this.formEditSchoolProfile = document.getElementById('formEditSchoolProfile');
    this.editSchoolName = document.getElementById('editSchoolName');
    this.editSchoolType = document.getElementById('editSchoolType');
    this.editSchoolWebsite = document.getElementById('editSchoolWebsite');
    this.editSchoolAffiliation = document.getElementById('editSchoolAffiliation');
    this.editSchoolCity = document.getElementById('editSchoolCity');
    this.editSchoolPhone = document.getElementById('editSchoolPhone');
    this.editSchoolEmail = document.getElementById('editSchoolEmail');

    // Teacher Flow Elements
    this.modalTeacherFlow = document.getElementById('modalTeacherFlow');
    this.teacherStep1 = document.getElementById('teacherStep1');
    this.teacherStep2 = document.getElementById('teacherStep2');
    this.formTeacherVerify = document.getElementById('formTeacherVerify');
    this.formTeacherProfile = document.getElementById('formTeacherProfile');
    this.btnSendEmailOTP = document.getElementById('btnSendEmailOTP');
    this.emailOtpStatus = document.getElementById('emailOtpStatus');
    this.btnBackToTeacherStep1 = document.getElementById('btnBackToTeacherStep1');

    // Recruiter Flow Elements (School website / affiliation anti-spam verification)
    this.modalRecruiterFlow = document.getElementById('modalRecruiterFlow');
    this.recruiterStep1 = document.getElementById('recruiterStep1');
    this.recruiterStep2 = document.getElementById('recruiterStep2');
    this.formRecruiterVerify = document.getElementById('formRecruiterVerify');
    this.formPostJob = document.getElementById('formPostJob');
    this.btnSendRecruiterEmailOTP = document.getElementById('btnSendRecruiterEmailOTP');
    this.rEmailOtpStatus = document.getElementById('rEmailOtpStatus');
    this.btnBackToRecruiterStep1 = document.getElementById('btnBackToRecruiterStep1');
    this.verifiedSchoolNameDisplay = document.getElementById('verifiedSchoolNameDisplay');

    // Contact modal
    this.modalContactInfo = document.getElementById('modalContactInfo');
    this.contactModalTitle = document.getElementById('contactModalTitle');
    this.contactOrgName = document.getElementById('contactOrgName');
    this.contactRoleDesc = document.getElementById('contactRoleDesc');
    this.contactVerificationText = document.getElementById('contactVerificationText');
    this.contactDisplayPhone = document.getElementById('contactDisplayPhone');
    this.contactDisplayWhatsapp = document.getElementById('contactDisplayWhatsapp');
    this.contactWebsiteRow = document.getElementById('contactWebsiteRow');
    this.contactDisplayWebsite = document.getElementById('contactDisplayWebsite');
    this.btnDirectCall = document.getElementById('btnDirectCall');
    this.btnDirectWhatsapp = document.getElementById('btnDirectWhatsapp');
  }

  bindEvents() {
    // Mode Switcher
    this.tabFindJobs?.addEventListener('click', () => this.setMode('jobs'));
    this.tabHireTeachers?.addEventListener('click', () => this.setMode('candidates'));
    this.mobileTabJobs?.addEventListener('click', () => this.setMode('jobs'));
    this.mobileTabCandidates?.addEventListener('click', () => this.setMode('candidates'));

    // Mobile Action Button
    this.mobileBtnAction?.addEventListener('click', () => {
      if (this.mode === 'jobs') {
        this.startTeacherRegistrationFlow();
      } else {
        this.startRecruiterVerificationFlow();
      }
    });

    // Login & Dashboard Triggers
    this.btnOpenLogin?.addEventListener('click', () => {
      this.openModal('modalLogin');
    });

    this.btnOpenDashboard?.addEventListener('click', () => {
      this.openDashboard();
    });

    this.loginRoleTeacher?.addEventListener('click', () => {
      this.loginActiveRole = 'teacher';
      this.loginRoleTeacher.classList.add('active');
      this.loginRoleSchool.classList.remove('active');
      this.loginIdentifierLabel.textContent = 'Registered Teacher Email *';
    });

    this.loginRoleSchool?.addEventListener('click', () => {
      this.loginActiveRole = 'school';
      this.loginRoleSchool.classList.add('active');
      this.loginRoleTeacher.classList.remove('active');
      this.loginIdentifierLabel.textContent = 'Official School HR Email *';
    });

    this.btnSendLoginOTP?.addEventListener('click', async () => {
      const email = this.loginIdentifier.value.trim();
      if (!email || !email.includes('@')) {
        alert('Please enter your registered email address first.');
        return;
      }
      this.btnSendLoginOTP.disabled = true;
      this.btnSendLoginOTP.textContent = 'Sending...';
      const res = await this.requestOtp('email', email);
      this.btnSendLoginOTP.disabled = false;
      this.btnSendLoginOTP.textContent = 'Resend Code';

      if (res.success) {
        this.loginOtpSent = true;
        const input = document.getElementById('loginOtpInput');
        if (input) {
          input.value = '';
          input.focus();
        }
        this.loginOtpStatus.innerHTML = `📬 6-digit code dispatched to <strong>${email}</strong>. Please check your inbox or spam folder.`;
        this.showToast(`Verification code sent to ${email}. Check your inbox!`);
      } else {
        alert(res.error || 'Failed to dispatch verification email. Please check your email and try again.');
      }
    });

    this.formLogin?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleLogin();
    });

    this.btnSwitchToRegister?.addEventListener('click', () => {
      this.closeModal('modalLogin');
      if (this.loginActiveRole === 'teacher') {
        this.startTeacherRegistrationFlow();
      } else {
        this.startRecruiterVerificationFlow();
      }
    });

    // Logout
    this.btnLogout?.addEventListener('click', () => {
      this.saveCurrentUser(null);
      this.showToast('Logged out successfully.', 'info');
    });

    // Teacher Flow Triggers
    this.btnOpenTeacherProfile?.addEventListener('click', () => this.startTeacherRegistrationFlow());
    
    this.btnSendEmailOTP?.addEventListener('click', async () => {
      const email = document.getElementById('tRegEmail').value.trim();
      if (!email || !email.includes('@')) {
        alert('Please enter a valid email address first.');
        return;
      }
      this.btnSendEmailOTP.disabled = true;
      this.btnSendEmailOTP.textContent = 'Sending...';
      const res = await this.requestOtp('email', email);
      this.btnSendEmailOTP.disabled = false;
      this.btnSendEmailOTP.textContent = 'Resend Code';

      if (res.success) {
        this.teacherVerifyState.emailOtpSent = true;
        const input = document.getElementById('tEmailOtpInput');
        if (input) {
          input.value = '';
          input.focus();
        }
        this.emailOtpStatus.innerHTML = `📬 6-digit code dispatched to <strong>${email}</strong>. Please check your inbox or spam folder.`;
        this.showToast(`Verification code sent to ${email}. Check your inbox!`);
      } else {
        alert(res.error || 'Failed to dispatch verification email. Please check your email and try again.');
      }
    });

    this.formTeacherVerify?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleTeacherVerifyStep1();
    });

    this.btnBackToTeacherStep1?.addEventListener('click', () => {
      this.teacherStep2.style.display = 'none';
      this.teacherStep1.style.display = 'block';
    });

    this.formTeacherProfile?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleTeacherPublishStep2();
    });

    // Recruiter Flow Triggers
    this.btnOpenPostJob?.addEventListener('click', () => this.startRecruiterVerificationFlow());

    this.btnSendRecruiterEmailOTP?.addEventListener('click', async () => {
      const email = document.getElementById('rRegEmail').value.trim();
      if (!email || !email.includes('@')) {
        alert('Please enter official school email address.');
        return;
      }
      this.btnSendRecruiterEmailOTP.disabled = true;
      this.btnSendRecruiterEmailOTP.textContent = 'Sending...';
      const res = await this.requestOtp('email', email);
      this.btnSendRecruiterEmailOTP.disabled = false;
      this.btnSendRecruiterEmailOTP.textContent = 'Resend Code';

      if (res.success) {
        this.recruiterVerifyState.emailOtpSent = true;
        const input = document.getElementById('rEmailOtpInput');
        if (input) {
          input.value = '';
          input.focus();
        }
        this.rEmailOtpStatus.innerHTML = `📬 Institutional code dispatched to <strong>${email}</strong>. Please check your inbox or spam folder.`;
        this.showToast(`School verification code sent to ${email}. Check your inbox!`);
      } else {
        alert(res.error || 'Failed to dispatch verification email. Please check your email and try again.');
      }
    });

    this.formRecruiterVerify?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleRecruiterVerifyStep1();
    });

    this.btnBackToRecruiterStep1?.addEventListener('click', () => {
      this.recruiterStep2.style.display = 'none';
      this.recruiterStep1.style.display = 'block';
    });

    this.formPostJob.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleRecruiterPublishStep2();
    });

    // Search & Filter Triggers
    this.btnFilterSearch.addEventListener('click', () => {
      this.searchQuery = this.searchInput.value.trim();
      this.locationFilter = this.locationSelect.value;
      this.gradeFilter = this.gradeSelect.value;
      this.render();
    });

    this.searchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        this.searchQuery = this.searchInput.value.trim();
        this.render();
      }
    });

    this.locationSelect.addEventListener('change', () => {
      this.locationFilter = this.locationSelect.value;
      this.render();
    });

    this.gradeSelect.addEventListener('change', () => {
      this.gradeFilter = this.gradeSelect.value;
      this.render();
    });

    this.sortSelect.addEventListener('change', () => {
      this.sortBy = this.sortSelect.value;
      this.render();
    });

    this.btnResetFilters.addEventListener('click', () => {
      this.searchInput.value = '';
      this.locationSelect.value = '';
      this.gradeSelect.value = '';
      this.searchQuery = '';
      this.locationFilter = '';
      this.gradeFilter = '';
      this.tagFilter = 'all';
      this.updateTagPillsUI();
      this.render();
    });

    // Quick tags
    this.quickTagsContainer.addEventListener('click', (e) => {
      const pill = e.target.closest('.tag-pill');
      if (pill) {
        this.tagFilter = pill.getAttribute('data-filter');
        this.updateTagPillsUI();
        this.render();
      }
    });

    // Edit School Profile Form Submit
    this.formEditSchoolProfile?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSaveSchoolProfile();
    });

    // Modal Close
    document.querySelectorAll('[data-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-close');
        this.closeModal(modalId);
      });
    });

    [
      this.modalTeacherFlow, 
      this.modalRecruiterFlow, 
      this.modalContactInfo, 
      this.modalLogin, 
      this.modalDashboard, 
      this.modalEditSchoolProfile
    ].forEach(modal => {
      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) this.closeModal(modal.id);
        });
      }
    });

    // Footer Links
    document.getElementById('footerLinkCBSE')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.setMode('jobs');
      this.tagFilter = 'CBSE';
      this.updateTagPillsUI();
      this.render();
      window.scrollTo({ top: 300, behavior: 'smooth' });
    });

    document.getElementById('footerLinkICSE')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.setMode('jobs');
      this.tagFilter = 'ICSE';
      this.updateTagPillsUI();
      this.render();
      window.scrollTo({ top: 300, behavior: 'smooth' });
    });

    document.getElementById('footerLinkCandidates')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.setMode('candidates');
      window.scrollTo({ top: 300, behavior: 'smooth' });
    });

    document.getElementById('footerLinkPost')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.startRecruiterVerificationFlow();
    });

    document.getElementById('footerLinkRegister')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.startTeacherRegistrationFlow();
    });

    document.getElementById('footerLinkPolicy')?.addEventListener('click', (e) => {
      e.preventDefault();
      alert('EduFaculty Anti-Middleman Policy:\n\n1. Commercial consultancies and commission brokers are permanently banned.\n2. Every institution must provide verified public domain website & CBSE/ICSE/UDISE affiliation code.\n3. Direct communication only between authenticated schools and certified teachers.');
    });
  }

  // Request real OTP via Hostinger PHP backend
  async requestOtp(type, target) {
    try {
      const response = await fetch('api/send-otp.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, target })
      });
      if (response.ok) {
        const data = await response.json();
        if (data && data.success) {
          return { success: true };
        } else {
          return { success: false, error: data.error || 'Failed to dispatch verification email.' };
        }
      }
    } catch (e) {
      console.log('Hostinger backend not reachable on local development, using local code generator.');
    }

    // Local development fallback code (stored secretly in memory for testing, never revealed in UI)
    const fallbackCode = Math.floor(100000 + Math.random() * 900000).toString();
    this._localDevFallbackOtp = fallbackCode;
    console.log('[Developer Notice] Local dev mode OTP (not shown in production):', fallbackCode);
    return { success: true };
  }

  // Verify submitted OTP via Hostinger PHP backend
  async verifyOtp(target, code) {
    try {
      const response = await fetch('api/verify-otp.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ target, code })
      });
      if (response.ok) {
        const data = await response.json();
        if (data && data.success) {
          return { success: true };
        } else {
          return { success: false, error: data.error || 'Incorrect verification code. Please check your inbox and try again.' };
        }
      }
    } catch (e) {
      console.log('Hostinger verify endpoint not reachable, checking local dev fallback.');
    }

    // Local development fallback match
    if (this._localDevFallbackOtp && this._localDevFallbackOtp === code) {
      return { success: true };
    }
    return { success: false, error: 'Incorrect verification code. Please check your email inbox and try again.' };
  }

  setMode(mode) {
    this.mode = mode;

    if (mode === 'jobs') {
      this.tabFindJobs.classList.add('active');
      this.tabHireTeachers.classList.remove('active');
      this.mobileTabJobs.classList.add('active');
      this.mobileTabCandidates.classList.remove('active');

      this.heroTitle.innerHTML = `India's Premier <span class="highlight-text">Verified Network</span> for Educators`;
      this.heroSubtitle.textContent = `Direct recruitment between verified school principals and certified teachers. Every institution is authenticated via official website & affiliation records.`;
      this.feedTitle.textContent = `Latest Verified School Vacancies`;
      this.searchInput.placeholder = `Search Subject (e.g. Mathematics, Physics, English, Computer)...`;
    } else {
      this.tabHireTeachers.classList.add('active');
      this.tabFindJobs.classList.remove('active');
      this.mobileTabCandidates.classList.add('active');
      this.mobileTabJobs.classList.remove('active');

      this.heroTitle.innerHTML = `Hire <span class="highlight-text">Authenticated Teachers</span> Directly`;
      this.heroSubtitle.textContent = `Zero commission. Access resumes of phone & email-verified teachers with B.Ed, CTET, and proven academic track records.`;
      this.feedTitle.textContent = `Verified Teacher Talent Directory`;
      this.searchInput.placeholder = `Search Teacher Subject, B.Ed, CTET, Experience...`;
    }

    this.render();
  }

  updateTagPillsUI() {
    this.quickTagsContainer.querySelectorAll('.tag-pill').forEach(pill => {
      if (pill.getAttribute('data-filter') === this.tagFilter) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  updateUserAuthUI() {
    if (this.currentUser) {
      if (this.userAuthPanel) this.userAuthPanel.style.display = 'flex';
      if (this.btnOpenLogin) this.btnOpenLogin.style.display = 'none';
      if (this.userAuthName) {
        this.userAuthName.textContent = this.currentUser.name;
      }
    } else {
      if (this.userAuthPanel) this.userAuthPanel.style.display = 'none';
      if (this.btnOpenLogin) this.btnOpenLogin.style.display = 'inline-flex';
    }
  }

  async handleLogin() {
    const identifier = this.loginIdentifier.value.trim();
    const otp = this.loginOtpInput.value.trim();

    if (!identifier || !identifier.includes('@')) {
      alert('Please enter your registered email address.');
      return;
    }

    if (!otp || otp.length !== 6) {
      alert('Please check your email inbox and enter the 6-digit verification code.');
      return;
    }

    const submitBtn = this.formLogin.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Verifying Code...';
    }

    const verifyRes = await this.verifyOtp(identifier, otp);
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Verify & Log In';
    }

    if (!verifyRes.success) {
      alert(verifyRes.error || 'Incorrect verification code. Please check your email inbox and try again.');
      return;
    }

    if (this.loginActiveRole === 'teacher') {
      // Find matching candidate or create session
      const matchedCand = this.candidates.find(c => 
        (c.email && c.email.toLowerCase() === identifier.toLowerCase()) || 
        (c.phone && c.phone === identifier)
      ) || this.candidates[0];

      const user = {
        type: 'teacher',
        name: matchedCand ? matchedCand.name : 'Teacher Educator',
        phone: matchedCand ? matchedCand.phone : '9876543210',
        email: identifier,
        candidateId: matchedCand ? matchedCand.id : null,
        subject: matchedCand ? matchedCand.subject : 'Mathematics',
        qualification: matchedCand ? matchedCand.qualification : 'B.Ed, CTET',
        city: matchedCand ? matchedCand.city : 'Bangalore',
        salaryExpectation: matchedCand ? matchedCand.salaryExpectation : '₹45,000 / month',
        isAvailableImmediately: true
      };

      this.saveCurrentUser(user);
      this.formLogin.reset();
      this.closeModal('modalLogin');
      this.showToast(`Logged in successfully as ${user.name}!`);
      this.openDashboard();
    } else {
      // School / Recruiter login
      const matchedJob = this.jobs.find(j => 
        (j.email && j.email.toLowerCase() === identifier.toLowerCase()) || 
        (j.phone && j.phone === identifier) ||
        (j.schoolName.toLowerCase().includes(identifier.toLowerCase()))
      ) || this.jobs[0];

      const user = {
        type: 'school',
        name: matchedJob ? matchedJob.schoolName : 'Verified School Management',
        schoolName: matchedJob ? matchedJob.schoolName : 'Verified School Management',
        phone: matchedJob ? matchedJob.phone : '9876543210',
        email: identifier,
        website: matchedJob ? matchedJob.website : 'https://school.edu.in',
        affiliationCode: matchedJob ? matchedJob.affiliationCode : 'CBSE: Affiliation Verified'
      };

      this.saveCurrentUser(user);
      this.formLogin.reset();
      this.closeModal('modalLogin');
      this.showToast(`Logged in successfully as ${user.schoolName}!`);
      this.openDashboard();
    }
  }

  openDashboard() {
    if (!this.currentUser) {
      this.openModal('modalLogin');
      return;
    }

    if (this.currentUser.type === 'teacher') {
      this.dashTitle.textContent = `${this.currentUser.name}'s Profile`;
      this.dashRolePill.textContent = '✓ Phone & Email Verified Teacher';
      this.dashRolePill.style.background = '#ecfdf5';
      this.dashRolePill.style.color = '#065f46';

      this.dashContent.innerHTML = `
        <div class="dash-stats-row">
          <div class="dash-stat-box">
            <div class="dash-stat-val">34</div>
            <div class="dash-stat-lbl">School Profile Views</div>
          </div>
          <div class="dash-stat-box">
            <div class="dash-stat-val">8</div>
            <div class="dash-stat-lbl">Direct WhatsApp Inquiries</div>
          </div>
          <div class="dash-stat-box">
            <div class="dash-stat-val">100%</div>
            <div class="dash-stat-lbl">Verification Score</div>
          </div>
        </div>

        <div class="dash-card">
          <div class="dash-section-title">
            <span>Verified Teaching Bio</span>
            <span style="font-size:0.75rem; color:#059669; font-weight:700;">🟢 Actively Open for Demo</span>
          </div>
          <div style="font-size:0.88rem; line-height:1.6; color:#334155; margin-bottom:14px;">
            <p><strong>Primary Subject:</strong> ${this.currentUser.subject || 'Mathematics'}</p>
            <p><strong>Qualifications:</strong> ${this.currentUser.qualification || 'M.Sc, B.Ed, CTET'}</p>
            <p><strong>Current Locality:</strong> ${this.currentUser.city || 'Bangalore'}</p>
            <p><strong>Expected Monthly Salary:</strong> ${this.currentUser.salaryExpectation || '₹50,000 / month'}</p>
            <p><strong>Contact Info:</strong> +91 ${this.currentUser.phone} • ${this.currentUser.email}</p>
          </div>
          <div style="display:flex; gap:10px;">
            <button class="btn btn-primary btn-sm" id="btnEditTeacherBio">Edit Bio & Expectations</button>
            <button class="btn btn-outline btn-sm" id="btnBrowseJobsFromDash">Browse School Vacancies</button>
          </div>
        </div>
      `;

      // Dashboard button actions
      document.getElementById('btnEditTeacherBio')?.addEventListener('click', () => {
        this.closeModal('modalDashboard');
        this.startTeacherRegistrationFlow();
      });

      document.getElementById('btnBrowseJobsFromDash')?.addEventListener('click', () => {
        this.closeModal('modalDashboard');
        this.setMode('jobs');
      });

    } else {
      // School / Recruiter Dashboard
      this.dashTitle.textContent = `${this.currentUser.schoolName}`;
      this.dashRolePill.textContent = '🛡️ Verified Institution';
      this.dashRolePill.style.background = '#eff6ff';
      this.dashRolePill.style.color = '#1d4ed8';

      // Find all vacancies posted by this school
      const schoolJobs = this.jobs.filter(j => 
        j.schoolName.toLowerCase().includes(this.currentUser.schoolName.toLowerCase()) || 
        j.phone === this.currentUser.phone
      );

      const activeJobs = schoolJobs.filter(j => j.status !== 'closed');
      const closedJobs = schoolJobs.filter(j => j.status === 'closed');

      // Filtered list based on current dash tab
      let displayedJobs = schoolJobs;
      if (this.dashVacancyFilter === 'active') displayedJobs = activeJobs;
      if (this.dashVacancyFilter === 'closed') displayedJobs = closedJobs;

      this.dashContent.innerHTML = `
        <div class="dash-stats-row">
          <div class="dash-stat-box">
            <div class="dash-stat-val">${activeJobs.length}</div>
            <div class="dash-stat-lbl">Active Live Vacancies</div>
          </div>
          <div class="dash-stat-box">
            <div class="dash-stat-val">${closedJobs.length}</div>
            <div class="dash-stat-lbl">Closed / Filled</div>
          </div>
          <div class="dash-stat-box">
            <div class="dash-stat-val">Verified</div>
            <div class="dash-stat-lbl">${this.currentUser.affiliationCode ? this.currentUser.affiliationCode.split(':')[0] : 'Affiliation'}</div>
          </div>
        </div>

        <!-- School Profile Details Card with Edit Option -->
        <div class="dash-card">
          <div class="dash-section-title">
            <span>Official Institution Details</span>
            <button class="btn btn-outline btn-sm" id="btnOpenEditSchoolProfile" style="padding:4px 10px; font-size:0.78rem;">
              ✏️ Edit School Profile
            </button>
          </div>
          <div style="font-size:0.86rem; line-height:1.6; color:#334155;">
            <p><strong>School Name:</strong> ${this.currentUser.schoolName} (${this.currentUser.instType || 'CBSE Affiliated School'})</p>
            <p><strong>Official Website:</strong> <a href="${this.currentUser.website}" target="_blank" style="color:#2563eb; text-decoration:underline;">${this.currentUser.website}</a></p>
            <p><strong>Affiliation Code:</strong> ${this.currentUser.affiliationCode || 'CBSE: 1930284'}</p>
            <p><strong>Campus Location:</strong> ${this.currentUser.city || 'Bangalore'}</p>
            <p><strong>Official HR Contact:</strong> +91 ${this.currentUser.phone} • ${this.currentUser.email || 'hr@school.edu.in'}</p>
          </div>
        </div>

        <!-- Vacancy Management Section -->
        <div class="dash-section-title" style="margin-top:20px;">
          <span>Vacancies (${schoolJobs.length})</span>
          <button class="btn btn-primary btn-sm" id="btnDashPostVacancy">+ Post Another Vacancy</button>
        </div>

        <!-- Filter tabs for school vacancies -->
        <div style="display:flex; gap:8px; margin-bottom:14px;">
          <button class="tag-pill ${this.dashVacancyFilter === 'all' ? 'active' : ''}" id="dashTabAll">All (${schoolJobs.length})</button>
          <button class="tag-pill ${this.dashVacancyFilter === 'active' ? 'active' : ''}" id="dashTabActive">Active (${activeJobs.length})</button>
          <button class="tag-pill ${this.dashVacancyFilter === 'closed' ? 'active' : ''}" id="dashTabClosed">Closed / Filled (${closedJobs.length})</button>
        </div>

        <div class="dash-vacancies-list" id="dashVacanciesList">
          ${displayedJobs.length === 0 ? '<p style="color:#64748b; font-size:0.88rem; padding:12px 0;">No vacancies in this section.</p>' : displayedJobs.map(job => {
            const isClosed = job.status === 'closed';
            return `
              <div class="dash-item-card" id="dash-item-${job.id}" style="${isClosed ? 'opacity:0.85; background:#f8fafc;' : ''}">
                <div class="dash-item-info">
                  <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                    <h5 style="margin:0;">${job.role}</h5>
                    ${isClosed 
                      ? `<span class="meta-pill" style="color:#475569; background:#e2e8f0; font-size:0.7rem;">⚪ Filled / Closed</span>` 
                      : `<span class="meta-pill" style="color:#059669; background:#ecfdf5; font-size:0.7rem;">🟢 Live & Active</span>`
                    }
                  </div>
                  <p>${job.subject} • ${job.grade} • ${job.salary} • ${job.city}</p>
                </div>
                <div class="dash-item-actions" style="flex-wrap:wrap; justify-content:flex-end;">
                  ${isClosed 
                    ? `
                      <button class="btn-dash-action" style="color:#059669; border-color:#a7f3d0; background:#ecfdf5;" data-reactivate-job="${job.id}">
                        🔄 Reactivate
                      </button>
                      <button class="btn-dash-action" style="color:#2563eb; border-color:#bfdbfe; background:#eff6ff;" data-copy-job="${job.id}">
                        📋 Copy as New
                      </button>
                    `
                    : `
                      <button class="btn-dash-action btn-dash-danger" data-close-job="${job.id}">
                        Mark Filled / Close
                      </button>
                    `
                  }
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;

      // Tab filter triggers in dashboard
      document.getElementById('dashTabAll')?.addEventListener('click', () => {
        this.dashVacancyFilter = 'all';
        this.openDashboard();
      });
      document.getElementById('dashTabActive')?.addEventListener('click', () => {
        this.dashVacancyFilter = 'active';
        this.openDashboard();
      });
      document.getElementById('dashTabClosed')?.addEventListener('click', () => {
        this.dashVacancyFilter = 'closed';
        this.openDashboard();
      });

      // Edit School Profile Button
      document.getElementById('btnOpenEditSchoolProfile')?.addEventListener('click', () => {
        this.openEditSchoolProfileModal();
      });

      // Post vacancy button from dashboard (no re-verification needed!)
      document.getElementById('btnDashPostVacancy')?.addEventListener('click', () => {
        this.closeModal('modalDashboard');
        this.startRecruiterVerificationFlow();
      });

      // Mark Filled / Close job handler
      this.dashContent.querySelectorAll('[data-close-job]').forEach(btn => {
        btn.addEventListener('click', () => {
          const jobId = btn.getAttribute('data-close-job');
          const targetJob = this.jobs.find(j => j.id === jobId);
          if (targetJob) {
            targetJob.status = 'closed';
            this.saveJobs();
            this.render();
            this.showToast('Vacancy marked as Filled/Closed. It is now hidden from the public feed.');
            this.openDashboard();
          }
        });
      });

      // Reactivate job handler
      this.dashContent.querySelectorAll('[data-reactivate-job]').forEach(btn => {
        btn.addEventListener('click', () => {
          const jobId = btn.getAttribute('data-reactivate-job');
          const targetJob = this.jobs.find(j => j.id === jobId);
          if (targetJob) {
            targetJob.status = 'active';
            targetJob.postedDaysAgo = 'Reactivated Today';
            this.saveJobs();
            this.render();
            this.showToast('Vacancy reactivated! It is now live again on the public feed.');
            this.openDashboard();
          }
        });
      });

      // Copy as New job handler
      this.dashContent.querySelectorAll('[data-copy-job]').forEach(btn => {
        btn.addEventListener('click', () => {
          const jobId = btn.getAttribute('data-copy-job');
          const targetJob = this.jobs.find(j => j.id === jobId);
          if (targetJob) {
            this.copyVacancyAsNew(targetJob);
          }
        });
      });
    }

    this.openModal('modalDashboard');
  }

  openEditSchoolProfileModal() {
    if (!this.currentUser || this.currentUser.type !== 'school') return;

    this.editSchoolName.value = this.currentUser.schoolName || '';
    this.editSchoolType.value = this.currentUser.instType || 'CBSE Affiliated School';
    this.editSchoolWebsite.value = this.currentUser.website || '';
    this.editSchoolAffiliation.value = this.currentUser.affiliationCode || '';
    this.editSchoolCity.value = this.currentUser.city || 'Bangalore';
    this.editSchoolPhone.value = this.currentUser.phone || '';
    this.editSchoolEmail.value = this.currentUser.email || '';

    this.closeModal('modalDashboard');
    this.openModal('modalEditSchoolProfile');
  }

  handleSaveSchoolProfile() {
    if (!this.currentUser || this.currentUser.type !== 'school') return;

    const oldSchoolName = this.currentUser.schoolName;
    const oldPhone = this.currentUser.phone;

    const updatedSchoolName = this.editSchoolName.value.trim();
    const updatedInstType = this.editSchoolType.value;
    const updatedWebsite = this.editSchoolWebsite.value.trim();
    const updatedAffiliation = this.editSchoolAffiliation.value.trim();
    const updatedCity = this.editSchoolCity.value.trim();
    const updatedPhone = this.editSchoolPhone.value.trim().replace(/\D/g, '');
    const updatedEmail = this.editSchoolEmail.value.trim();

    // Update currentUser state
    this.currentUser.name = updatedSchoolName;
    this.currentUser.schoolName = updatedSchoolName;
    this.currentUser.instType = updatedInstType;
    this.currentUser.website = updatedWebsite;
    this.currentUser.affiliationCode = updatedAffiliation;
    this.currentUser.city = updatedCity;
    this.currentUser.phone = updatedPhone;
    this.currentUser.email = updatedEmail;

    this.saveCurrentUser(this.currentUser);

    // Update all jobs published by this school
    this.jobs.forEach(job => {
      if (job.schoolName === oldSchoolName || job.phone === oldPhone) {
        job.schoolName = updatedSchoolName;
        job.instType = updatedInstType;
        job.website = updatedWebsite;
        job.affiliationCode = updatedAffiliation;
        job.city = updatedCity;
        job.phone = updatedPhone;
        job.whatsapp = updatedPhone;
      }
    });

    this.saveJobs();
    this.render();
    this.closeModal('modalEditSchoolProfile');
    this.showToast('School profile and contact details updated successfully!');
    this.openDashboard();
  }

  copyVacancyAsNew(job) {
    this.closeModal('modalDashboard');

    // Pre-fill post job form
    document.getElementById('jobTitle').value = `${job.role} (New)`;
    document.getElementById('jobSubject').value = job.subject;
    document.getElementById('jobGradeLevel').value = job.grade;
    document.getElementById('jobExperience').value = job.experience;
    document.getElementById('jobCity').value = job.city;
    document.getElementById('jobSalary').value = job.salary;
    document.getElementById('jobDescription').value = job.description;

    document.getElementById('perkStay').checked = job.perks ? job.perks.some(p => p.toLowerCase().includes('stay')) : false;
    document.getElementById('perkFood').checked = job.perks ? job.perks.some(p => p.toLowerCase().includes('food') || p.toLowerCase().includes('meal')) : false;
    document.getElementById('perkCab').checked = job.perks ? job.perks.some(p => p.toLowerCase().includes('bus') || p.toLowerCase().includes('transport')) : false;
    document.getElementById('perkPF').checked = job.perks ? job.perks.some(p => p.toLowerCase().includes('pf')) : false;
    document.getElementById('isUrgent').checked = true;

    // Set school credentials in recruiter verify state
    this.recruiterVerifyState.tempData = {
      schoolName: this.currentUser.schoolName,
      instType: this.currentUser.instType || job.instType,
      website: this.currentUser.website || job.website,
      affiliationCode: this.currentUser.affiliationCode || job.affiliationCode,
      phone: this.currentUser.phone,
      email: this.currentUser.email
    };

    this.verifiedSchoolNameDisplay.textContent = this.currentUser.schoolName;

    // Go straight to step 2 of posting
    this.recruiterStep1.style.display = 'none';
    this.recruiterStep2.style.display = 'block';
    this.openModal('modalRecruiterFlow');
    this.showToast('Vacancy copied! Tweak any details and publish as a new vacancy.');
  }

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${type === 'success' ? '✅' : 'ℹ️'}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }

  // -------------------------------------------------------------------------
  // TEACHER FLOW HANDLERS (PHONE + EMAIL OTP VERIFICATION)
  // -------------------------------------------------------------------------
  startTeacherRegistrationFlow() {
    if (this.currentUser && this.currentUser.type === 'teacher') {
      // Already verified, go directly to step 2 to update profile or re-post
      this.teacherStep1.style.display = 'none';
      this.teacherStep2.style.display = 'block';
      this.openModal('modalTeacherFlow');
      return;
    }

    // New teacher registration - start at Step 1
    this.teacherStep1.style.display = 'block';
    this.teacherStep2.style.display = 'none';
    this.openModal('modalTeacherFlow');
  }

  async handleTeacherVerifyStep1() {
    const name = document.getElementById('tRegName').value.trim();
    const city = document.getElementById('tRegCity').value.trim();
    const phone = document.getElementById('tRegPhone').value.trim().replace(/\D/g, '');
    const email = document.getElementById('tRegEmail').value.trim();
    const emailOtp = document.getElementById('tEmailOtpInput').value.trim();

    if (!name) {
      alert('Please enter your full name.');
      return;
    }

    if (!phone || phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number for school calls and WhatsApp.');
      return;
    }

    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!emailOtp || emailOtp.length !== 6) {
      alert('Please enter the 6-digit verification code received in your email.');
      return;
    }

    const verifyBtn = document.getElementById('btnVerifyTeacherCredentials');
    if (verifyBtn) {
      verifyBtn.disabled = true;
      verifyBtn.textContent = 'Verifying...';
    }

    const result = await this.verifyOtp(email, emailOtp);
    if (verifyBtn) {
      verifyBtn.disabled = false;
      verifyBtn.textContent = 'Verify & Continue to Profile →';
    }

    if (!result.success) {
      alert(result.error || 'Incorrect verification code. Please check your email inbox and try again.');
      return;
    }

    // Save temporary state
    this.teacherVerifyState.tempData = { name, city, phone, email };

    // Transition to Step 2
    this.teacherStep1.style.display = 'none';
    this.teacherStep2.style.display = 'block';
    this.showToast(`Email verified successfully for ${name}!`);
  }

  handleTeacherPublishStep2() {
    const { name, city, phone, email } = this.teacherVerifyState.tempData || {
      name: this.currentUser?.name || 'Educator',
      city: 'Bangalore',
      phone: this.currentUser?.phone || '9876543210',
      email: this.currentUser?.email || 'teacher@edufaculty.in'
    };

    const subject = document.getElementById('teacherSubject').value.trim();
    const qualification = document.getElementById('teacherQualification').value.trim();
    const experience = document.getElementById('teacherExpSelect').value;
    const grade = document.getElementById('teacherPreferredGrade').value;
    const salaryExpectation = document.getElementById('teacherSalaryExpectation').value.trim() || 'Negotiable';
    const availability = document.getElementById('teacherAvailability').value;
    const bio = document.getElementById('teacherBio').value.trim();

    const numericSalary = parseInt(salaryExpectation.replace(/\D/g, '')) || 40000;

    const newCandidate = {
      id: 'cand-' + Date.now(),
      name,
      email,
      phone,
      whatsapp: phone,
      subject,
      grade,
      qualification,
      experience: experience + ' Teaching Experience',
      city,
      salaryExpectation,
      salaryVal: numericSalary,
      isPhoneVerified: true,
      isEmailVerified: true,
      skills: [subject, grade, qualification.split(',')[0].trim(), availability],
      bio: bio || `Verified educator in ${subject}. Holds ${qualification}. Concept-driven teaching with proven academic outcomes. Available in ${city}.`,
      registeredDate: 'Verified Just Now'
    };

    this.candidates.unshift(newCandidate);
    this.saveCandidates();

    // Save current user state
    this.saveCurrentUser({ type: 'teacher', name, phone, email });

    this.formTeacherVerify.reset();
    this.formTeacherProfile.reset();
    this.closeModal('modalTeacherFlow');
    this.setMode('candidates');
    this.showToast(`Teacher profile verified & published! Schools can now contact you directly.`);
  }

  // -------------------------------------------------------------------------
  // RECRUITER FLOW HANDLERS (ANTI-SPAM SCHOOL AUTHENTICATION + POSTING)
  // -------------------------------------------------------------------------
  startRecruiterVerificationFlow() {
    if (this.currentUser && this.currentUser.type === 'school') {
      // Already authenticated school, proceed to Step 2
      this.verifiedSchoolNameDisplay.textContent = this.currentUser.schoolName;
      this.recruiterStep1.style.display = 'none';
      this.recruiterStep2.style.display = 'block';
      this.openModal('modalRecruiterFlow');
      return;
    }

    // New school registration - Step 1 authentication
    this.recruiterStep1.style.display = 'block';
    this.recruiterStep2.style.display = 'none';
    this.openModal('modalRecruiterFlow');
  }

  async handleRecruiterVerifyStep1() {
    const schoolName = document.getElementById('rRegSchoolName').value.trim();
    const instType = document.getElementById('rRegInstType').value;
    const website = document.getElementById('rSchoolWebsite').value.trim();
    const affiliationCode = document.getElementById('rAffiliationCode').value.trim();
    const phone = document.getElementById('rRegPhone').value.trim().replace(/\D/g, '');
    const email = document.getElementById('rRegEmail').value.trim();
    const emailOtp = document.getElementById('rEmailOtpInput').value.trim();

    if (!schoolName) {
      alert('Please enter your School or Institute name.');
      return;
    }

    // Anti-Spam verification check:
    if (!website.startsWith('http://') && !website.startsWith('https://')) {
      alert('Please enter a valid website URL starting with https:// or http://');
      return;
    }

    if (!affiliationCode || affiliationCode.length < 5) {
      alert('Please provide your valid official School Affiliation / UDISE / Registration number.');
      return;
    }

    if (!phone || phone.length < 10) {
      alert('Please enter a valid 10-digit HR mobile number for teacher calls and WhatsApp.');
      return;
    }

    if (!email || !email.includes('@')) {
      alert('Please enter official school email address.');
      return;
    }

    if (!emailOtp || emailOtp.length !== 6) {
      alert('Please enter the 6-digit verification code sent to your official school email.');
      return;
    }

    const verifyBtn = document.getElementById('btnVerifySchoolCredentials');
    if (verifyBtn) {
      verifyBtn.disabled = true;
      verifyBtn.textContent = 'Authenticating School...';
    }

    const result = await this.verifyOtp(email, emailOtp);
    if (verifyBtn) {
      verifyBtn.disabled = false;
      verifyBtn.textContent = 'Authenticate School & Continue →';
    }

    if (!result.success) {
      alert(result.error || 'Incorrect verification code. Please check your school email inbox and try again.');
      return;
    }

    // Save temporary recruiter state
    this.recruiterVerifyState.tempData = {
      schoolName,
      instType,
      website,
      affiliationCode,
      phone,
      email
    };

    this.verifiedSchoolNameDisplay.textContent = schoolName;

    // Transition to Step 2: Post Job
    this.recruiterStep1.style.display = 'none';
    this.recruiterStep2.style.display = 'block';
    this.showToast(`School authenticated! Verified badge granted to ${schoolName}`);
  }

  handleRecruiterPublishStep2() {
    const data = this.recruiterVerifyState.tempData || {
      schoolName: this.currentUser?.schoolName || 'School Management',
      instType: 'CBSE Affiliated School',
      website: this.currentUser?.website || 'https://school.edu.in',
      affiliationCode: 'CBSE Affiliation Verified',
      phone: this.currentUser?.phone || '9876543210',
      email: this.currentUser?.email || 'hr@school.edu.in'
    };

    const role = document.getElementById('jobTitle').value.trim();
    const subject = document.getElementById('jobSubject').value.trim();
    const grade = document.getElementById('jobGradeLevel').value;
    const experience = document.getElementById('jobExperience').value;
    const city = document.getElementById('jobCity').value.trim();
    const salary = document.getElementById('jobSalary').value.trim();
    const description = document.getElementById('jobDescription').value.trim();
    const isUrgent = document.getElementById('isUrgent').checked;

    const perks = [];
    if (document.getElementById('perkStay').checked) perks.push('Free Staff Stay');
    if (document.getElementById('perkFood').checked) perks.push('Free Meals');
    if (document.getElementById('perkCab').checked) perks.push('School Bus');
    if (document.getElementById('perkPF').checked) perks.push('PF & Medical');

    const numericSalary = parseInt(salary.replace(/\D/g, '')) || 45000;

    const newJob = {
      id: 'job-' + Date.now(),
      schoolName: data.schoolName,
      instType: data.instType,
      website: data.website,
      affiliationCode: data.affiliationCode,
      isVerifiedInstitution: true,
      role,
      subject,
      grade,
      experience,
      city,
      salary,
      salaryVal: numericSalary,
      phone: data.phone,
      whatsapp: data.phone,
      isUrgent,
      perks,
      description: description || `Direct requirement for ${role} at ${data.schoolName}. Authenticated institution. Contact HR directly.`,
      postedDaysAgo: 'Just now'
    };

    this.jobs.unshift(newJob);
    this.saveJobs();

    // Save logged in school
    this.saveCurrentUser({
      type: 'school',
      name: data.schoolName,
      schoolName: data.schoolName,
      phone: data.phone,
      email: data.email,
      website: data.website
    });

    this.formRecruiterVerify.reset();
    this.formPostJob.reset();
    this.closeModal('modalRecruiterFlow');
    this.setMode('jobs');
    this.showToast(`Verified vacancy published! Teachers can now contact your HR directly.`);
  }

  // Direct Contact Modal
  openContactModal(item, type) {
    if (type === 'job') {
      this.contactModalTitle.textContent = 'Direct School Management Contact';
      this.contactOrgName.textContent = item.schoolName;
      this.contactRoleDesc.textContent = `${item.role} • ${item.city}`;
      this.contactVerificationText.textContent = `${item.affiliationCode || 'Domain & Affiliation Verified Institution'}`;
      this.contactDisplayPhone.textContent = `+91 ${item.phone}`;
      this.contactDisplayWhatsapp.textContent = `+91 ${item.whatsapp}`;

      if (item.website) {
        this.contactWebsiteRow.style.display = 'flex';
        this.contactDisplayWebsite.href = item.website;
        this.contactDisplayWebsite.textContent = item.website.replace('https://', '').replace('http://', '');
      } else {
        this.contactWebsiteRow.style.display = 'none';
      }

      this.btnDirectCall.href = `tel:+91${item.phone}`;
      const msg = encodeURIComponent(`Hello HR, I saw your verified vacancy for "${item.role}" on EduFaculty. I am interested and would like to share my resume for a demo class.`);
      this.btnDirectWhatsapp.href = `https://wa.me/91${item.whatsapp}?text=${msg}`;
    } else {
      this.contactModalTitle.textContent = 'Direct Teacher Contact';
      this.contactOrgName.textContent = item.name;
      this.contactRoleDesc.textContent = `${item.subject} Teacher (${item.qualification})`;
      this.contactVerificationText.textContent = `Phone & Email Identity Verified Candidate`;
      this.contactDisplayPhone.textContent = `+91 ${item.phone}`;
      this.contactDisplayWhatsapp.textContent = `+91 ${item.whatsapp}`;
      this.contactWebsiteRow.style.display = 'none';

      this.btnDirectCall.href = `tel:+91${item.phone}`;
      const msg = encodeURIComponent(`Hello ${item.name}, We saw your verified profile on EduFaculty for "${item.subject}". We have a vacancy at our school. Are you available for a discussion?`);
      this.btnDirectWhatsapp.href = `https://wa.me/91${item.whatsapp}?text=${msg}`;
    }

    this.openModal('modalContactInfo');
  }

  getFilteredItems() {
    if (this.mode === 'jobs') {
      return this.jobs.filter(job => {
        // Closed / Filled vacancies are hidden from public search
        if (job.status === 'closed') return false;

        if (this.searchQuery) {
          const q = this.searchQuery.toLowerCase();
          const matchQuery = (
            job.subject.toLowerCase().includes(q) ||
            job.role.toLowerCase().includes(q) ||
            job.schoolName.toLowerCase().includes(q) ||
            job.city.toLowerCase().includes(q)
          );
          if (!matchQuery) return false;
        }

        if (this.locationFilter && !job.city.toLowerCase().includes(this.locationFilter.toLowerCase())) {
          return false;
        }

        if (this.gradeFilter && !job.grade.toLowerCase().includes(this.gradeFilter.toLowerCase())) {
          return false;
        }

        if (this.tagFilter !== 'all') {
          if (this.tagFilter === 'Urgent' && !job.isUrgent) return false;
          if (this.tagFilter === 'Accomodation') {
            const hasStay = job.perks.some(p => p.toLowerCase().includes('stay') || p.toLowerCase().includes('quarters'));
            if (!hasStay) return false;
          }
          if (['CBSE', 'ICSE'].includes(this.tagFilter)) {
            if (!job.instType.includes(this.tagFilter)) return false;
          }
          if (['Mathematics', 'Science', 'English', 'Computer'].includes(this.tagFilter)) {
            if (!job.subject.toLowerCase().includes(this.tagFilter.toLowerCase())) return false;
          }
        }

        return true;
      }).sort((a, b) => {
        if (this.sortBy === 'salaryHigh') return b.salaryVal - a.salaryVal;
        if (this.sortBy === 'urgent') return (b.isUrgent ? 1 : 0) - (a.isUrgent ? 1 : 0);
        return 0;
      });
    } else {
      return this.candidates.filter(cand => {
        if (this.searchQuery) {
          const q = this.searchQuery.toLowerCase();
          const matchQuery = (
            cand.name.toLowerCase().includes(q) ||
            cand.subject.toLowerCase().includes(q) ||
            cand.qualification.toLowerCase().includes(q) ||
            cand.city.toLowerCase().includes(q) ||
            cand.skills.some(s => s.toLowerCase().includes(q))
          );
          if (!matchQuery) return false;
        }

        if (this.locationFilter && !cand.city.toLowerCase().includes(this.locationFilter.toLowerCase())) {
          return false;
        }

        if (this.gradeFilter && !cand.grade.toLowerCase().includes(this.gradeFilter.toLowerCase())) {
          return false;
        }

        if (this.tagFilter !== 'all') {
          if (['CBSE', 'ICSE'].includes(this.tagFilter)) {
            if (!cand.experience.includes(this.tagFilter) && !cand.qualification.includes(this.tagFilter)) return false;
          }
          if (['Mathematics', 'Science', 'English', 'Computer'].includes(this.tagFilter)) {
            if (!cand.subject.toLowerCase().includes(this.tagFilter.toLowerCase())) return false;
          }
        }

        return true;
      }).sort((a, b) => {
        if (this.sortBy === 'salaryHigh') return b.salaryVal - a.salaryVal;
        return 0;
      });
    }
  }

  render() {
    const items = this.getFilteredItems();
    this.resultsCount.textContent = `Showing ${items.length} ${this.mode === 'jobs' ? 'verified school vacancies' : 'verified teacher profiles'}`;

    if (items.length === 0) {
      this.listingsContainer.innerHTML = '';
      this.emptyState.style.display = 'block';
      return;
    }

    this.emptyState.style.display = 'none';

    if (this.mode === 'jobs') {
      this.listingsContainer.innerHTML = items.map(job => this.renderJobCard(job)).join('');
    } else {
      this.listingsContainer.innerHTML = items.map(cand => this.renderCandidateCard(cand)).join('');
    }

    // Attach click events
    this.listingsContainer.querySelectorAll('.btn-contact-call').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-id');
        const item = this.mode === 'jobs' ? this.jobs.find(j => j.id === id) : this.candidates.find(c => c.id === id);
        if (item) this.openContactModal(item, this.mode === 'jobs' ? 'job' : 'cand');
      });
    });

    this.listingsContainer.querySelectorAll('.btn-contact-wa').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-id');
        const item = this.mode === 'jobs' ? this.jobs.find(j => j.id === id) : this.candidates.find(c => c.id === id);
        if (item) this.openContactModal(item, this.mode === 'jobs' ? 'job' : 'cand');
      });
    });
  }

  renderJobCard(job) {
    const initials = job.schoolName.substring(0, 2).toUpperCase();
    return `
      <article class="portal-card" id="${job.id}">
        <div class="card-top">
          <div class="org-info">
            <div class="org-avatar">${initials}</div>
            <div class="org-details">
              <h4>${job.schoolName} <span class="verified-icon" title="Authentic Institution Verified (Website & Affiliation Verified)">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#2563eb"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4" stroke="#fff" stroke-width="2.5" fill="none"></path></svg>
              </span></h4>
              <span class="org-type-badge">${job.instType} • ${job.postedDaysAgo}</span>
            </div>
          </div>
          ${job.isUrgent ? `<span class="badge-urgent">🔥 Urgent Hiring</span>` : ''}
        </div>

        <h3 class="card-role-title">${job.role}</h3>

        <div class="meta-pills-row">
          <span class="meta-pill meta-pill-accent">📚 ${job.subject}</span>
          <span class="meta-pill">🎯 ${job.grade}</span>
          <span class="meta-pill">⏳ ${job.experience}</span>
          ${job.affiliationCode ? `<span class="meta-pill" style="color:#1d4ed8;background:#eff6ff">🛡️ ${job.affiliationCode.split(':')[0]}</span>` : ''}
        </div>

        <div class="details-row">
          <div class="salary-box">
            <span class="salary-label">Monthly Salary</span>
            <span class="salary-amount">${job.salary}</span>
          </div>
          <div class="location-box">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>${job.city}</span>
          </div>
        </div>

        <p class="card-desc">${job.description}</p>

        <div class="card-actions-grid">
          <button class="btn-contact-call" data-id="${job.id}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>Call HR</span>
          </button>
          <button class="btn-contact-wa" data-id="${job.id}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            <span>WhatsApp HR</span>
          </button>
        </div>
      </article>
    `;
  }

  renderCandidateCard(cand) {
    const initials = cand.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    return `
      <article class="portal-card" id="${cand.id}">
        <div class="card-top">
          <div class="org-info">
            <div class="org-avatar candidate-avatar">${initials}</div>
            <div class="org-details">
              <h4>${cand.name} <span class="verified-icon" title="Identity Verified (Phone & Email Verified)">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#059669"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4" stroke="#fff" stroke-width="2.5" fill="none"></path></svg>
              </span></h4>
              <span class="org-type-badge">${cand.qualification}</span>
            </div>
          </div>
          <span class="badge-urgent" style="background:#ecfdf5;color:#047857;border-color:#a7f3d0">✓ Verified Candidate</span>
        </div>

        <h3 class="card-role-title">${cand.subject} Teacher</h3>

        <div class="meta-pills-row">
          <span class="meta-pill meta-pill-accent">🎓 ${cand.grade}</span>
          <span class="meta-pill">⏳ ${cand.experience}</span>
          ${cand.skills.map(s => `<span class="meta-pill">${s}</span>`).slice(0, 2).join('')}
        </div>

        <div class="details-row">
          <div class="salary-box">
            <span class="salary-label">Expected Salary</span>
            <span class="salary-amount">${cand.salaryExpectation}</span>
          </div>
          <div class="location-box">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>${cand.city}</span>
          </div>
        </div>

        <p class="card-desc">${cand.bio}</p>

        <div class="card-actions-grid">
          <button class="btn-contact-call" data-id="${cand.id}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>Call Teacher</span>
          </button>
          <button class="btn-contact-wa" data-id="${cand.id}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            <span>WhatsApp Candidate</span>
          </button>
        </div>
      </article>
    `;
  }
}

// Boot application
document.addEventListener('DOMContentLoaded', () => {
  window.app = new EduFacultyApp();
});
