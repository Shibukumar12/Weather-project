const api_key="d21366e8a9839831b0d8b8ef5495cebd"
let cityname= document.querySelector("form")
let search = document.querySelector("input")
let weatherinfo=document.querySelector(".container")

const getweather= async(city)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`

    let response= await fetch(url);
    let data= await response.json();
    console.log(data)
    show_weatherforcast(data)
}


const show_weatherforcast = (info)=>{

    weatherinfo.innerHTML=`  
    <div class="info1">
                <div class="info1class">

                    <img src="https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png" alt="">
                </div>

                <div class="info1class">
                    <h2>${info.main.temp} °c</h2>
                    <h1>${info.name}</h1>
                </div>

                <div class="info1class">
                    <p> Pressure : ${info.main.pressure}</p>
                    <p>Wind : ${info.wind.speed}</p>
                    <p>Country: ${info.sys.country}</p>
                </div>

                <div class="info1class">
                    <button>Know More</button>
                </div>
            </div>


            <div class="info2">

                <div class="info2class">
                    <h2> Temp Min</h2>
                    <h3> ${info.main.temp_min} °c</h3>
                </div>

                <div class="info2class">
                    <h2> Temp Max</h2>
                    <h3>${info.main.temp_max} °c</h3>
                </div>

                <div class="info2class">
                    <h2>Feels Like</h2>
                    <h3>${info.main.feels_like} °c</h3>
                </div>

                <div class="info2class">
                    <h2>Wind Like</h2>
                    <h3>${info.wind.speed}</h3>
                </div>

            </div>


            <div class="info3">

                <div id="info-3">
                    <div class="info3class">
                        <img src="https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png" alt="">
                    </div>
                    
                    <div class="info3class">
                        <h1>${info.name} : ${info.main.temp} °c</h1>
                    </div>
                </div>

                <div id="info-33">
                    <div class="info3class">
                        <h3>${info.weather[0].description}</h3>
                    </div>
                    
                    <div class="info3class">
                        <h3>Humanity : ${info.main.humidity} %</h3>
                    </div>

                    <div class="info3class">
                        <h3>Deg : ${info.wind.deg}</h3>
                    </div>
                </div>

            </div>
    `
}


cityname.addEventListener("submit",(event)=>{

    getweather (search.value)
    search.value=""
    event.preventDefault();

})

