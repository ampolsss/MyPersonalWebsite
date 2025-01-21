const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const sections = document.querySelectorAll('.section');
const sidebar = document.querySelector('.sidebar');
const navLinks = document.querySelectorAll('.sidebar nav ul li a');
const dynamicButtons = document.querySelectorAll('.dynamic-button');
const dynamicSections = document.querySelectorAll('.dynamic-section');

// Check for saved preference in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode();
}

// Event Listener for Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
        localStorage.setItem('darkMode', 'disabled'); // Save preference
    } else {
        enableDarkMode();
        localStorage.setItem('darkMode', 'enabled'); // Save preference
    }
});

// Enable Dark Mode
function enableDarkMode() {
    body.classList.add('dark-mode');
    sidebar.classList.add('dark-mode');
    sections.forEach(section => section.classList.add('dark-mode'));
    navLinks.forEach(link => link.classList.add('dark-mode'));
    dynamicButtons.forEach(button => button.classList.add('dark-mode'));
    darkModeToggle.textContent = 'Light Mode';
}

// Disable Dark Mode
function disableDarkMode() {
    body.classList.remove('dark-mode');
    sidebar.classList.remove('dark-mode');
    sections.forEach(section => section.classList.remove('dark-mode'));
    navLinks.forEach(link => link.classList.remove('dark-mode'));
    dynamicButtons.forEach(button => button.classList.remove('dark-mode'));
    darkModeToggle.textContent = 'Dark Mode';
}

// Navigation for switching main sections
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const sectionId = link.getAttribute('data-section');
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById(sectionId).classList.add('active');
    });
});

// Event Listeners for Dynamic Buttons
dynamicButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.getAttribute('data-section');
        dynamicSections.forEach(section => section.classList.remove('active'));
        document.getElementById(sectionId).classList.add('active');
    });
});

const toggleSidebar = document.getElementById('toggleSidebar');
const sidebars = document.querySelector('.sidebar');

// Toggle sidebar visibility
toggleSidebar.addEventListener('click', () => {
    sidebars.classList.toggle('open');
});

// Close sidebar when a button is clicked
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('open'); // Adjust the class name if needed
    });
});


