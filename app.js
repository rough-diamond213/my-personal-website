document.addEventListener('DOMContentLoaded', () => {
    const currentTime = document.getElementById('currentTime');
    const currentDay = document.getElementById('currentDay');

    function updateTimeAndDay() {
        const now = new Date();
        currentTime.textContent = now.toUTCString().split(' ')[4];
        currentDay.textContent = now.toLocaleString('en-us', { weekday: 'long' });
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});