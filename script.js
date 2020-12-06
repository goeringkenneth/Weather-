
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

function day(a){
 var dayEL=response.list[a].weather[0].icon;
return dayEL;
      }
      console.log(day(0));
      console.log(day(1));
      console.log(day(2));
      console.log(day(3));
      console.log(day(4));
    });
  });
});


// APPEND Forcast cards.
function forecast(a){
var iconEl=$("."+a).append(day(0));
return iconEl
}
forecast(dayOne).apepend("day(0)");



// $(".card-body").prepend("<h1>"+response.name+"<h1>");

  // $(".dayOne").append(dayOneEl)
  // ;
  // $(".dayTwo").append(dayTwoEl);
  //  $(".dayThree").append(dayThreeEl);
  
  // $(".dayFour./card-text").append(dayFourEl);
  
  // $(".dayFive./card-text").append(dayFiveEl);
//     });
//   });
// });

  //               //  var tempF=(response.main.temp-273.15)* 1.80 + 32;


  //               // $(".#").html("<h1>"+response.name +" "+ "Weather Details</h1>");

                // $(".#").text("Temperature:"+" "+tempF.toFixed(0));

                // $(".#").text("Humitidty:"+" "+response.main.humidity);

                // $(".#").text("Wind speed:"+" "+response.wind.speed.toFixed(0));
    
  //     });

  
  