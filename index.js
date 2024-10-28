const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const erro404 = document.querySelector('.not-found');

search.addEventListener('click', ()=>{

    const APIkey = 'ef0089636ac794a5118da312bba37b1b'; 
    const city =  document.querySelector('.search-box input').value;

    if(city === '')
        return;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}&lang=pt`).then(response => response.json()).then(json => {
            
        if(json.cod ==='404') {
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            erro404.style.display ='block';
            erro404.classList.add('fadeIn');
            return;
        }

            erro404.style.display ='none';
            erro404.classList.remove('fadeIn');
            
            const image = document.querySelector('.weather-box img');
            const temperatura = document.querySelector('.weather-box .temperatura');
            const descricao = document.querySelector('.weather-box .descricao');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            
            console.log(json.weather);
            switch (json.weather[0].main) {
                
                case 'Clear':
                    image.src = 'https://raw.githubusercontent.com/AsmrProg-YT/100-days-of-javascript/refs/heads/master/Day%20%2310%20-%20Weather%20App/images/clear.png';
                    break;

                case 'Clouds':
                    image.src = 'https://raw.githubusercontent.com/AsmrProg-YT/100-days-of-javascript/refs/heads/master/Day%20%2310%20-%20Weather%20App/images/cloud.png';
                    break;
            
                case 'Rain':
                    image.src = 'https://raw.githubusercontent.com/AsmrProg-YT/100-days-of-javascript/refs/heads/master/Day%20%2310%20-%20Weather%20App/images/rain.png';
                    break;
                
                case 'Haze':
                    image.src = 'https://raw.githubusercontent.com/AsmrProg-YT/100-days-of-javascript/refs/heads/master/Day%20%2310%20-%20Weather%20App/images/mist.png';
                    break;

                case 'Snow':
                    image.src = 'https://raw.githubusercontent.com/AsmrProg-YT/100-days-of-javascript/refs/heads/master/Day%20%2310%20-%20Weather%20App/images/snow.png';
                    break;
                
                default:
                    image.src = '';
            }

            temperatura.innerHTML = `${parseInt(json.main.temp)}<span>ºC</span>`;
            descricao.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)} Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';




        });




});