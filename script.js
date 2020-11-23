
//location input
// have a SUBMIT BUTTON to select CITY

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
      // var tempF=(response.main.temp-273.15)* 1.80 + 32;

      $(".card-body").prepend("<h1>"+response.name+"<h1>");
      $(".cardInfo").prepend("<li>Temperature:"+" " +response.main.temp.toFixed(0)+"</li>");
      $(".cardInfo").append("<li>Wind speed:"+" "+response.wind.speed.toFixed(0)+"</li>");
      $(".cardInfo").append("<li>Humidity:"+" "+response.main.humidity+"</li>");

      
    });
  });
  
});
// FORCAST API (openweather.org)
// $(".card-body2").append("<h1>"+c+" "+"</h1>");

$(document).ready(function (){
  $("#subButton").click(function(event){
    event.preventDefault();
    var city = $("input[name=cityName]").val();
    console.log(city);

var APIKey = "a0ed00a1e03e86452a0e4c5419b896b8";
var queryURL="https://api.openweathermap.org/data/2.5/forecast?q="
+city+ "&units=imperial&appid=" + APIKey;




$.ajax({

  url: queryURL,

  method: "GET"
})
.then(function(response) {

  console.log(queryURL);
  console.log(response);
  // VAR that holds my icon pic
  // for lop for the days
  // var list=[0,1,2,3,4];
  // for (var i = 0; i < list.length; i++) {
  //   var list=list.length
  //   console.log([i])
  // };

  var one=response.list[0].weather[0].icon;
  var two=response.list[1].weather[0].icon;
  var three=response.list[2].weather[0].icon;
  var four=response.list[3].weather[0].icon;
  var five=response.list[4].weather[0].icon;
  console.log(one,two,three,four,five);
 
  var cardBodyContainer=$(".card-bodyTwo");
  //VAR that APPENDS the Image ICON to .card-body2
  var dayOneEl=$("<img>"+"<div class=forecast>").attr("src","http://openweathermap.org/img/wn/"+one+"@2x.png");
  var dayTwoEl=$("<img>"+"<div class=forecast>").attr("src","http://openweathermap.org/img/wn/"+two+"@2x.png");
  var dayThreeEl=$("<img>"+"<div class=forecast >").attr("src","http://openweathermap.org/img/wn/"+three+"@2x.png");
  var dayFourEl=$("<img>"+"<div class=forecast>").attr("src","http://openweathermap.org/img/wn/"+four+"@2x.png");
  var dayFiveEl=$("<img>"+"<div class=forecast>").attr("src","http://openweathermap.org/img/wn/"+five+"@2x.png");

  cardBodyContainer.append(dayOneEl);
  
  cardBodyContainer.append(dayTwoEl);
  
  cardBodyContainer.append(dayThreeEl);
  
  cardBodyContainer.append(dayFourEl);
  
  cardBodyContainer.append(dayFiveEl);
    });
  });
});

  //               //  var tempF=(response.main.temp-273.15)* 1.80 + 32;


  //               // $(".#").html("<h1>"+response.name +" "+ "Weather Details</h1>");

                // $(".#").text("Temperature:"+" "+tempF.toFixed(0));

                // $(".#").text("Humitidty:"+" "+response.main.humidity);

                // $(".#").text("Wind speed:"+" "+response.wind.speed.toFixed(0));
    
  //     });

  
  