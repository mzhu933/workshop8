let weather_api = 'https://api.open-meteo.com/v1/forecast?latitude=-36.8485&longitude=174.7635&current=temperature_2m,apparent_temperature,is_day&hourly=temperature_2m&forecast_days=1';
let img1, img2, img3, dayGif, nightGif;
let currentTemp, apparentTemp, isDay;

function preload() {
  img1 = loadImage("images/1.jpg");
  img2 = loadImage("images/2.jpg");
  img3 = loadImage("images/3.jpg");
  dayGif = createImg("images/day.gif");
  nightGif = createImg("images/night.gif");

  // Hide GIFs initially
  dayGif.hide();
  nightGif.hide();
}

function setup() {
  createCanvas(450, 450);
  fetchTemperatureData();
}


function draw() {
   
    if (isDay === 1) {
      background(170, 200, 230); 
    } else {
      background(200, 200, 230); 
    }

  if (currentTemp !== undefined && apparentTemp !== undefined && isDay !== undefined) {
    textSize(24);
    fill(90);
    text(`Current Temperature is: ${currentTemp}°C`, 20, 55);
    text(`Apparent Temperature is: ${apparentTemp}°C`, 20, 90);

    
    if (apparentTemp < 10) {
      image(img1, 20, 120, 200, 200);
    } else if (apparentTemp >= 10 && apparentTemp <= 22) {
      image(img2, 20, 120, 200, 200);
    } else {
      image(img3, 20, 120, 200, 200);
    }

    
    if (isDay === 1) {
      dayGif.position(300, 300);
      dayGif.size(100, 100);
      dayGif.show();
      nightGif.hide();
    } else {
      nightGif.position(300, 300);
      nightGif.size(100, 100);
      nightGif.show();
      dayGif.hide();
    }
  } else {
    textSize(20);
    fill(150);
    text("Loading temperature data...", 30, 140);
    textFont('serif'); 

  }
}

// Function to fetch temperature data from the API
function fetchTemperatureData() {
  fetch(weather_api)
    .then((response) => response.json())
    .then((data) => {
      const currentData = data.current;
      currentTemp = currentData.temperature_2m;
      apparentTemp = currentData.apparent_temperature;
      isDay = currentData.is_day;
    })
    .catch((error) => {
      console.error("Error fetching API data:", error);
    });
}


