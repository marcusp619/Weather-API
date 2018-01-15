document.getElementsByTagName("button")[0].addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(position => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    let newApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a902060ee1027a975c4a8ad3537718a2`;

    console.log(`your coord are: ${lat} and ${lon}`);
    console.log(`your api is: ${newApi}`);
   
  fetch(newApi)
  .then(r => r.json())
  .then(data => {
    console.log(`Here is your api data:`, data);
    })
    
  }
)})