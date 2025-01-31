// Function to update UTC time dynamically
function updateTime() {
    const timeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    timeElement.textContent = new Date().toUTCString();
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();