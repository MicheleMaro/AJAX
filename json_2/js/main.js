var asteroidContainer = document.getElementById("asteroid-info");
var btn = document.getElementById("btn");
var pageCounter = 1;

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-1-1&api_key=DEMO_KEY');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  pageCounter++;
  if (pageCounter > 1) {
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
    var htmlString = "";
    for(i = 0; i < 20; i++){
	htmlString += "<p>" + "Camera id: " + data.photos[i].id + "<br>" + "Camera name: " + data.photos[i].camera["full_name"] + "<br>" + " Data: " + data.photos[i].earth_date + "</p>";
    }
  asteroidContainer.insertAdjacentHTML('beforeend', htmlString);
  }