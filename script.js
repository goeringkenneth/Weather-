
//location input
// have a SUBMIT BUTTON to select CITY

$(document).ready(function(){
  $("#subButton").click(function(event){
    event.preventDefault();
    // city=city

    
   //local storage
    let city = $("input[name=cityName]").val();
 
    function localIn() {
      // localStorage.setItem("city", $("input[name=cityName]").val()); 
         localStorage.city=("city", $("input[name=cityName]").val());
    
    }
    localIn();
    function localOut(){

      localStorage.getItem("city");
      $(".list-group").append(`<li class="list-group-item">${city}</li>`)
    // console.log();
    
    
    }
    localOut(city);

// current Day
    var APIKey = "a0ed00a1e03e86452a0e4c5419b896b8";
    var queryURL="https://api.openweathermap.org/data/2.5/weather?q="
    +city+ "&units=imperial&appid=" + APIKey;
    
    $.ajax({
    
      url: queryURL,
    
      method: "GET"
    })
    .then(function(response) {
 
     
      $(".cardBody").text(response.name);
      $(".cardBody").append("<li>"+"Temperature:"+" " +response.main.temp.toFixed(0)+"℉"+"</li>");
      $(".cardBody").append("<li>"+"Wind speed:"+" "+response.wind.speed.toFixed(0)+"</li>");
      $(".cardBody").append("<li>"+"Humidity:"+" "+response.main.humidity+"</li>");
 
    });

    //uv index
var APIKey = "a0ed00a1e03e86452a0e4c5419b896b8";
var queryURL="https://api.openweathermap.org/data/2.5/forecast?q="
+city+ "&units=imperial&appid=" + APIKey;

$.ajax({
  url: queryURL,
  method: "GET"
})
.then(function(response) { 
  var lat= response.city.coord.lat;
  var lon= response.city.coord.lon;
 console.log(lat);
 console.log(lon);
 var APIKey = "a0ed00a1e03e86452a0e4c5419b896b8";
var queryURL="https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid=" + APIKey;

$.ajax({
  url: queryURL,
  method: "GET"
})
.then(function(response) {
  console.log(response);
  var uvi="<li id=uvi>UVI:"+" "+response.current.uvi+"</li>"

  $(".cardBody").append(uvi);
  var x=document.querySelector("#uvi");
  uviEl=response.current.uvi
  console.log(uviEl)

if (uviEl<=3) {
    x.classList.add("low")
  }
   
    else if (uviEl>=3) {
    x.classList.add("med")
   }
   else if (uviEl>=6) {
    x.classList.add("high")
   }
   else if (uviEl>=8) {
    x.classList.add("veryHigh")
   };
  });
  




function dayOne(){
  var imageURL=response.list[0].weather[0].icon;
  var temp=response.list[0].main.temp;
  var iconImg = $("<img>").attr("src","http://openweathermap.org/img/wn/"
  +imageURL+"@2x.png");
  
  $(".cardOne").text(`Temp: ${temp.toFixed(0)}℉`);
  $(".cardOne").append(iconImg)
};
dayOne()

function dayTwo(){

  var imageURL=response.list[1].weather[0].icon;
  var temp=response.list[1].main.temp;
  var iconImg = $("<img>").attr("src","http://openweathermap.org/img/wn/"
  +imageURL+"@2x.png");
  
  $(".cardTwo").text(`Temp: ${temp.toFixed(0)}℉`);
  $(".cardTwo").append(iconImg)
};
dayTwo()


function dayThree(){

  var imageURL=response.list[2].weather[0].icon;
  var temp=response.list[2].main.temp;
  var iconImg = $("<img>").attr("src","http://openweathermap.org/img/wn/"
  +imageURL+"@2x.png");
  
  $(".cardThree").text(`Temp: ${temp.toFixed(0)}℉`);
  $(".cardThree").append(iconImg)
};
dayThree()

function dayFour(){

  var imageURL=response.list[3].weather[0].icon;
  var temp=response.list[3].main.temp;
  var iconImg = $("<img>").attr("src","http://openweathermap.org/img/wn/"
  +imageURL+"@2x.png");
  
  $(".cardFour").text(`Temp: ${temp.toFixed(0)}℉`);
  $(".cardFour").append(iconImg)
};
dayFour()

function dayFive(){

  var imageURL=response.list[4].weather[0].icon;
  var temp=response.list[4].main.temp;
  var iconImg = $("<img>").attr("src","http://openweathermap.org/img/wn/"
  +imageURL+"@2x.png");
  
  $(".cardFive").text(`Temp: ${temp.toFixed(0)}℉`);
  $(".cardFive").append(iconImg)
  
};
dayFive()
  
    });
    
  });
  
});




// local storage




   

