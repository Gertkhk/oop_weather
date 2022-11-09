class Weather{
    constructor(city) {
        this.city = city
        this.key = "b6333456f56829f95df50b7a7cea7f1a"
    }

    async getWeather(){
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responceData = await responce.json()
        return responceData
    }

    changeCity(city){
        this.city = city
    }
}