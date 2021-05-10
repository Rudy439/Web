import {Animal} from './animal.js'

export class TreeFrog extends Animal {



    constructor(name, colour, news, pohlavie) {
        super(name, colour, news);
        this.pohlavie = pohlavie;
        this.weather = this.#createWeatherForecast();
    }

    #createWeatherForecast() {
        let weatherParagraph = document.getElementById("weather")
        if (!weatherParagraph) {
            weatherParagraph = document.createElement("p")
            weatherParagraph.id = "weather"
            document.body.appendChild(weatherParagraph)
            return weatherParagraph
        }
        return document.getElementById("weather")
    }
    
    makeForecast() {
        /*const forecast = "bude pekne"
        if (this._dead) {
            this.informWorld('nič nebude predpovedať ...');
        } else {


            
            

            //const apiKey = 'kľúúúúúúúúúúúč';  //šetrite klikmi
            const mestoKrajina = 'Kosice,SK'  // sobrance
            fetch('https://api.openweathermap.org/data/2.5/weather?q=' + mestoKrajina + '&appid=' + apiKey + '&units=metric')
                .then(resp => {
                    if (!resp.ok) {
                        return (resp.statusText + " " + resp.status)
                    } else {
                        return resp.json()
                    }
                })
                .then(json => {
                    // this.weather.innerHTML += ("<br>" + this.constructor.name + " " + this.name + " " + JSON.stringify(json))
                    

                    this.weather.innerHTML += ("<br>" + this.constructor.name + " " + this.name + " " + json.main.temp +
                    "<br>" + json.name + "<br>" + json.weather[0].description)
                })
                .catch(error => {
                    console.log(error)
                });*/
                const frc = document.getElementById('odoslať');
                frc.addEventListener("click", () => {
                    var inputCity = document.getElementById("city-input").value;
                    var inputCountry = document.getElementById("country-input").value;
                    var api = apiForCoord;
                    fetch('https://api.opencagedata.com/geocode/v1/json?q=' + city-input + '%2C%20' + country-input + '&key=' + api)
                    .then( resp => {
                        if( !resp.ok ){
                            return (resp.statusText + " " + resp.status)
                        } else {                
                            return resp.json() 
                        }
                    })    
                
        }
        .then(json =>{
            if (json.result.length > 0 {//city
                const lat = json.results[0].geometry.lat
                const lng = json.results[0].geometry.lng 
                const country =json.result[0] components   
            }

            })
        }

        

        // window.open('http://www.shmu.sk/');
    }
    

    informWorld(message) {
        super.informWorld(message);
        if (!this._dead) {
            this.news.innerHTML += (' kvak');
        }
    }

    makeSound() {
        if (this._dead) {
            this.informWorld('...+...');
        } else {
            this.informWorld(' kvaaaak');
        }

    }

}
