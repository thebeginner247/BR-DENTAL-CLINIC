document.addEventListener("DOMContentLoaded", () => {

  const ROLE_DEFINITIONS = [
    {
      key: "super-admin",
      name: "Super Admin",
      permissions: [
        "Manage users and roles",
        "Manage clinic settings",
        "Access and manage all system data",
        "Generate and view reports"
      ]
    },
    {
      key: "clinic-admin",
      name: "Clinic Admin / Manager",
      permissions: [
        "Manage dentists and clinic staff",
        "Manage dentist schedules and availability",
        "Manage dental services",
        "Manage appointments",
        "Generate and view clinic reports"
      ]
    },
    {
      key: "dentist",
      name: "Dentist",
      permissions: [
        "View and manage own appointments",
        "View and manage patient records",
        "Add and update treatment notes",
        "Manage personal availability"
      ]
    },
    {
      key: "receptionist",
      name: "Receptionist",
      permissions: [
        "Create appointments",
        "Reschedule appointments",
        "Cancel appointments",
        "Register and manage patient information",
        "Manage dentist schedules"
      ]
    },
    {
      key: "patient",
      name: "Patient",
      permissions: [
        "Register and log in",
        "View dentists and available services",
        "Book appointments",
        "Reschedule or cancel own appointments",
        "View appointment history"
      ]
    },
    {
      key: "billing-staff",
      name: "Billing Staff",
      permissions: [
        "Create and manage invoices",
        "Record and manage payments",
        "Generate receipts",
        "View and generate billing reports"
      ]
    }
  ];

  const CREATABLE_ROLES = {
    "super-admin": ["clinic-admin"],
    "clinic-admin": ["dentist", "receptionist", "billing-staff"]
  };

  // ==========================================
  // 1. APPLICATION STATE (DEMO DATASET)
  // ==========================================

  const state = {
    session: {
      isAuthenticated: false,
      role: null, // 'patient' | 'admin'
      user: null
    },

    clinicInfo: {
      name: "BR Dental Clinic",
      phone: "09066636112",
      address: "73 Nyugan Road, Paliparan 1, Dasmarinas City, Cavite",
      dentists: [
        {
          id: "DR-01",
          name: "Dr. Ma. Elena B. Retuerna",
          title: "Lead Practitioner",
          specialty: "General Dentistry"
        }
      ]
    },

    services: [
      { id: "SRV-101", name: "Comprehensive Checkup", desc: "Complete oral examination and consultation.", price: "Contact the clinic for pricing" },
      { id: "SRV-102", name: "Dental Cleaning (Prophylaxis)", desc: "Removal of plaque and tartar deposits.", price: "Contact the clinic for pricing" },
      { id: "SRV-103", name: "Composite Filling", desc: "Tooth-colored restoration for cavities.", price: "Contact the clinic for pricing" },
      { id: "SRV-104", name: "Tooth Extraction", desc: "Safe removal of compromised teeth.", price: "Contact the clinic for pricing" }
    ],

    // Empty state initialized datasets
    patients: [],
    appointments: [],
    dentalRecords: [],
    notifications: [],
    staffUsers: []
  };

  // ==========================================
  // 2. DOM REFERENCES
  // ==========================================

  const el = {
    authScreen: document.getElementById("auth-screen"),
    appShell: document.getElementById("app-shell"),
    signinForm: document.getElementById("signin-form"),
    signupForm: document.getElementById("signup-form"),
    authTitle: document.getElementById("auth-title"),
    authKicker: document.getElementById("auth-kicker"),
    authSubtitle: document.getElementById("auth-subtitle"),
    authAlert: document.getElementById("auth-alert"),
    linkToSignup: document.getElementById("link-to-signup"),
    linkToSignin: document.getElementById("link-to-signin"),
    btnDemoPatient: document.getElementById("btn-demo-patient"),
    btnDemoAdmin: document.getElementById("btn-demo-admin"),
    btnDemoClinicAdmin: document.getElementById("btn-demo-clinic-admin"),

    navPatient: document.getElementById("nav-patient"),
    navAdmin: document.getElementById("nav-admin"),
    portalRoleTag: document.getElementById("portal-role-tag"),
    userDisplayName: document.getElementById("user-display-name"),
    userAvatarCircle: document.getElementById("user-avatar-circle"),
    sidebarToggleBtn: document.getElementById("sidebar-toggle-btn"),
    appSidebar: document.getElementById("app-sidebar"),

    btnProfileToggle: document.getElementById("btn-profile-toggle"),
    profileDropdownPanel: document.getElementById("profile-dropdown-panel"),
    btnNotifToggle: document.getElementById("btn-notif-toggle"),
    notifDropdownPanel: document.getElementById("notif-dropdown-panel"),
    notifCountBadge: document.getElementById("notif-count-badge"),
    notifListContainer: document.getElementById("notif-list-container"),

    patientServicesGrid: document.getElementById("patient-services-grid"),
    bookServiceSelect: document.getElementById("book-service"),
    patientAppointmentsTbody: document.getElementById("patient-appointments-tbody"),
    patientRecordsTbody: document.getElementById("patient-records-tbody"),

    adminTodayTbody: document.getElementById("admin-today-tbody"),
    adminAppointmentsTbody: document.getElementById("admin-appointments-tbody"),
    adminPatientsTbody: document.getElementById("admin-patients-tbody"),
    adminRecordsTbody: document.getElementById("admin-records-tbody"),
    adminServicesTbody: document.getElementById("admin-services-tbody"),

    bookingForm: document.getElementById("booking-form"),
    patientProfileForm: document.getElementById("patient-profile-form"),

    modalBackdrop: document.getElementById("modal-backdrop"),
    modalTitle: document.getElementById("modal-title"),
    modalBody: document.getElementById("modal-body"),
    modalFooter: document.getElementById("modal-footer"),

    toastContainer: document.getElementById("toast-container")
  };

  // ==========================================
  // 3. INITIALIZATION & ROUTING ENGINE
  // ==========================================

  function initApp() {
    bindEvents();
    renderServices();
    renderAllTables();
    renderRolePermissions();
    renderStaffUsers();
  }

  function switchView(targetViewId) {
    if (targetViewId === "admin-users" && !["super-admin", "clinic-admin"].includes(state.session.role)) {
      showToast("Only admin roles can manage clinic accounts.", "error");
      return;
    }

    document.querySelectorAll(".page-view").forEach(v => v.classList.remove("active"));
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));

    const targetView = document.getElementById(`view-${targetViewId}`);
    if (targetView) {
      targetView.classList.add("active");
    }

    const navLink = document.querySelector(`.nav-link[data-view="${targetViewId}"]`);
    if (navLink) {
      navLink.classList.add("active");
    }

    closeDropdowns();
    el.appSidebar.classList.remove("show-sidebar");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ==========================================
  // 4. AUTHENTICATION & SESSION HANDLING
  // ==========================================

  function authenticateSession(role, userObj) {
    state.session.isAuthenticated = true;
    state.session.role = role;
    state.session.user = userObj;

    el.authScreen.classList.add("hidden");
    el.appShell.classList.remove("hidden");

    if (role !== "patient") {
      const roleName = ROLE_DEFINITIONS.find(item => item.key === role)?.name || "Staff Portal";
      el.navPatient.classList.add("hidden");
      el.navAdmin.classList.remove("hidden");
      el.portalRoleTag.textContent = roleName;
      el.userDisplayName.textContent = userObj.name || roleName;
      el.userAvatarCircle.textContent = (userObj.name || roleName).charAt(0).toUpperCase();
      const usersLink = document.querySelector('#nav-admin [data-view="admin-users"]');
      if (usersLink) usersLink.closest("li").classList.toggle("hidden", !["super-admin", "clinic-admin"].includes(role));
      switchView("admin-dashboard");
    } else {
      el.navAdmin.classList.add("hidden");
      el.navPatient.classList.remove("hidden");
      el.portalRoleTag.textContent = "Patient Portal";
      el.userDisplayName.textContent = userObj.name || "Patient Account";
      el.userAvatarCircle.textContent = (userObj.name || "P").charAt(0).toUpperCase();

      document.getElementById("profile-fullname").value = userObj.name || "";
      document.getElementById("profile-email").value = userObj.email || "";

      switchView("patient-home");
    }

    showToast(`Signed in as ${userObj.name}`, "success");
    renderAllTables();
    updateKPIs();
  }

  function terminateSession() {
    state.session.isAuthenticated = false;
    state.session.role = null;
    state.session.user = null;

    el.appShell.classList.add("hidden");
    el.authScreen.classList.remove("hidden");
    el.signinForm.reset();
    el.signupForm.reset();
    clearAuthAlert();
    showToast("Logged out successfully.");
  }

  // ==========================================
  // 5. EVENT LISTENERS
  // ==========================================

  function bindEvents() {
    // Auth Switchers
    el.linkToSignup.addEventListener("click", () => {
      el.signinForm.classList.add("hidden");
      el.signupForm.classList.remove("hidden");
      el.authKicker.textContent = "Patient Registration";
      el.authTitle.textContent = "Create your account";
      el.authSubtitle.textContent = "Only patient accounts can be created through public registration.";
      clearAuthAlert();
    });

    el.linkToSignin.addEventListener("click", () => {
      el.signupForm.classList.add("hidden");
      el.signinForm.classList.remove("hidden");
      el.authKicker.textContent = "Welcome back";
      el.authTitle.textContent = "Sign in to your clinic";
      el.authSubtitle.textContent = "Use your email and password to continue.";
      clearAuthAlert();
    });

    // Password Visibility Toggle
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-toggle-pass")) {
        const targetId = e.target.getAttribute("data-target");
        const input = document.getElementById(targetId);
        if (input) {
          const isPass = input.type === "password";
          input.type = isPass ? "text" : "password";
          e.target.textContent = isPass ? "Hide" : "Show";
          e.target.setAttribute("aria-label", isPass ? "Hide password" : "Show password");
        }
      }
    });

    // Form Submissions
    el.signinForm.addEventListener("submit", (e) => {
      e.preventDefault();
      clearFieldErrors(el.signinForm);

      const email = document.getElementById("signin-email").value.trim();
      const password = document.getElementById("signin-password").value.trim();

      if (!validateEmail(email)) {
        showFieldError("signin-email", "Enter a valid email address.");
        return;
      }
      if (!password) {
        showFieldError("signin-password", "Password is required.");
        return;
      }

      showAuthAlert("Authenticating with server...", "success");
      setTimeout(() => {
        authenticateSession("patient", { name: email.split("@")[0], email });
      }, 400);
    });

    el.signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      clearFieldErrors(el.signupForm);

      const fullname = document.getElementById("signup-fullname").value.trim();
      const email = document.getElementById("signup-email").value.trim();
      const password = document.getElementById("signup-password").value.trim();
      const confirmPassword = document.getElementById("signup-confirm-password").value.trim();

      let valid = true;
      if (!fullname) { showFieldError("signup-fullname", "Full name is required."); valid = false; }
      if (!validateEmail(email)) { showFieldError("signup-email", "Valid email is required."); valid = false; }
      if (password.length < 8) { showFieldError("signup-password", "Minimum 8 characters."); valid = false; }
      if (password !== confirmPassword) { showFieldError("signup-confirm-password", "Passwords do not match."); valid = false; }

      if (!valid) return;

      const newPatient = {
        id: `P-${1000 + state.patients.length + 1}`,
        name: fullname,
        email: email,
        phone: "Not provided",
        registeredDate: new Date().toISOString().split("T")[0]
      };

      state.patients.push(newPatient);
      authenticateSession("patient", { name: fullname, email });
    });

    // Demo Buttons
    el.btnDemoPatient.addEventListener("click", () => {
      authenticateSession("patient", { name: "Patient", email: "" });
    });

    el.btnDemoAdmin.addEventListener("click", () => {
      authenticateSession("super-admin", { name: "Master Admin (Demo)" });
    });

    el.btnDemoClinicAdmin.addEventListener("click", () => {
      authenticateSession("clinic-admin", { name: "Clinic Admin (Demo)" });
    });

    // Sidebar Links & Routing
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetView = link.getAttribute("data-view");
        switchView(targetView);
      });
    });

    document.addEventListener("click", (e) => {
      const navBtn = e.target.closest("[data-navigate]");
      if (navBtn) {
        switchView(navBtn.getAttribute("data-navigate"));
      }
    });

    document.querySelectorAll(".btn-logout-action").forEach(btn => {
      btn.addEventListener("click", terminateSession);
    });

    // Mobile Sidebar & Dropdowns
    el.sidebarToggleBtn.addEventListener("click", () => {
      el.appSidebar.classList.toggle("show-sidebar");
    });

    el.btnProfileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      el.profileDropdownPanel.classList.toggle("hidden");
      el.notifDropdownPanel.classList.add("hidden");
    });

    el.btnNotifToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      el.notifDropdownPanel.classList.toggle("hidden");
      el.profileDropdownPanel.classList.add("hidden");
    });

    document.addEventListener("click", closeDropdowns);

    document.querySelectorAll(".dropdown-item").forEach(item => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const target = item.getAttribute("data-view-target");
        const prefix = state.session.role !== "patient" ? "admin-" : "patient-";
        switchView(`${prefix}${target}`);
      });
    });

    // Third Party Auth Placeholders
    document.getElementById("btn-oauth-google").addEventListener("click", () => {
      showToast("Google Auth requires backend configuration.", "error");
    });
    document.getElementById("btn-oauth-facebook").addEventListener("click", () => {
      showToast("Facebook Auth requires backend OAuth setup.", "error");
    });
    document.getElementById("btn-forgot-password").addEventListener("click", () => {
      showToast("Password recovery emails require an SMTP backend.", "error");
    });

    // Booking Request
    el.bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const service = document.getElementById("book-service").value;
      const date = document.getElementById("book-date").value;
      const time = document.getElementById("book-time").value;
      const notes = document.getElementById("book-notes").value;

      if (!service || !date || !time) {
        showToast("Please complete required booking fields.", "error");
        return;
      }

      const newApt = {
        id: `APT-${100 + state.appointments.length + 1}`,
        patientName: state.session.user ? state.session.user.name : "Patient",
        service,
        doctor: "Dr. Ma. Elena B. Retuerna",
        date,
        time,
        notes,
        status: "Pending"
      };

      state.appointments.push(newApt);
      addNotification(`New booking requested for ${date} at ${time}`);
      showToast("Appointment request submitted successfully!");

      el.bookingForm.reset();
      renderAllTables();
      updateKPIs();
      switchView("patient-appointments");
    });

    // User and role management
    document.getElementById("btn-create-user").addEventListener("click", openCreateUserModal);

    // Admin Modals
    document.getElementById("btn-modal-service").addEventListener("click", () => {
      openModal("Add New Dental Service", `
        <form id="form-add-service">
          <div class="form-group">
            <label>Service Name</label>
            <input type="text" id="m-service-name" required placeholder="e.g. Tooth Whitening">
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea id="m-service-desc" rows="2" required placeholder="Service details..."></textarea>
          </div>
          <div class="form-group">
            <label>Price Display</label>
            <input type="text" id="m-service-price" value="Contact the clinic for pricing">
          </div>
        </form>
      `, [
        { text: "Cancel", class: "btn-outline", action: closeModal },
        { text: "Save Service", class: "btn-primary", action: saveServiceFromModal }
      ]);
    });

    document.getElementById("btn-modal-record").addEventListener("click", () => {
      if (state.patients.length === 0) {
        showToast("No patients registered in database.", "error");
        return;
      }

      const patientOptions = state.patients.map(p => `<option value="${p.name}">${p.name} (${p.id})</option>`).join("");

      openModal("Add Clinical Record", `
        <form id="form-add-record">
          <div class="form-group">
            <label>Select Patient</label>
            <select id="m-rec-patient" required>${patientOptions}</select>
          </div>
          <div class="form-group">
            <label>Procedure / Treatment</label>
            <input type="text" id="m-rec-treatment" required placeholder="e.g. Tooth Extraction">
          </div>
          <div class="form-group">
            <label>Clinical Notes</label>
            <textarea id="m-rec-notes" rows="3" required placeholder="Observations or prescribed care..."></textarea>
          </div>
        </form>
      `, [
        { text: "Cancel", class: "btn-outline", action: closeModal },
        { text: "Save Record", class: "btn-primary", action: saveRecordFromModal }
      ]);
    });

    document.querySelectorAll(".btn-modal-close").forEach(b => b.addEventListener("click", closeModal));
    el.modalBackdrop.addEventListener("click", (e) => {
      if (e.target === el.modalBackdrop) closeModal();
    });

    document.getElementById("btn-print-report").addEventListener("click", () => window.print());

    document.getElementById("btn-run-report").addEventListener("click", () => {
      const container = document.getElementById("report-results-body");
      container.innerHTML = `
        <h3>Filtered Appointments Log</h3>
        <p class="text-sub">Total Records: ${state.appointments.length}</p>
        <div class="table-scroll mt-3">
          <table class="data-table">
            <thead>
              <tr><th>Date</th><th>Patient</th><th>Service</th><th>Status</th></tr>
            </thead>
            <tbody>
              ${state.appointments.length === 0 ? '<tr><td colspan="4" class="empty-cell">No matching records found.</td></tr>' :
                state.appointments.map(a => `<tr><td>${a.date}</td><td>${a.patientName}</td><td>${a.service}</td><td>${a.status}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      `;
      showToast("Report generated.");
    });
  }

  // ==========================================
  // 6. UI HELPERS & RENDERERS
  // ==========================================

  function closeDropdowns() {
    el.profileDropdownPanel.classList.add("hidden");
    el.notifDropdownPanel.classList.add("hidden");
  }

  function openModal(title, bodyHTML, actions) {
    el.modalTitle.textContent = title;
    el.modalBody.innerHTML = bodyHTML;
    el.modalFooter.innerHTML = "";

    actions.forEach(act => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `btn ${act.class}`;
      btn.textContent = act.text;
      btn.addEventListener("click", act.action);
      el.modalFooter.appendChild(btn);
    });

    el.modalBackdrop.classList.remove("hidden");
  }

  function closeModal() {
    el.modalBackdrop.classList.add("hidden");
  }

  function showToast(msg, type = "info") {
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span>${msg}</span>`;
    el.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3500);
  }

  function addNotification(text) {
    state.notifications.push({ text, time: "Just now" });
    el.notifCountBadge.textContent = state.notifications.length;
    el.notifCountBadge.classList.remove("hidden");

    el.notifListContainer.innerHTML = state.notifications.map(n => `
      <li style="padding: 0.6rem 1rem; border-bottom: 1px solid var(--border-color); font-size: 0.82rem;">
        <div>${n.text}</div>
        <span class="text-sub" style="font-size: 0.72rem;">${n.time}</span>
      </li>
    `).join("");
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showFieldError(id, msg) {
    const err = document.getElementById(`${id}-error`);
    if (err) err.textContent = msg;
  }

  function clearFieldErrors(form) {
    form.querySelectorAll(".field-error").forEach(e => e.textContent = "");
  }

  function showAuthAlert(msg, type = "danger") {
    el.authAlert.className = `alert alert-${type}`;
    el.authAlert.textContent = msg;
    el.authAlert.classList.remove("hidden");
  }

  function clearAuthAlert() {
    el.authAlert.classList.add("hidden");
  }

  function renderRolePermissions() {
    const container = document.getElementById("role-permission-list");
    if (!container) return;

    container.innerHTML = ROLE_DEFINITIONS.map(role => `
      <article class="role-permission-card">
        <div class="role-card-heading">
          <span class="role-mark" aria-hidden="true">${role.name.charAt(0)}</span>
          <div>
            <h3>${role.name}</h3>
            <p>${role.permissions.length} permissions</p>
          </div>
        </div>
        <ul class="permission-list">
          ${role.permissions.map(permission => `<li>${permission}</li>`).join("")}
        </ul>
      </article>
    `).join("");
  }

  function getCreatableRoles(actorRole) {
    return (CREATABLE_ROLES[actorRole] || [])
      .map(roleKey => ROLE_DEFINITIONS.find(role => role.key === roleKey))
      .filter(Boolean);
  }

  function openCreateUserModal() {
    const availableRoles = getCreatableRoles(state.session.role);
    if (availableRoles.length === 0) {
      showToast("This role cannot create staff accounts.", "error");
      return;
    }

    const roleOptions = availableRoles
      .map(role => `<option value="${role.key}">${role.name}</option>`)
      .join("");

    openModal("Create clinic account", `
      <form id="form-create-user">
        <div class="form-group">
          <label for="staff-name">Full name</label>
          <input type="text" id="staff-name" autocomplete="name" required placeholder="Enter their full name">
        </div>
        <div class="form-group">
          <label for="staff-email">Email address</label>
          <input type="email" id="staff-email" autocomplete="email" required placeholder="name@example.com">
        </div>
        <div class="form-group">
          <label for="staff-role">Role</label>
          <select id="staff-role" required>${roleOptions}</select>
        </div>
        <p class="account-setup-note">No password is created here. A secure backend must send an invitation and set up the account.</p>
      </form>
    `, [
      { text: "Cancel", class: "btn-outline", action: closeModal },
      { text: "Add account", class: "btn-primary", action: saveUserFromModal }
    ]);
  }

  function saveUserFromModal() {
    const nameInput = document.getElementById("staff-name");
    const emailInput = document.getElementById("staff-email");
    const roleInput = document.getElementById("staff-role");
    if (!nameInput || !emailInput || !roleInput) return;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim().toLowerCase();
    const role = roleInput.value;
    const allowedRoles = getCreatableRoles(state.session.role);

    if (!name || !validateEmail(email)) {
      showToast("Enter a name and valid email address.", "error");
      return;
    }
    if (!allowedRoles.some(item => item.key === role)) {
      showToast("Your role cannot create that account type.", "error");
      return;
    }
    if (state.staffUsers.some(user => user.email === email)) {
      showToast("An account with this email is already listed.", "error");
      return;
    }

    state.staffUsers.push({
      id: `USER-${Date.now()}`,
      name,
      email,
      role,
      status: "Demo only",
      createdBy: state.session.user?.name || "Admin"
    });

    renderStaffUsers();
    closeModal();
    showToast("Added to this browser session. No invitation was sent.");
  }

  function renderStaffUsers() {
    const tbody = document.getElementById("staff-users-tbody");
    if (!tbody) return;

    tbody.replaceChildren();
    if (state.staffUsers.length === 0) {
      const row = document.createElement("tr");
      const cell = document.createElement("td");
      cell.colSpan = 5;
      cell.className = "empty-cell";
      cell.textContent = "No staff accounts have been added in this session.";
      row.appendChild(cell);
      tbody.appendChild(row);
      return;
    }

    state.staffUsers.forEach(user => {
      const row = document.createElement("tr");
      const roleName = ROLE_DEFINITIONS.find(role => role.key === user.role)?.name || user.role;
      [user.name, user.email, roleName, user.status, user.createdBy].forEach(value => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });
  }

  function renderServices() {
    el.patientServicesGrid.innerHTML = state.services.map(s => `
      <div class="card">
        <h3>${s.name}</h3>
        <p class="text-sub mt-2">${s.desc}</p>
        <div class="service-price">${s.price}</div>
      </div>
    `).join("");

    el.bookServiceSelect.innerHTML = `<option value="">-- Choose a Service --</option>` +
      state.services.map(s => `<option value="${s.name}">${s.name}</option>`).join("");

    el.adminServicesTbody.innerHTML = state.services.map(s => `
      <tr>
        <td><strong>${s.name}</strong></td>
        <td>${s.desc}</td>
        <td>${s.price}</td>
        <td><button type="button" class="btn btn-sm btn-danger" onclick="deleteService('${s.id}')">Delete</button></td>
      </tr>
    `).join("");
  }

  function renderAllTables() {
    // Patient Appointments
    if (state.appointments.length === 0) {
      el.patientAppointmentsTbody.innerHTML = `<tr><td colspan="5" class="empty-cell">No upcoming or past appointments found.</td></tr>`;
    } else {
      el.patientAppointmentsTbody.innerHTML = state.appointments.map(a => `
        <tr>
          <td>${a.date} at ${a.time}</td>
          <td>${a.service}</td>
          <td>${a.doctor}</td>
          <td><span class="status-tag status-${a.status.toLowerCase()}">${a.status}</span></td>
          <td>${a.status === 'Pending' ? `<button class="btn btn-sm btn-outline" onclick="cancelApt('${a.id}')">Cancel</button>` : '-'}</td>
        </tr>
      `).join("");
    }

    // Patient Records
    if (state.dentalRecords.length === 0) {
      el.patientRecordsTbody.innerHTML = `<tr><td colspan="4" class="empty-cell">No dental records registered in database.</td></tr>`;
    } else {
      el.patientRecordsTbody.innerHTML = state.dentalRecords.map(r => `
        <tr>
          <td>${r.date}</td>
          <td>${r.treatment}</td>
          <td>${r.notes}</td>
          <td>${r.doctor}</td>
        </tr>
      `).join("");
    }

    // Admin Today
    const today = new Date().toISOString().split("T")[0];
    const todayApts = state.appointments.filter(a => a.date === today);

    if (todayApts.length === 0) {
      el.adminTodayTbody.innerHTML = `<tr><td colspan="5" class="empty-cell">No appointments scheduled for today.</td></tr>`;
    } else {
      el.adminTodayTbody.innerHTML = todayApts.map(a => `
        <tr>
          <td>${a.time}</td>
          <td>${a.patientName}</td>
          <td>${a.service}</td>
          <td>${a.doctor}</td>
          <td><span class="status-tag status-${a.status.toLowerCase()}">${a.status}</span></td>
        </tr>
      `).join("");
    }

    // Admin All Appointments
    if (state.appointments.length === 0) {
      el.adminAppointmentsTbody.innerHTML = `<tr><td colspan="6" class="empty-cell">No patient appointment requests found.</td></tr>`;
    } else {
      el.adminAppointmentsTbody.innerHTML = state.appointments.map(a => `
        <tr>
          <td>${a.date} (${a.time})</td>
          <td>${a.patientName}</td>
          <td>${a.service}</td>
          <td>${a.doctor}</td>
          <td><span class="status-tag status-${a.status.toLowerCase()}">${a.status}</span></td>
          <td>
            <button class="btn btn-sm btn-primary" onclick="setAptStatus('${a.id}', 'Approved')">Approve</button>
            <button class="btn btn-sm btn-outline" onclick="setAptStatus('${a.id}', 'Rescheduled')">Reschedule</button>
            <button class="btn btn-sm btn-danger" onclick="setAptStatus('${a.id}', 'Cancelled')">Cancel</button>
          </td>
        </tr>
      `).join("");
    }

    // Admin Patients
    if (state.patients.length === 0) {
      el.adminPatientsTbody.innerHTML = `<tr><td colspan="5" class="empty-cell">No registered patient profiles found.</td></tr>`;
    } else {
      el.adminPatientsTbody.innerHTML = state.patients.map(p => `
        <tr>
          <td>${p.id}</td>
          <td><strong>${p.name}</strong></td>
          <td>${p.email}</td>
          <td>${p.phone}</td>
          <td>${p.registeredDate}</td>
        </tr>
      `).join("");
    }

    // Admin Dental Records
    if (state.dentalRecords.length === 0) {
      el.adminRecordsTbody.innerHTML = `<tr><td colspan="5" class="empty-cell">No clinical records found. Click 'Add Clinical Record' above.</td></tr>`;
    } else {
      el.adminRecordsTbody.innerHTML = state.dentalRecords.map(r => `
        <tr>
          <td>${r.date}</td>
          <td><strong>${r.patientName}</strong></td>
          <td>${r.treatment}</td>
          <td>${r.notes}</td>
          <td>${r.doctor}</td>
        </tr>
      `).join("");
    }
  }

  function updateKPIs() {
    document.getElementById("kpi-total-patients").textContent = state.patients.length;
    document.getElementById("kpi-today-appointments").textContent = state.appointments.length;
    document.getElementById("kpi-pending-requests").textContent = state.appointments.filter(a => a.status === "Pending").length;
  }

  function saveServiceFromModal() {
    const name = document.getElementById("m-service-name").value.trim();
    const desc = document.getElementById("m-service-desc").value.trim();
    const price = document.getElementById("m-service-price").value.trim();

    if (!name || !desc) {
      showToast("Please fill out required fields.", "error");
      return;
    }

    state.services.push({
      id: `SRV-${100 + state.services.length + 1}`,
      name, desc, price: price || "Contact the clinic for pricing"
    });

    closeModal();
    renderServices();
    showToast("Service added successfully.");
  }

  function saveRecordFromModal() {
    const patientName = document.getElementById("m-rec-patient").value;
    const treatment = document.getElementById("m-rec-treatment").value.trim();
    const notes = document.getElementById("m-rec-notes").value.trim();

    if (!treatment || !notes) {
      showToast("Please fill out required record fields.", "error");
      return;
    }

    state.dentalRecords.push({
      id: `REC-${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
      patientName,
      treatment,
      notes,
      doctor: "Dr. Ma. Elena B. Retuerna"
    });

    closeModal();
    renderAllTables();
    showToast("Clinical record created.");
  }

  // Global scope action attachments
  window.setAptStatus = (id, status) => {
    const apt = state.appointments.find(a => a.id === id);
    if (apt) {
      apt.status = status;
      renderAllTables();
      updateKPIs();
      showToast(`Appointment status updated to ${status}`);
    }
  };

  window.cancelApt = (id) => {
    if (confirm("Are you sure you want to cancel this appointment request?")) {
      window.setAptStatus(id, "Cancelled");
    }
  };

  window.deleteService = (id) => {
    if (confirm("Delete this service entry?")) {
      state.services = state.services.filter(s => s.id !== id);
      renderServices();
      showToast("Service deleted.");
    }
  };

  initApp();
});
