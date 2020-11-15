var APIKey = "a0ed00a1e03e86452a0e4c5419b896b8";

//location input

var location=("#cityInput");

// openweathermap.org
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +location; "&appid=" + APIKey;


    $.ajax({

      url: queryURL,

      method: "GET"

    }).then(function(response) {

      console.log(queryURL)
      console.log(response)



     var tempF=(response.main.temp-273.15)* 1.80 + 32;


    $(".#").html("<h1>"+response.name +" "+ "Weather Details</h1>");

    $(".#").text("Temperature:"+" "+tempF.toFixed(0));

    $(".#").text("Humitidty:"+" "+response.main.humidity);

    $(".#").text("Wind speed:"+" "+response.wind.speed.toFixed(0));

    });