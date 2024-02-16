const apiKey = '49bb0d12337e4a0e801221142241402';
const searchButton = document.querySelector('.button-search');

searchButton.addEventListener("click", async () => {
    const city = document.getElementById("search-input").value;

    if (!city) return;

    const data = await searchDataCity(city);

    if (data) fillData(data, city);
});

async function searchDataCity(city) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no&lang=en`;

    const response = await fetch(apiUrl);
    if (response.status !== 200) return;
    const data = response.json();

    return data;
};

function fillData(data, city) {
    const temperature = data.current.temp_c;
    const condition = data.current.condition.text;
    const humid = data.current.humidity;
    const wind = data.current.wind_kph;
    const iconCondition = data.current.condition.icon;


    document.getElementById("city").textContent = city;

    document.getElementById("temperature").textContent = `${temperature}°C`;

    document.getElementById("condition").textContent = condition;

    document.getElementById("humid").textContent = `${humid}%`;

    document.getElementById("wind-km").textContent = `${wind}km/h`;

    document.getElementById("icon-condition").setAttribute("src", iconCondition);
}