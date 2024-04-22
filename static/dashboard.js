function toggleMenu() {
    var menu = document.getElementById('menu');
    var menuButton = document.querySelector('.menu button');
    var menuContent = document.getElementById('menuContent');
    if (menu.style.width === '200px') {
        menu.style.width = '50px'; // Collapse menu
        menuContent.style.display = 'none'; // Hide content
        menuButton.innerHTML = '&#10148;'; // Right arrow
        menuButton.style.transform = 'rotate(0deg)';
    } else {
        menu.style.width = '200px'; // Expand menu
        menuContent.style.display = 'flex'; // Show content
        menuButton.innerHTML = '&#10148;'; // Right arrow
        menuButton.style.transform = 'rotate(180deg)'; // Rotate arrow
    }
}

function openTikTokPopup() {
    const popupUrl = '/apiconnect'; // URL to open in the popup, matching the Flask route
    const popupWidth = 400; // Width of the popup window
    const popupHeight = 600; // Height of the popup window
    const popupLeft = (window.screen.width - popupWidth) / 2;
    const popupTop = (window.screen.height - popupHeight) / 2;

    // Open a new window: window.open(URL, name, specs, replace)
    const popup = window.open(popupUrl, '_blank', `width=${popupWidth},height=${popupHeight},top=${popupTop},left=${popupLeft}`);

    // Optional: Focus on the popup
    if (popup) popup.focus();
}
