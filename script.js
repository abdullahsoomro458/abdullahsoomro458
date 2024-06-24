document.getElementById('weather-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = 'cd5bd86492b7b555dbe800f383fee7e1';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('weather-city').textContent = data.name;
                document.getElementById('weather-temperature').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('weather-description').textContent = data.weather[0].description;
                document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                document.getElementById('weather-result').classList.remove('hidden');
                document.getElementById('error-message').classList.add('hidden');
            } else {
                document.getElementById('weather-result').classList.add('hidden');
                document.getElementById('error-message').classList.remove('hidden');
            }
        })
        .catch(() => {
            document.getElementById('weather-result').classList.add('hidden');
            document.getElementById('error-message').classList.remove('hidden');
        });
});
