const ICONS = {
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20M9.5 10.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM17 11a3 3 0 1 0 0-6M21 20v-1.5a4 4 0 0 0-3-3.85"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>',
  tooth: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8.5 4.5C6 2.6 3.5 4.2 4 7.5c.4 2.7 1.3 3.1 1.4 6.6.1 3.9 1.4 6.4 3 6.4 1.4 0 1.4-4.5 3.6-4.5s2.3 4.5 3.7 4.5c1.7 0 2.9-2.6 3-6.4.1-3.5 1-3.9 1.4-6.6.5-3.3-2-4.9-4.5-3-1.8 1.3-4.3 1.3-6.1 0Z"/></svg>',
  usersCog: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 20v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20M8.5 10.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM19 14l.8 1.6 1.7.3-1.2 1.3.2 1.8-1.5-.8-1.6.8.3-1.8-1.3-1.3 1.8-.3Z"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></svg>',
  credit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19V5M4 19h17M8 16v-5M12 16V7M16 16v-3M20 16V4"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"/><path d="m19.4 15 .1.1a2 2 0 1 1-2.8 2.8l-.1-.1a2 2 0 0 0-3.4 1.4v.2a2 2 0 1 1-4 0v-.2a2 2 0 0 0-3.4-1.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A2 2 0 0 0 1.6 12a2 2 0 1 1 0-4h.2a2 2 0 0 0 1.4-3.4l-.1-.1A2 2 0 1 1 5.9 1.7l.1.1A2 2 0 0 0 9.4.4V.2a2 2 0 1 1 4 0v.2a2 2 0 0 0 3.4 1.4l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A2 2 0 0 0 21 8h.2a2 2 0 1 1 0 4H21a2 2 0 0 0-1.6 3Z"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></svg>'
};

const ROLE_LABELS = {
  super_admin: 'Master Admin',
  clinic_admin: 'Clinic Admin',
  dentist: 'Dentist',
  receptionist: 'Receptionist',
  assistant: 'Dental Assistant',
  patient: 'Patient',
  billing: 'Billing Staff'
};

const RBAC = {
  super_admin: ['dashboard', 'appointments', 'patients', 'records', 'dentists', 'staff', 'services', 'billing', 'reports', 'notifications', 'users', 'roles', 'settings'],
  clinic_admin: ['dashboard', 'appointments', 'patients', 'records', 'dentists', 'staff', 'services', 'reports', 'notifications'],
  dentist: ['dashboard', 'appointments', 'patients', 'records', 'notifications'],
  receptionist: ['dashboard', 'appointments', 'patients', 'dentists', 'services', 'notifications'],
  assistant: ['dashboard', 'appointments', 'patients', 'records', 'notifications'],
  patient: ['dashboard', 'appointments', 'dentists', 'services', 'notifications'],
  billing: ['dashboard', 'billing', 'reports', 'notifications']
};

const NAV = [
  ['dashboard', 'Overview', 'grid'],
  ['appointments', 'Appointments', 'calendar'],
  ['patients', 'Patients', 'users'],
  ['records', 'Medical Records', 'file'],
  ['dentists', 'Dentists', 'tooth'],
  ['staff', 'Staff', 'usersCog'],
  ['services', 'Services', 'briefcase'],
  ['billing', 'Billing', 'credit'],
  ['reports', 'Reports', 'chart'],
  ['notifications', 'Notifications', 'bell'],
  ['users', 'User Management', 'usersCog'],
  ['roles', 'Role Management', 'settings'],
  ['settings', 'Clinic Settings', 'settings']
];

const DEMO_USERS = [
  { id: 'u1', name: 'Ma. Elena B. Retuerma', email: 'admin@brdental.com', password: 'admin123', role: 'super_admin', status: 'Active', created: 'Jan 08, 2025' },
  { id: 'u2', name: 'Dr. Elena Moore', email: 'dentist@brdental.com', password: 'demo123', role: 'dentist', status: 'Active', created: 'Feb 14, 2025' },
  { id: 'u3', name: 'Jordan Lee', email: 'reception@brdental.com', password: 'demo123', role: 'receptionist', status: 'Active', created: 'Mar 02, 2025' },
  { id: 'u4', name: 'Amelia Brooks', email: 'patient@brdental.com', password: 'demo123', role: 'patient', status: 'Active', created: 'Mar 11, 2025' },
  { id: 'u5', name: 'Noah Williams', email: 'billing@brdental.com', password: 'demo123', role: 'billing', status: 'Active', created: 'Mar 19, 2025' }
];

const SEED = {
  appointments: [
    { id: 'a1', patient: 'Amelia Brooks', dentist: 'Dr. Elena Moore', service: 'Dental Cleaning', date: 'Today', time: '09:00 AM', status: 'Confirmed', note: 'Routine six-month cleaning' },
    { id: 'a2', patient: 'Liam Carter', dentist: 'Dr. Elena Moore', service: 'Dental Filling', date: 'Today', time: '10:30 AM', status: 'Pending', note: 'Upper right molar' },
    { id: 'a3', patient: 'Sofia Grant', dentist: 'Dr. Elena Moore', service: 'Check-up', date: 'Today', time: '01:00 PM', status: 'Confirmed', note: 'New patient assessment' },
    { id: 'a4', patient: 'Oliver Reed', dentist: 'Dr. Elena Moore', service: 'Whitening', date: 'Tomorrow', time: '11:00 AM', status: 'Rescheduled', note: 'Moved from Monday' }
  ],
  patients: [
    { id: 'p1', name: 'Amelia Brooks', email: 'amelia@example.com', phone: '+1 555 0182', dob: '14 May 1994', status: 'Active', history: 'Mild sensitivity', allergies: 'None reported' },
    { id: 'p2', name: 'Liam Carter', email: 'liam@example.com', phone: '+1 555 0127', dob: '21 Sep 1988', status: 'Active', history: 'Previous filling', allergies: 'Penicillin' },
    { id: 'p3', name: 'Sofia Grant', email: 'sofia@example.com', phone: '+1 555 0164', dob: '03 Feb 2001', status: 'Active', history: 'No known history', allergies: 'None reported' },
    { id: 'p4', name: 'Oliver Reed', email: 'oliver@example.com', phone: '+1 555 0109', dob: '29 Nov 1979', status: 'Active', history: 'Root canal 2022', allergies: 'Latex' }
  ],
  dentists: [
    { id: 'd1', name: 'Dr. Elena Moore', specialty: 'Cosmetic Dentistry', email: 'elena@brdental.com', availability: 'Mon - Fri', status: 'Active' },
    { id: 'd2', name: 'Dr. Marcus Chen', specialty: 'Endodontics', email: 'marcus@brdental.com', availability: 'Tue - Sat', status: 'Active' }
  ],
  services: [
    { id: 's1', name: 'Dental Cleaning', duration: '45 min', price: '$85', description: 'Comprehensive preventive cleaning' },
    { id: 's2', name: 'Tooth Extraction', duration: '60 min', price: '$180', description: 'Simple extraction procedure' },
    { id: 's3', name: 'Dental Filling', duration: '45 min', price: '$140', description: 'Tooth-colored composite filling' },
    { id: 's4', name: 'Teeth Whitening', duration: '90 min', price: '$250', description: 'Professional in-office whitening' },
    { id: 's5', name: 'Root Canal Treatment', duration: '90 min', price: '$780', description: 'Complete endodontic treatment' }
  ],
  invoices: [
    { id: 'INV-1042', patient: 'Amelia Brooks', service: 'Dental Cleaning', amount: '$85.00', status: 'Paid', date: 'Jun 12, 2025' },
    { id: 'INV-1041', patient: 'Liam Carter', service: 'Dental Filling', amount: '$140.00', status: 'Partially Paid', date: 'Jun 11, 2025' },
    { id: 'INV-1040', patient: 'Sofia Grant', service: 'Check-up', amount: '$60.00', status: 'Unpaid', date: 'Jun 10, 2025' }
  ],
  records: [
    { id: 'r1', patient: 'Amelia Brooks', date: 'Jun 12, 2025', diagnosis: 'Healthy gums', treatment: 'Routine cleaning', dentist: 'Dr. Elena Moore' },
    { id: 'r2', patient: 'Liam Carter', date: 'Jun 11, 2025', diagnosis: 'Caries, upper right molar', treatment: 'Treatment plan created', dentist: 'Dr. Elena Moore' }
  ],
  notifications: [
    { text: 'Appointment with Amelia Brooks confirmed', time: '12 min ago', type: 'check' },
    { text: 'New patient registration: Sofia Grant', time: '2 hrs ago', type: 'users' },
    { text: 'Payment received for INV-1042', time: 'Yesterday', type: 'credit' }
  ]
};

let state = {
  user: null,
  view: 'dashboard',
  query: '',
  modal: null,
  authMode: 'login',
  data: loadData()
};

function loadData() {
  const saved = localStorage.getItem('br-dental-data');
  return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(SEED));
}

function saveData() {
  localStorage.setItem('br-dental-data', JSON.stringify(state.data));
}

function initials(name) {
  return name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));
}

function can(permission) {
  return !!state.user && RBAC[state.user.role]?.includes(permission);
}

function notify(message) {
  const region = document.getElementById('toast-region');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  region.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

function roleLabel(role) {
  return ROLE_LABELS[role] || role;
}

function statusClass(status) {
  return status.toLowerCase().replaceAll(' ', '-');
}

function persistSession() {
  localStorage.setItem('br-dental-session', JSON.stringify(state.user));
}

function currentPageTitle() {
  return NAV.find((item) => item[0] === state.view)?.[1] || 'Overview';
}

function render() {
  document.getElementById('app').innerHTML = state.user
    ? renderShell()
    : state.authMode === 'register'
      ? renderRegister()
      : renderAuth();

  updateAuthLabels();
  updateDashboardGreeting();
  updatePatientOverview();
  bindEvents();
}

function updateAuthLabels() {
  const loginButton = document.querySelector('#login-form .button-primary');
  const registerButton = document.querySelector('#register-form .button-primary');
  const registerLink = document.querySelector('[data-action="register"]');
  const loginLink = document.querySelector('[data-action="login"]');
  const backLoginLink = document.querySelector('[data-action="back-login"]');

  if (loginButton) loginButton.textContent = 'Login';
  if (registerButton) registerButton.textContent = 'Register';
  if (registerLink) registerLink.textContent = 'Register';
  if (loginLink) loginLink.textContent = 'Login';
  if (backLoginLink) backLoginLink.textContent = 'Login';
}

function updateDashboardGreeting() {
  if (state.user?.role !== 'patient' && state.view === 'dashboard') {
    const greeting = document.querySelector('.page-heading .eyebrow');
    if (greeting) greeting.textContent = 'Good morning';
  }

  const logoutButton = document.querySelector('[data-action="logout"]');
  if (logoutButton) {
    logoutButton.textContent = 'Log out';
    logoutButton.classList.add('logout-button');
  }
}

function updatePatientOverview() {
  const content = document.querySelector('.content');
  if (!content || state.user?.role !== 'patient' || state.view !== 'dashboard') return;

  content.classList.add('patient-mode');
  const heroTitle = content.querySelector('.hero-banner h2');
  const heroText = content.querySelector('.hero-banner p');
  const heroEyebrow = content.querySelector('.hero-banner .eyebrow');
  const scheduleButton = content.querySelector('.hero-banner [data-view="appointments"]');

  if (heroEyebrow) heroEyebrow.textContent = 'Your next step';
  if (heroTitle) heroTitle.textContent = 'Manage your dental visits.';
  if (heroText) heroText.textContent = 'Book a visit or check the details of an upcoming appointment.';
  if (scheduleButton) scheduleButton.textContent = 'My appointments';
}

function renderAuth() {
  return `<main class="auth-page"><section class="auth-visual"><div class="brand">${brandMark()}<div><strong>BR Dental Clinic</strong><span>care, clarity, confidence</span></div></div><div class="auth-copy"><div class="eyebrow" style="color:#a9e1d5">The calm side of care</div><h1>Better visits start with a better view.</h1><p>A focused workspace for your clinic team to coordinate appointments, patient care, and the details that keep every smile moving forward.</p><div class="auth-points"><div class="auth-point">${ICONS.check} One clear view of today's care</div><div class="auth-point">${ICONS.check} Thoughtful access for every role</div><div class="auth-point">${ICONS.check} Ready for your future backend</div></div></div><div class="auth-footer">Frontend demonstration · BR Dental Clinic</div></section><section class="auth-form-side"><div class="auth-form"><div class="eyebrow">Welcome back</div><h2>Sign in to your clinic</h2><p class="subtitle">Use a demo account below or enter your clinic credentials.</p><form id="login-form" class="form-stack"><div class="field"><label for="login-email">Email or username</label><input id="login-email" name="email" type="text" placeholder="you@brdental.com" required /></div><div class="field"><label for="login-password">Password</label><div class="password-wrap"><input id="login-password" name="password" type="password" placeholder="Enter your password" required /><button class="password-toggle" type="button" data-toggle-password="login-password" aria-label="Show password">${ICONS.eye}</button></div></div><div class="form-meta"><label class="check"><input type="checkbox" /> Remember me</label><button class="text-button" type="button" data-action="forgot">Forgot password?</button></div><button class="button button-primary" type="submit">Sign in <span>→</span></button></form><div class="demo-login"><strong>Demo access</strong><p>Master Admin: admin@brdental.com / admin123<br>Patient: patient@brdental.com / demo123</p><button type="button" data-demo="admin">Use Master Admin account →</button></div><div class="auth-switch">New to BR Dental Clinic? <button type="button" data-action="register">Create a patient account</button></div></div></section></main>`;
}
function renderRegister() {
  return `<main class="auth-page"><section class="auth-visual"><div class="brand">${brandMark()}<div><strong>BR Dental Clinic</strong><span>care, clarity, confidence</span></div></div><div class="auth-copy"><div class="eyebrow" style="color:#a9e1d5">Your care space</div><h1>A healthier smile starts with a first step.</h1><p>Create your patient account to discover services, request appointments, and keep your visit history close at hand.</p><div class="auth-points"><div class="auth-point">${ICONS.check} Book and manage your own appointments</div><div class="auth-point">${ICONS.check} View your approved care information</div><div class="auth-point">${ICONS.check} Your account starts as Patient access</div></div></div><div class="auth-footer">Patient registration · BR Dental Clinic</div></section><section class="auth-form-side"><div class="auth-form"><div class="eyebrow">Patient registration</div><h2>Create your account</h2><p class="subtitle">Only patient accounts can be created through public registration.</p><form id="register-form" class="form-stack"><div class="field"><label for="register-name">Full name</label><input id="register-name" name="name" type="text" placeholder="Your full name" required /></div><div class="field"><label for="register-email">Email address</label><input id="register-email" name="email" type="email" placeholder="you@example.com" required /></div><div class="field"><label for="register-password">Password</label><div class="password-wrap"><input id="register-password" name="password" type="password" placeholder="Create a password" required /><button class="password-toggle" type="button" data-toggle-password="register-password" aria-label="Show password">${ICONS.eye}</button></div></div><div class="field"><label for="register-phone">Phone number</label><input id="register-phone" name="phone" type="tel" placeholder="+1 555 0100" required /></div><button class="button button-primary" type="submit">Create patient account <span>→</span></button></form><div class="auth-switch">Already have an account? <button type="button" data-action="back-login">Back to sign in</button></div></div></section></main>`;
}
function brandMark() { return `<div class="brand-mark">${ICONS.tooth}</div>`; }
function renderShell() {
  const allowedNav = NAV.filter(item => can(item[0]));
  return `<div class="app-shell"><aside class="sidebar" id="sidebar"><div class="brand">${brandMark()}<div><strong>BR Dental Clinic</strong><span>care console</span></div></div><div class="nav-label">Workspace</div><nav class="nav">${allowedNav.map(item => `<button class="nav-button ${state.view === item[0] ? 'active' : ''}" data-view="${item[0]}">${ICONS[item[2]]}<span>${item[1]}</span></button>`).join('')}</nav><div class="sidebar-bottom"><div class="help-box"><strong>Need a hand?</strong><p>Find answers or contact clinic support.</p><button class="text-button" data-action="help">Open help center →</button></div><div class="user-mini"><div class="avatar">${initials(state.user.name)}</div><div><strong>${escapeHtml(state.user.name)}</strong><span>${roleLabel(state.user.role)}</span></div></div></div></aside><main class="main"><header class="topbar"><div class="top-actions"><button class="icon-button mobile-menu" data-action="menu" aria-label="Open navigation">${ICONS.menu}</button><div class="breadcrumb">Workspace <span> / </span> <strong>${currentPageTitle()}</strong></div></div><div class="top-actions"><div class="search">${ICONS.search}<input id="global-search" type="search" placeholder="Search anything" value="${escapeHtml(state.query)}" /></div><button class="icon-button" data-view="notifications" aria-label="Notifications">${ICONS.bell}<span class="dot"></span></button><button class="icon-button" data-action="logout" aria-label="Log out">${ICONS.logout || '↪'}</button></div></header><section class="content">${renderView()}</section></main></div>${state.modal ? renderModal() : ''}`;
}
function renderView() { const views = { dashboard: renderDashboard, appointments: renderAppointments, patients: renderPatients, records: renderRecords, dentists: renderDentists, staff: renderStaff, services: renderServices, billing: renderBilling, reports: renderReports, notifications: renderNotifications, users: renderUsers, roles: renderRoles, settings: renderSettings }; return (views[state.view] || renderDashboard)(); }
function heading(eyebrow, title, subtitle, action = '') { return `<div class="page-heading"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p class="subtitle">${subtitle}</p></div>${action}</div>`; }
function actionButton(label, type) { return `<button class="button button-primary" data-modal="${type}">${ICONS.plus}${label}</button>`; }
function renderDashboard() {
  const role = state.user.role; const isPatient = role === 'patient';
  const cards = role === 'billing' ? [['Today\'s payments','$1,240','+12.5% from yesterday','credit'],['Pending payments','8','3 due this week','calendar'],['Open invoices','24','4 need attention','file'],['Month to date','$8,420','+8.2% from last month','chart']] : isPatient ? [['Next appointment','Jun 18','10:30 AM · Dr. Moore','calendar'],['Appointments','6','2 upcoming','check'],['Available dentists','4','Taking new patients','tooth'],['Care plan','On track','Last updated today','file']] : [['Total patients','1,284','+8.2% this month','users'],["Today's appointments",'24','+4 from yesterday','calendar'],['Active dentists','12','2 on leave today','tooth'],['Open tasks','18','6 need attention','chart']];

  const patientHero = `
    <div class="hero-banner">
      <div>
        <div class="eyebrow">Your care, simplified</div>
        <h2>Your dental care in one easy place.</h2>
        <p>Book appointments, check your visit details, and stay informed without the confusion.</p>
        <div class="cta-row">
          <button class="button button-primary" data-modal="appointment">Book appointment</button>
          <button class="button button-secondary" data-view="appointments">View schedule</button>
        </div>
      </div>
      <div class="hero-badges">
        <div class="mini-feature"><span>Easy booking</span><strong>Fast</strong></div>
        <div class="mini-feature"><span>Friendly care</span><strong>Warm</strong></div>
        <div class="mini-feature"><span>Clear updates</span><strong>Simple</strong></div>
      </div>
    </div>
  `;

  const patientServices = `
    <div class="service-section" style="margin-top:18px;">
      <div class="panel">
        <div class="panel-header">
          <div><h2>Popular services</h2><p>Simple care options for everyday dental needs.</p></div>
        </div>
        <div class="panel-body">
          <div class="service-cards">
            <div class="service-card">
              <span class="service-tag">Checkups</span>
              <h3>Routine cleanings</h3>
              <p>Keep teeth and gums healthy with regular, comfortable care.</p>
            </div>
            <div class="service-card">
              <span class="service-tag">Smile</span>
              <h3>Whitening</h3>
              <p>Brighten your smile with a simple treatment designed for results.</p>
            </div>
            <div class="service-card">
              <span class="service-tag">Repair</span>
              <h3>Tooth care</h3>
              <p>Fix problems early with clear plans and support from the clinic.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const patientTrust = `
    <div class="grid-two" style="margin-top:18px;">
      <div class="panel">
        <div class="panel-header">
          <div><h2>Why patients choose BR Dental</h2><p>Comfortable care, transparent guidance, and more confidence in every visit.</p></div>
        </div>
        <div class="panel-body">
          <div class="feature-list">
            <div class="feature-item"><span class="activity-mark">${ICONS.check}</span><div><h3>Gentle, modern dentistry</h3><p>Thoughtful treatments designed around comfort, clarity, and long-term health.</p></div></div>
            <div class="feature-item"><span class="activity-mark">${ICONS.check}</span><div><h3>Clear treatment plans</h3><p>Understand your options before care starts, with realistic next steps and timelines.</p></div></div>
            <div class="feature-item"><span class="activity-mark">${ICONS.check}</span><div><h3>Convenient scheduling</h3><p>Book new visits, reschedule appointments, and stay informed without the guesswork.</p></div></div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-header">
          <div><h2>Next steps</h2><p>Helpful actions to prepare for your next visit.</p></div>
        </div>
        <div class="panel-body">
          <div class="feature-list compact">
            <div class="feature-item"><span class="activity-mark">${ICONS.calendar}</span><div><h3>Confirm your next visit</h3><p>Check your appointment details and expected treatment.</p></div></div>
            <div class="feature-item"><span class="activity-mark">${ICONS.file}</span><div><h3>Review your records</h3><p>Keep your care history and notes close at hand.</p></div></div>
            <div class="feature-item"><span class="activity-mark">${ICONS.tooth}</span><div><h3>Ask about treatment goals</h3><p>Let the clinic know what you want improved or addressed.</p></div></div>
          </div>
        </div>
      </div>
    </div>
  `;

  return `
    ${heading(isPatient ? 'Your care space' : 'Good morning, ' + state.user.name.split(' ')[0], isPatient ? 'Your smile, in focus.' : 'Here is your clinic at a glance.', isPatient ? 'Everything you need for your next visit, in one place.' : 'A quiet overview of the work that matters today.', isPatient ? actionButton('Book appointment','appointment') : '')}
    ${isPatient ? patientHero : ''}
    ${isPatient ? patientServices : ''}
    <div class="stats-grid">${cards.map(card => `<div class="stat-card"><div class="stat-top"><span class="stat-label">${card[0]}</span><span class="stat-icon">${ICONS[card[3]] || ICONS.grid}</span></div><strong class="stat-number">${card[1]}</strong><span class="stat-change ${card[2].includes('updated') || card[2].includes('leave') ? 'neutral' : ''}">${card[2]}</span></div>`).join('')}</div>
    <div class="grid-two">
      <div class="panel">
        <div class="panel-header">
          <div><h2>${isPatient ? 'Upcoming appointments' : 'Today\'s appointments'}</h2><p>${isPatient ? 'Your next visits at BR Dental Clinic' : 'Monday, June 16, 2025 · 24 appointments'}</p></div>
          <button class="link-button" data-view="appointments">View calendar →</button>
        </div>
        <div class="panel-body">${appointmentList()}</div>
      </div>
      <div class="panel">
        <div class="panel-header">
          <div><h2>${role === 'billing' ? 'Revenue overview' : 'Clinic activity'}</h2><p>${role === 'billing' ? 'Weekly payment collection' : 'A pulse on your workspace'}</p></div>
        </div>
        <div class="panel-body">${role === 'billing' ? miniChart() : activityList()}</div>
      </div>
    </div>
    ${isPatient ? patientTrust : ''}
  `;
}
function appointmentList() { const appointments = state.user?.role === 'patient' ? state.data.appointments.filter(a => a.patient === state.user.name) : state.data.appointments; return `<div class="appointment-list">${appointments.slice(0,4).map(a => `<div class="appointment-row"><span class="time">${a.time}</span><div><h3>${a.patient}</h3><div class="service">${a.service} · ${a.dentist}</div></div><span class="status ${statusClass(a.status)}">${a.status}</span></div>`).join('')}</div>`; }
function activityList() { const notifications = state.user?.role === 'patient' ? state.data.notifications.filter(n => n.text.includes(state.user.name)) : state.data.notifications; return `<div class="activity">${notifications.map(n => `<div class="activity-item"><span class="activity-mark">${ICONS[n.type] || ICONS.bell}</span><div><h3>${n.text}</h3><p>${n.time}</p></div></div>`).join('')}</div>`; }
function miniChart() { const bars = [42,58,47,76,62,88,70]; return `<div class="chart">${bars.map((bar, i) => `<div class="bar-wrap"><div class="bar ${i === 5 ? 'highlight' : ''}" style="height:${bar}%"></div><span class="bar-label">${['M','T','W','T','F','S','S'][i]}</span></div>`).join('')}</div><div class="kpi-row" style="margin-top:16px"><div class="mini-kpi"><span>Collected</span><strong>$8.4k</strong></div><div class="mini-kpi"><span>Outstanding</span><strong>$2.1k</strong></div><div class="mini-kpi"><span>Collection rate</span><strong>81%</strong></div></div>`; }
function tablePage(eyebrow, title, subtitle, action, toolbar, table) { return `${heading(eyebrow, title, subtitle, action)}${toolbar ? `<div class="toolbar">${toolbar}</div>` : ''}<div class="panel data-panel">${table}</div>`; }
function tableToolbar(placeholder, filter = '') { return `<div class="search">${ICONS.search}<input id="table-search" type="search" placeholder="${placeholder}" value="${escapeHtml(state.query)}" /></div>${filter}`; }
function renderAppointments() { const rows = state.data.appointments.filter(a => JSON.stringify(a).toLowerCase().includes(state.query.toLowerCase())); return tablePage('Care coordination','Appointments','Keep every visit clear, confirmed, and moving.',can('appointments') ? actionButton('New appointment','appointment') : '',tableToolbar('Search appointments','<select id="status-filter"><option value="">All statuses</option><option>Confirmed</option><option>Pending</option><option>Completed</option><option>Cancelled</option></select>'),`<div class="table-wrap"><table><thead><tr><th>Patient</th><th>Service & dentist</th><th>Date & time</th><th>Status</th><th>Actions</th></tr></thead><tbody>${rows.length ? rows.map(a => `<tr><td><div class="person"><div class="avatar">${initials(a.patient)}</div><div><strong>${a.patient}</strong><span>${a.note}</span></div></div></td><td>${a.service}<br><span style="color:var(--muted);font-size:11px">${a.dentist}</span></td><td>${a.date}<br><span style="color:var(--muted);font-size:11px">${a.time}</span></td><td><span class="status ${statusClass(a.status)}">${a.status}</span></td><td><button class="link-button" data-edit="appointment:${a.id}">Edit</button></td></tr>`).join('') : `<tr><td colspan="5"><div class="empty">No appointments match your search.</div></td></tr>`}</tbody></table></div>`); }
function renderPatients() { const rows = state.data.patients.filter(p => JSON.stringify(p).toLowerCase().includes(state.query.toLowerCase())); return tablePage('Patient directory','Patients','Keep personal details close to the care team who needs them.',can('patients') ? actionButton('Add patient','patient') : '',tableToolbar('Search patients'),`<div class="table-wrap"><table><thead><tr><th>Patient</th><th>Contact</th><th>Date of birth</th><th>Medical note</th><th>Status</th></tr></thead><tbody>${rows.map(p => `<tr><td><div class="person"><div class="avatar">${initials(p.name)}</div><div><strong>${p.name}</strong><span>${p.email}</span></div></div></td><td>${p.phone}</td><td>${p.dob}</td><td>${p.history}<br><span style="color:var(--muted);font-size:11px">Allergies: ${p.allergies}</span></td><td><span class="status active">${p.status}</span></td></tr>`).join('')}</tbody></table></div>`); }
function renderRecords() { const rows = state.data.records.filter(r => JSON.stringify(r).toLowerCase().includes(state.query.toLowerCase())); return tablePage('Clinical notes','Medical records','Protected treatment context for the right care team.',can('records') ? actionButton('Add treatment note','record') : '',tableToolbar('Search patient records'),`<div class="table-wrap"><table><thead><tr><th>Patient</th><th>Visit date</th><th>Diagnosis</th><th>Treatment note</th><th>Dentist</th></tr></thead><tbody>${rows.map(r => `<tr><td><div class="person"><div class="avatar">${initials(r.patient)}</div><strong>${r.patient}</strong></div></td><td>${r.date}</td><td>${r.diagnosis}</td><td>${r.treatment}</td><td>${r.dentist}</td></tr>`).join('')}</tbody></table></div>`); }
function renderDentists() { return tablePage('Care team','Dentists','A clear view of specialties and availability.',can('dentists') ? actionButton('Add dentist','dentist') : '',tableToolbar('Search dentists'),`<div class="table-wrap"><table><thead><tr><th>Dentist</th><th>Specialization</th><th>Contact</th><th>Availability</th><th>Status</th></tr></thead><tbody>${state.data.dentists.map(d => `<tr><td><div class="person"><div class="avatar">${initials(d.name)}</div><strong>${d.name}</strong></div></td><td>${d.specialty}</td><td>${d.email}</td><td>${d.availability}</td><td><span class="status active">${d.status}</span></td></tr>`).join('')}</tbody></table></div>`); }
function renderStaff() { const staff = DEMO_USERS.filter(u => ['clinic_admin','receptionist','assistant','billing'].includes(u.role)); return tablePage('Team access','Staff','Manage operational access without losing the human context.',actionButton('Add staff','user'),tableToolbar('Search staff'),`<div class="table-wrap"><table><thead><tr><th>Name</th><th>Role</th><th>Email</th><th>Account status</th><th>Actions</th></tr></thead><tbody>${staff.map(u => `<tr><td><div class="person"><div class="avatar">${initials(u.name)}</div><strong>${u.name}</strong></div></td><td>${roleLabel(u.role)}</td><td>${u.email}</td><td><span class="status active">${u.status}</span></td><td><button class="link-button" data-action="edit-staff">Edit</button></td></tr>`).join('')}</tbody></table></div>`); }
function renderServices() { const rows = state.data.services.filter(s => JSON.stringify(s).toLowerCase().includes(state.query.toLowerCase())); return tablePage('Treatment menu','Services','Your most requested care, with the details patients need.',can('services') ? actionButton('Add service','service') : '',tableToolbar('Search services'),`<div class="table-wrap"><table><thead><tr><th>Service</th><th>Description</th><th>Duration</th><th>Price</th><th>Actions</th></tr></thead><tbody>${rows.map(s => `<tr><td><strong>${s.name}</strong></td><td style="color:var(--muted)">${s.description}</td><td>${s.duration}</td><td><strong>${s.price}</strong></td><td><button class="link-button" data-action="edit-service">Edit</button></td></tr>`).join('')}</tbody></table></div>`); }
function renderBilling() { const rows = state.data.invoices.filter(i => JSON.stringify(i).toLowerCase().includes(state.query.toLowerCase())); return tablePage('Financial operations','Billing','Invoices, payments, and receipts in one dependable place.',can('billing') ? actionButton('Create invoice','invoice') : '',tableToolbar('Search invoices','<select><option>All payment statuses</option><option>Paid</option><option>Unpaid</option><option>Partially Paid</option></select>'),`<div class="table-wrap"><table><thead><tr><th>Invoice</th><th>Patient</th><th>Service</th><th>Amount</th><th>Payment status</th><th>Date</th></tr></thead><tbody>${rows.map(i => `<tr><td><strong>${i.id}</strong></td><td>${i.patient}</td><td>${i.service}</td><td><strong>${i.amount}</strong></td><td><span class="status ${statusClass(i.status)}">${i.status}</span></td><td>${i.date}</td></tr>`).join('')}</tbody></table></div>`); }
function renderReports() { return `${heading('Insights','Reports','A simple, export-ready view of clinic performance.','<button class="button button-secondary" data-action="print">Print report</button>')}<div class="stats-grid"><div class="stat-card"><span class="stat-label">Appointments completed</span><strong class="stat-number">186</strong><span class="stat-change">+14.2% this month</span></div><div class="stat-card"><span class="stat-label">New patients</span><strong class="stat-number">42</strong><span class="stat-change">+6.8% this month</span></div><div class="stat-card"><span class="stat-label">Revenue collected</span><strong class="stat-number">$18.4k</strong><span class="stat-change">+9.1% this month</span></div><div class="stat-card"><span class="stat-label">Cancellation rate</span><strong class="stat-number">4.6%</strong><span class="stat-change neutral">-1.2% this month</span></div></div><div class="grid-two"><div class="panel"><div class="panel-header"><div><h2>Appointment report</h2><p>June 01 - June 16, 2025</p></div><button class="link-button" data-action="export">Export CSV →</button></div><div class="panel-body">${miniChart()}</div></div><div class="panel"><div class="panel-header"><div><h2>Report types</h2><p>Choose a view to prepare</p></div></div><div class="panel-body"><div class="activity">${['Patient report','Dentist performance','Revenue report','Service utilization'].map((r,i) => `<div class="activity-item"><span class="activity-mark">${ICONS.chart}</span><div><h3>${r}</h3><p>${['1,284 patient profiles','12 active providers','$18,420 collected','Top: Dental Cleaning'][i]}</p></div><button class="link-button" data-action="prepare">View</button></div>`).join('')}</div></div></div></div>`; }
function renderNotifications() { return `${heading('Stay in the loop','Notifications','Small updates that keep the whole clinic in sync.','<button class="button button-secondary" data-action="mark-read">Mark all read</button>')}<div class="panel"><div class="panel-body"><div class="activity">${state.data.notifications.map(n => `<div class="activity-item"><span class="activity-mark">${ICONS[n.type] || ICONS.bell}</span><div><h3>${n.text}</h3><p>${n.time}</p></div><span class="status confirmed">New</span></div>`).join('')}</div></div></div>`; }
function renderUsers() { if (!can('users')) return renderDenied(); const users = [...DEMO_USERS, ...JSON.parse(localStorage.getItem('br-dental-extra-users') || '[]')].filter(u => JSON.stringify(u).toLowerCase().includes(state.query.toLowerCase())); return tablePage('Administration','User management','Create and maintain access for the people behind the care.',actionButton('Create user','user'),tableToolbar('Search users','<select><option>All roles</option><option>Patient</option><option>Dentist</option><option>Receptionist</option></select>'),`<div class="table-wrap"><table><thead><tr><th>Name</th><th>Role</th><th>Email</th><th>Status</th><th>Date created</th><th>Actions</th></tr></thead><tbody>${users.map(u => `<tr><td><div class="person"><div class="avatar">${initials(u.name)}</div><strong>${u.name}</strong></div></td><td>${roleLabel(u.role)}</td><td>${u.email}</td><td><span class="status active">${u.status}</span></td><td>${u.created}</td><td><button class="link-button" data-action="edit-user">Edit</button></td></tr>`).join('')}</tbody></table></div>`); }
function renderRoles() { return `${heading('Access control','Role management','Permissions are explicit here and must be mirrored by your backend.')}<div class="grid-two"><div class="panel"><div class="panel-header"><div><h2>Role directory</h2><p>${Object.keys(RBAC).length} defined access profiles</p></div></div><div class="panel-body"><div class="activity">${Object.entries(RBAC).map(([role, permissions]) => `<div class="activity-item"><span class="activity-mark">${ICONS.usersCog}</span><div><h3>${roleLabel(role)}</h3><p>${permissions.length} enabled modules · ${role === 'super_admin' ? 'Full system access' : 'Scoped clinic access'}</p></div></div>`).join('')}</div></div></div><div class="panel"><div class="panel-header"><div><h2>Security note</h2><p>Frontend permissions are not a security boundary</p></div></div><div class="panel-body"><p class="subtitle" style="line-height:1.7">When the backend is connected, validate identity, role, and resource ownership on every API request. Patients must never be able to alter their role through frontend state, and medical records and billing data need server-side authorization.</p></div></div></div>`; }
function renderSettings() { return `${heading('Configuration','Clinic settings','Keep the information patients and staff see up to date.','<button class="button button-primary" data-action="save-settings">Save changes</button>')}<div class="panel"><div class="panel-body"><div class="form-grid"><div class="field"><label>Clinic name</label><input value="BR Dental Clinic" /></div><div class="field"><label>Contact email</label><input value="hello@brdental.com" /></div><div class="field"><label>Phone number</label><input value="+1 555 0100" /></div><div class="field"><label>Timezone</label><select><option>Eastern Time (ET)</option><option>Pacific Time (PT)</option></select></div><div class="field span-2"><label>Patient-facing welcome message</label><textarea>Thoughtful dental care for every stage of your smile.</textarea></div></div></div></div>`; }
function renderDenied() { return `${heading('Access restricted','This view is not available','Your current role does not have the required permission.')}<div class="panel"><div class="empty">Please contact a Master Admin if you believe you need access.</div></div>`; }
function renderModal() { const type = state.modal; const titles = { user:'Create user', patient:'Add patient', dentist:'Add dentist', service:'Add service', appointment:'New appointment', record:'Add treatment note', invoice:'Create invoice' }; const fields = { user:'<div class="field"><label>Full name</label><input name="name" required placeholder="e.g. Taylor Morgan" /></div><div class="field"><label>Email</label><input name="email" type="email" required placeholder="name@brdental.com" /></div><div class="field"><label>Role</label><select name="role"><option value="clinic_admin">Clinic Admin / Manager</option><option value="dentist">Dentist</option><option value="receptionist">Receptionist</option><option value="assistant">Dental Assistant</option><option value="billing">Billing Staff</option><option value="patient">Patient</option></select></div><div class="field"><label>Temporary password</label><input name="password" type="password" value="welcome123" /></div>', patient:'<div class="field"><label>Full name</label><input name="name" required /></div><div class="field"><label>Email</label><input name="email" type="email" required /></div><div class="field"><label>Phone</label><input name="phone" required /></div><div class="field"><label>Date of birth</label><input name="dob" type="date" /></div><div class="field span-2"><label>Allergies</label><textarea name="allergies" placeholder="None reported"></textarea></div>', dentist:'<div class="field"><label>Full name</label><input name="name" required placeholder="Dr. First Last" /></div><div class="field"><label>Specialization</label><input name="specialty" required /></div><div class="field"><label>Email</label><input name="email" type="email" required /></div><div class="field"><label>Availability</label><input name="availability" placeholder="Mon - Fri" /></div>', service:'<div class="field"><label>Service name</label><input name="name" required /></div><div class="field"><label>Price</label><input name="price" placeholder="$0.00" /></div><div class="field"><label>Duration</label><input name="duration" placeholder="45 min" /></div><div class="field span-2"><label>Description</label><textarea name="description"></textarea></div>', appointment:'<div class="field"><label>Patient</label><select name="patient"><option>Amelia Brooks</option><option>Liam Carter</option><option>Sofia Grant</option><option>Oliver Reed</option></select></div><div class="field"><label>Dentist</label><select name="dentist"><option>Dr. Elena Moore</option><option>Dr. Marcus Chen</option></select></div><div class="field"><label>Service</label><select name="service"><option>Dental Cleaning</option><option>Dental Filling</option><option>Teeth Whitening</option><option>Check-up</option></select></div><div class="field"><label>Date</label><input name="date" type="date" required /></div><div class="field"><label>Time</label><input name="time" type="time" required /></div><div class="field"><label>Status</label><select name="status"><option>Pending</option><option>Confirmed</option></select></div>', record:'<div class="field"><label>Patient</label><select name="patient"><option>Amelia Brooks</option><option>Liam Carter</option><option>Sofia Grant</option></select></div><div class="field"><label>Diagnosis</label><input name="diagnosis" required /></div><div class="field span-2"><label>Treatment note</label><textarea name="treatment" required></textarea></div>', invoice:'<div class="field"><label>Patient</label><select name="patient"><option>Amelia Brooks</option><option>Liam Carter</option><option>Sofia Grant</option></select></div><div class="field"><label>Service</label><input name="service" required /></div><div class="field"><label>Amount</label><input name="amount" placeholder="$0.00" required /></div><div class="field"><label>Payment status</label><select name="status"><option>Unpaid</option><option>Partially Paid</option><option>Paid</option></select></div>' }; return `<div class="modal-backdrop" data-close-modal><section class="modal" role="dialog" aria-modal="true"><div class="modal-header"><h2>${titles[type] || 'New item'}</h2><button class="modal-close" data-action="close-modal" aria-label="Close">×</button></div><div class="modal-body"><form id="modal-form" data-form-type="${type}"><div class="form-grid">${fields[type] || fields.user}</div><div class="modal-actions"><button class="button button-secondary" type="button" data-action="close-modal">Cancel</button><button class="button button-primary" type="submit">Save record</button></div></form></div></section></div>`; }

function bindEvents() {
  document.querySelectorAll('[data-view]').forEach(el => el.addEventListener('click', () => { if (can(el.dataset.view)) { state.view = el.dataset.view; state.query = ''; render(); } else notify('You do not have permission to open this area.'); }));
  document.querySelectorAll('[data-modal]').forEach(el => el.addEventListener('click', () => { state.modal = el.dataset.modal; render(); }));
  document.querySelectorAll('[data-action]').forEach(el => el.addEventListener('click', () => handleAction(el.dataset.action)));
  document.querySelectorAll('[data-demo]').forEach(el => el.addEventListener('click', () => { document.getElementById('login-email').value = 'admin@brdental.com'; document.getElementById('login-password').value = 'admin123'; }));
  document.querySelectorAll('[data-toggle-password]').forEach(el => el.addEventListener('click', () => { const input = document.getElementById(el.dataset.togglePassword); input.type = input.type === 'password' ? 'text' : 'password'; }));
  const login = document.getElementById('login-form'); if (login) login.addEventListener('submit', handleLogin);
  const register = document.getElementById('register-form'); if (register) register.addEventListener('submit', handleRegister);
  const modalForm = document.getElementById('modal-form'); if (modalForm) modalForm.addEventListener('submit', handleModalSubmit);
  const global = document.getElementById('global-search'); if (global) global.addEventListener('input', e => { state.query = e.target.value; });
  const tableSearch = document.getElementById('table-search'); if (tableSearch) tableSearch.addEventListener('input', e => { state.query = e.target.value; render(); document.getElementById('table-search')?.focus(); });
  const backdrop = document.querySelector('[data-close-modal]'); if (backdrop) backdrop.addEventListener('click', e => { if (e.target === backdrop) { state.modal = null; render(); } });
}
function handleAction(action) { if (action === 'logout') { state.user = null; localStorage.removeItem('br-dental-session'); render(); return; } if (action === 'register') { state.authMode = 'register'; render(); return; } if (action === 'back-login') { state.authMode = 'login'; render(); return; } if (action === 'forgot') { notify('Password reset will connect to your backend email flow.'); return; } if (action === 'help') { notify('Support center placeholder: connect your clinic help desk here.'); return; } if (action === 'menu') { document.getElementById('sidebar')?.classList.toggle('open'); return; } if (action === 'close-modal') { state.modal = null; render(); return; } if (action === 'print') { window.print(); return; } if (action === 'export' || action === 'prepare') { notify('Export-ready report prepared for backend integration.'); return; } if (action === 'mark-read') { notify('All notifications marked as read.'); return; } if (action === 'save-settings') { notify('Clinic settings saved locally for this demo.'); return; } notify('This action is ready for backend integration.'); }
function handleLogin(event) { event.preventDefault(); const form = new FormData(event.target); const users = [...DEMO_USERS, ...JSON.parse(localStorage.getItem('br-dental-extra-users') || '[]')]; const user = users.find(item => (item.email.toLowerCase() === String(form.get('email')).toLowerCase() || item.name.toLowerCase() === String(form.get('email')).toLowerCase()) && item.password === form.get('password')); if (!user) { notify('Those credentials did not match a demo account.'); return; } state.user = user; state.view = 'dashboard'; persistSession(); render(); }
function handleRegister(event) { event.preventDefault(); const form = new FormData(event.target); const users = JSON.parse(localStorage.getItem('br-dental-extra-users') || '[]'); const user = { id:`u${Date.now()}`, name:form.get('name'), email:form.get('email'), password:form.get('password'), phone:form.get('phone'), role:'patient', status:'Active', created:'Today' }; users.push(user); localStorage.setItem('br-dental-extra-users', JSON.stringify(users)); state.user = user; state.authMode = 'login'; state.view = 'dashboard'; persistSession(); render(); notify('Patient account created. Welcome to BR Dental Clinic.'); }
function handleModalSubmit(event) { event.preventDefault(); const form = new FormData(event.target); const type = event.target.dataset.formType; const record = Object.fromEntries(form.entries()); if (type === 'user') { const users = JSON.parse(localStorage.getItem('br-dental-extra-users') || '[]'); users.push({ ...record, id: `u${Date.now()}`, status:'Active', created:'Today' }); localStorage.setItem('br-dental-extra-users', JSON.stringify(users)); notify('User created with scoped access.'); } else if (type === 'patient') { state.data.patients.unshift({ ...record, id:`p${Date.now()}`, status:'Active', history:'No known history' }); saveData(); notify('Patient added to the directory.'); } else if (type === 'dentist') { state.data.dentists.unshift({ ...record, id:`d${Date.now()}`, status:'Active' }); saveData(); notify('Dentist added to the care team.'); } else if (type === 'service') { state.data.services.unshift({ ...record, id:`s${Date.now()}` }); saveData(); notify('Service added to the treatment menu.'); } else if (type === 'appointment') { state.data.appointments.unshift({ ...record, id:`a${Date.now()}`, date: record.date || 'Upcoming', time: record.time || '09:00 AM', note:'Created from clinic console' }); saveData(); notify('Appointment created successfully.'); } else if (type === 'record') { state.data.records.unshift({ ...record, id:`r${Date.now()}`, date:'Today', dentist:state.user.name }); saveData(); notify('Treatment note saved to the demo record.'); } else if (type === 'invoice') { state.data.invoices.unshift({ ...record, id:`INV-${Date.now().toString().slice(-4)}`, date:'Today' }); saveData(); notify('Invoice created successfully.'); } state.modal = null; render(); }

const existingSession = localStorage.getItem('br-dental-session'); if (existingSession) { try { state.user = JSON.parse(existingSession); if (state.user.email === 'admin@brdental.com') { state.user.name = 'Ma. Elena B. Retuerma'; persistSession(); } } catch { localStorage.removeItem('br-dental-session'); } }
render();
