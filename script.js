
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

      $(".card-body").prepend("<h1>"+response.name +" "+ "Weather Details</h1>");
      
      $(".cardInfo").append("<li>Temperature:"+" " +response.main.temp.toFixed(0)+"</li>");
 
      $(".cardInfo").append("<li>Humidity:"+" "+response.main.humidity+"</li>");

      $(".cardInfo").prepend("<li>Wind speed:"+" "+response.wind.speed.toFixed(0)+"</li>");
      
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
  var imageURL=response.list[0].weather[0].icon
  console.log(imageURL);
 
  var cardBodyContainer=$(".card-bodyTwo");
  //VAR that APPENDS the Image ICON to .card-body2
  var dayOneEl=$("<img>").attr("src","http://openweathermap.org/img/wn/"+imageURL+"@2x.png");
  cardBodyContainer.append(dayOneEl);
    });
  });
});


  //               //  var tempF=(response.main.temp-273.15)* 1.80 + 32;


  //               // $(".#").html("<h1>"+response.name +" "+ "Weather Details</h1>");

                // $(".#").text("Temperature:"+" "+tempF.toFixed(0));

                // $(".#").text("Humitidty:"+" "+response.main.humidity);

                // $(".#").text("Wind speed:"+" "+response.wind.speed.toFixed(0));
    
  //     });
    
  // }));
  

  
  