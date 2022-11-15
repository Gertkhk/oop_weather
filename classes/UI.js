class UI {
    constructor() {
        this.description = document.querySelector('#description')
        this.temp = document.querySelector('#temp')
        this.city = document.querySelector('#location')
        this.windspeed = document.querySelector('#windspeed')
        this.winddeg = document.querySelector('#winddeg')
        this.Humidity = document.querySelector(`#Humidity`)
        this.pressure = document.querySelector(`#pressure`)
        this.visibility = document.querySelector(`#visibility`)
    }

    drawWeather(data) {
        let celcius = Math.round(parseFloat(data.main.temp)-273.15);
        let description = data.weather[0].description;
        let winddeg = data.wind.deg;
        let windspeed = data.wind.speed;
        let humidity = data.main.humidity;
        let pressure = data.main.pressure;
        let visibility = data.visibility;

        this.description.innerHTML = description;
        this.temp.innerHTML = celcius + '&deg;';
        this.city.innerHTML = data.name;
        this.winddeg.innerHTML = winddeg + '&deg;';
        this.windspeed.innerHTML = windspeed + 'm/s';
        this.Humidity.innerHTML = `Humidity ` + humidity + `%`;
        this.pressure.innerHTML = `Pressure ` + pressure + ` psi`;
        this.visibility.innerHTML = `Visibility ` + visibility + ` m`;
    }
}