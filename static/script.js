// JavaScript to animate the navbar/header into the position 30 pixels down
window.addEventListener('load', function() {
    // Timeout added to delay the animation for demonstration
    setTimeout(function() {
        document.getElementById('navbar').style.top = '30px';
    }, 300);
});

// Function to show the login popup
function showLoginPopup() {
    document.getElementById("login-popup").style.display = "block";
}

// Function to close the login popup
function closeLoginPopup() {
    document.getElementById("login-popup").style.display = "none";
}

// Function to show the register popup
function showRegisterPopup() {
    document.getElementById("register-popup").style.display = "block";
}

// Function to close the register popup
function closeRegisterPopup() {
    document.getElementById("register-popup").style.display = "none";
}

// Function to show the dashboard
function showDashboard() {
    // Add your logic to show the dashboard here
    window.location.href = "index.html"; // Redirect to dashboard page
}

// Typing effect for subtitle
const subtitles = ["Automate your Workflow", "Automate your Business", "Automate your Income"];
let currentSubtitleIndex = 0;
let currentSubtitle = subtitles[currentSubtitleIndex];
let subtitleContainer = document.getElementById("subtitle-floating-text");
let typingSpeed = 100; // Adjust typing speed in milliseconds

function typeSubtitle() {
    if (currentSubtitle.length > 0) {
        subtitleContainer.textContent += currentSubtitle.charAt(0);
        currentSubtitle = currentSubtitle.substring(1);
        setTimeout(typeSubtitle, typingSpeed);
    } else {
        setTimeout(() => {
            subtitleContainer.textContent = "";
            currentSubtitleIndex = (currentSubtitleIndex + 1) % subtitles.length;
            currentSubtitle = subtitles[currentSubtitleIndex];
            typeSubtitle();
        }, 2000); // Wait 2 seconds before displaying next subtitle
    }
}

// Start typing effect on page load
window.onload = function() {
    typeSubtitle();
};
