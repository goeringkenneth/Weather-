
//location input
// have a submit button to select city
// var myForm=document.getElementById(myForm);
// var city=("#cityInput.text");
// document.getElementById("#cityInput").addEventListener("click",);
// $("#location").on("click", (function(event) {
//     console.log(city);
//     event.preventDefault();
var city="city";
$(document).ready(function (){
  $("#subButton").click(function(event){
    event.preventDefault();
    var city = $("input[name=cityName]").val();
    console.log(city);
    
    // openweathermap.org
    var APIKey = "a0ed00a1e03e86452a0e4c5419b896b8";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="
     +city+ "&units=imperial&appid=" + APIKey;
    

    $.ajax({

      url: queryURL,

      method: "GET"
    })
    .then(function(response) {

      console.log(queryURL)
      console.log(response)
      
    var APIKey = "14f6dd8905954cf4bfa14347201811";
    var queryURL4="http://api.weatherapi.com/v1/forecast.json?key="
    +APIKey+"&q="+city+"&days=4";

  


    $.ajax({

      url: queryURL4,

      method: "GET"
    })
    .then(function(response) {

      console.log(queryURL)
      console.log(response)
    });
    });

  });
});



  //               //  var tempF=(response.main.temp-273.15)* 1.80 + 32;


  //               // $(".#").html("<h1>"+response.name +" "+ "Weather Details</h1>");

  //               // $(".#").text("Temperature:"+" "+tempF.toFixed(0));

  //               // $(".#").text("Humitidty:"+" "+response.main.humidity);

  //               // $(".#").text("Wind speed:"+" "+response.wind.speed.toFixed(0));
    
  //     });
    
  // }));
  

  
  