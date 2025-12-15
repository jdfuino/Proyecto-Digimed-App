// Utility Functions
const storage = {
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
    get: (key) => {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch {
            return null;
        }
    },
    remove: (key) => localStorage.removeItem(key),
    clear: () => localStorage.clear()
};

// Auth Functions
const auth = {
    login: (email, password) => {
        return new Promise((resolve) => {
            // Simulate API call
            setTimeout(() => {
                if (email && password) {
                    const user = {
                        id: '1',
                        name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
                        email: email,
                        role: 'patient'
                    };
                    storage.set('user', user);
                    storage.set('isLoggedIn', true);
                    resolve({ success: true, user });
                } else {
                    resolve({ success: false, error: 'Credenciales inválidas' });
                }
            }, 1000);
        });
    },

    logout: () => {
        storage.clear();
        window.location.href = 'index.html';
    },

    getCurrentUser: () => {
        const isLoggedIn = storage.get('isLoggedIn');
        if (isLoggedIn) {
            return storage.get('user');
        }
        return null;
    },

    checkAuth: () => {
        const user = auth.getCurrentUser();
        if (!user && !window.location.pathname.includes('index.html')) {
            window.location.href = 'index.html';
        }
        return user;
    }
};

// Toast Notification
const showToast = (message) => {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
};

// Coming Soon Function
const showComingSoon = (feature) => {
    showToast(`${feature}: Esta funcionalidad estará disponible próximamente`);
};

// Login Page
if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    // Check if already logged in
    const user = auth.getCurrentUser();
    if (user) {
        window.location.href = 'dashboard.html';
    }

    // Toggle password visibility
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    if (togglePassword) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
        });
    }

    // Handle login form
    const loginForm = document.getElementById('loginForm');
    const loginBtn = document.getElementById('loginBtn');
    const loginBtnText = document.getElementById('loginBtnText');
    const loginSpinner = document.getElementById('loginSpinner');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Hide error
        errorMessage.style.display = 'none';

        // Show loading state
        loginBtn.disabled = true;
        loginBtnText.style.display = 'none';
        loginSpinner.style.display = 'block';

        try {
            const result = await auth.login(email, password);

            if (result.success) {
                // Success - redirect to dashboard
                window.location.href = 'dashboard.html';
            } else {
                // Show error
                errorMessage.textContent = result.error || 'Error al iniciar sesión';
                errorMessage.style.display = 'block';

                // Reset button
                loginBtn.disabled = false;
                loginBtnText.style.display = 'inline';
                loginSpinner.style.display = 'none';
            }
        } catch (error) {
            errorMessage.textContent = 'Error al iniciar sesión. Por favor intenta de nuevo.';
            errorMessage.style.display = 'block';

            // Reset button
            loginBtn.disabled = false;
            loginBtnText.style.display = 'inline';
            loginSpinner.style.display = 'none';
        }
    });
}

// Dashboard Page
if (window.location.pathname.includes('dashboard.html')) {
    // Check authentication
    const user = auth.checkAuth();

    if (user) {
        // Update user info
        const userName = document.getElementById('userName');
        const userEmail = document.getElementById('userEmail');

        if (userName) userName.textContent = user.name;
        if (userEmail) userEmail.textContent = user.email;
    }

    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            if (confirm('¿Estás seguro que deseas cerrar sesión?')) {
                auth.logout();
            }
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('Digimed Web initialized');
});
