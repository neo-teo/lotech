async function loadFooter() {
    // Fetch the template
    const response = await fetch('footer.html');
    const text = await response.text();

    // Create a temporary container and insert the template HTML
    const container = document.createElement('div');
    container.innerHTML = text;

    // Get the template content
    const template = container.querySelector('#footer-template');

    // Clone and insert the template
    const clone = template.content.cloneNode(true);
    document.body.appendChild(clone);

    // Initialize clock
    const span = document.getElementById('clock');
    function time() {
        var options = {
            timeZone: 'America/New_York',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        span.textContent = new Intl.DateTimeFormat('en-US', options)
            .format(new Date());
    }
    time();
    setInterval(time, 1000);

    // Initialize weather
    async function fetchWeather() {
        const response = await fetch('https://wttr.in/new+york?m&format=%t');
        const temperature = await response.text();
        document.getElementById('weather').textContent = `${temperature}`;
    }
    fetchWeather();
}