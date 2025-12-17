console.log("API Key:", apiKey);
const apiUrl= 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const wise = document.querySelector('.string h2')
isMuted = true
const video = document.querySelector('.bg-video');
video.play();   // play
video.pause();  // pause


var path = `M 10 80 Q 95 78 180 80`

var finalPath = `M 10 80 Q 95 78 180 80`

var string =document.querySelector('.string')

string.addEventListener('mousemove',function(dets){
    console.log(dets);
   path = `M 10 80 Q 95 ${dets.y} 180 80`
   gsap.to('svg path',{
    attr:{d:path},
    duration:0.5,
    ease:'power1.out'
   })
})

string.addEventListener('mouseleave',function(dets){
    gsap.to('svg path',{
        attr:{d:finalPath},
        duration:0.6,
        ease:'elastic.out(1,0.2)'
        
    })

    gsap.to(wise,{
        y:-100,
        x:500,
        ease:'power1.out',
        rotate:-60,
        duration:0.8,
        color:'red',
        
    })

    gsap.to(wise,{
        y:0,
        x:0,
        opacity:1,
        rotate:0,
        duration:0.8,
        delay:2.5,
    color: 'rgb(200, 200, 190)'
        
    })
})

var tl = gsap.timeline()

tl.from('h2 ,p',{
    y: -100,
    opacity: 0,
    duration: 1,
    dekay: 0.6,
})



const ctx = document.querySelector('.my-chart').getContext('2d');

const weatherChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        datasets: [{
            data: [28,26,27,25,24,26,27],
            borderColor: '#7fffd4',
            borderWidth: 2,
            fill: false,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: {
                    display: true,
                    autoSkip: false,
                    color: '#e0e0d0'
                },
                grid: { display: false }
            },
            y: {
                ticks: { color: '#e0e0d0' },
                grid: { display: false }
            }
        },
        plugins: {
            legend: { display: false }
        },
        elements: {
            point: { radius: 0 }
        }
    }
});

///////curve line,,,,,,,,,,,,,,,,,,,,,,,,,,,,
const canvas = document.getElementById('statusCanvas');
const ctx1 = canvas.getContext('2d');

function drawCurve(status) {
  const w = canvas.width;
  const h = canvas.height;

  ctx1.clearRect(0, 0, w, h);
  ctx1.beginPath();

  // start point (left bottom)
  ctx1.moveTo(w * 0.1, h * 0.1);

  // control point (curve height)
  const controlY =
   status === 'danger'? h * 0.1:
   status==='cold'    ?h * 0.7:
                      h*0.5    // normal = neeche

  // curve
  ctx1.quadraticCurveTo(
    w * 0.75,     // control X
    controlY,    // control Y
    w * 0.1,     // end X
    h * 0.9      // end Y
  );

  // color
   if (status === 'danger') {
    ctx1.strokeStyle = 'red';
  } else if (status === 'cold') {
    ctx1.strokeStyle = '#7fffd4';
  } else {
    ctx1.strokeStyle = '#283594';
  }

  ctx1.lineWidth = 4;
  ctx1.stroke();
}


drawCurve('normal');
const weatherSubtitle = {
  Clear: "Sunny <br> with clear skies",
  Clouds: "Partly Cloudy <br> with sunshine",
  Rain: "Rainy <br> with cloudy skies",
  Thunderstorm: "Stormy <br> with heavy rain",
  Snow: "Snowy <br> with freezing winds",
  Mist: "Misty <br> with cool air",
  Fog: "Foggy <br> with low visibility",
  Haze: "Hazy <br> with calm winds"
};
let h1;
const star = document.querySelector('.star');
const last = document.querySelector('.last h2'); 
const temp = document.querySelector('.div3 h1'); 
const statusText = document.querySelector('.div5 h1'); 
const searchInput = document.getElementById('search-input'); 
const chartCanvas = document.querySelector('.my-chart'); 
const sInput = document.getElementById('buttonId'); 
const errorDiv = document.getElementById('error-message');

async function getWeather(city) {
  try {

    // 🔹 STEP 1: City → lat lon
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
    );

    if (!response.ok) {
      alert("City not found ❌");
      return;
    }

    const data = await response.json();

    // 🔹 DOM update (current weather)
    document.querySelector('.names').innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.h p').innerHTML =
      'H ' + Math.round(data.main.temp_max) + '°C';
    document.querySelector('.l p').innerHTML =
      'L ' + Math.round(data.main.temp_min) + '°C';
    document.querySelector('.div5 h1').innerHTML =
      weatherSubtitle[data.weather[0].main];

    // 🔹 STEP 2: lat lon
    const lat = data.coord.lat;
    const lon = data.coord.lon;

    // 🔹 STEP 3: 7 day weather (One Call v3)
    const weekRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max&timezone=auto`
    );

    const weekData = await weekRes.json();
    const temps = weekData.daily.temperature_2m_max.slice(0, 7)
    weatherChart.data.datasets[0].data = temps;
    weatherChart.update();
    const todayTemp =Math.round(data.main.temp);

    if (todayTemp >= 23) {
     currentStatus = 'danger';
      drawCurve('danger')
      document.querySelector('.per h4').innerHTML = 'Heatwave Alert! Stay Hydrated 🌞';
      document.querySelector('.per h3').innerHTML= Math.round(data.main.temp_max) + '°C'
      document.querySelector('.per h3').style.color='red'
      document.querySelector('.per h4').style.color='red'
      document.querySelector('main').style.backgroundImage='url(https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
      searchInput.value=''

    }else if(todayTemp<=5) {
        currentStatus = 'cold'
        drawCurve('cold')
        document.querySelector('.per h4').innerHTML = 'Extreme Cold! Bundle Up 🥶';
        document.querySelector('.per h3').innerHTML= Math.round(data.main.temp_min) + '°C'
        document.querySelector('.per h3').style.color='#7fffd4'
        document.querySelector('.per h4').style.color='#7fffd4'
        document.querySelector('main').style.backgroundImage='url(./Gemini_Generated_Image_wjkaqfwjkaqfwjka.png)'
        video.style.opacity = '0.2';
        video.play()
        searchInput.value=''
    }else {
    currentStatus = 'normal';
    document.querySelector('.per h4').innerHTML = 'Pleasant Weather! Enjoy Your Day 😊';
    document.querySelector('.per h3').innerHTML= todayTemp + '°C'
    document.querySelector('.per h3').style.color='#283594'
    document.querySelector('.per h4').style.color='green'
    drawCurve('normal');
    video.style.opacity = '0';
     document.querySelector('main').style.backgroundImage='url(./unnamed.jpg)'
    searchInput.value=''



    }

   console.log("Today Temp:", todayTemp);
   console.log("Status:", currentStatus);

  } catch (error) {
    alert("Something went wrong ⚠️");
    console.error(error);
  }
}

// 🔹 Button click
sInput.addEventListener('click', function () {
  getWeather(searchInput.value);
  searchInput.value=''


});

// 🔹 Default load
// getWeather('Butwal');
let currentStatus = 'normal';

drawCurve(currentStatus);

window.addEventListener('resize', () => {
  drawCurve(currentStatus);
});


///////////////////////////////////////

const weatherwise = document.querySelector('main')
setInterval(function(){
  let h1 = document.createElement('h1')

  let x= Math.random()*90
  let y= Math.random()*90
  let scl = Math.random()*3

  let a = Math.floor(Math.random()*250)
  let b = Math.floor(Math.random()*250)
  let c = Math.floor(Math.random()*250)

  h1.innerHTML ='<i class="ri-leaf-line"></i></i>'
  h1.style.color=`rgb(${a}, ${b}, ${c})`
  h1.style.fontSize='3px'
  h1.style.position='absolute'
  h1.style.zIndex=1
  h1.style.left= x +'%'
  h1.style.top = y + '%'
  h1.style.transform=`scale(${scl})`
  h1.style.transition ='opacity 0.5s ease'
  h1.style.opacity='0'
  star.appendChild(h1)

  setTimeout(()=>{
    h1.style.opacity=0
    setTimeout(()=>h1.remove(),500)
  },400)
},400)