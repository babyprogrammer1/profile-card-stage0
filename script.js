function updateTime () {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
    timeElement.textContent = `Current Time: ${Date.now()} ms`;

}
document.addEventListener('DOMContentLoaded', () => {
    updateTime();
    setInterval(updateTime, 1000);
});