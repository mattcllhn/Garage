console.log("test");
var garage = [];

var addCar= function(){
  console.log("in addCar");
// get user input
var newCar={
   year : document.getElementById("year").value,
   make : document.getElementById("make").value,
   model : document.getElementById("model").value,
   pic : document.getElementById("pic").value,
   description : document.getElementById("description").value
};//end of newCar object
console.log(newCar);
garage.push(newCar);
displayCars();
};//end of addCar

var displayCars=function(){
  console.log('in displayCars')
  document.getElementById("allCars").innerHTML="";
for (var i = 0; i < garage.length; i++) {
  var carInfo= '<h2>'+garage[i].year + " " + garage[i].make+" "+garage[i].model+'</h2><img src= "'+garage[i].pic+'"><br>'+garage[i].description+'</br>';
  console.log('carInfo');
  document.getElementById("allCars").innerHTML+=carInfo;
}// end of loop
    console.log("carInfo");
  console.log(garage);
  clearInputs();
};//end of displayCars
var clearInputs= function(){
  console.log('in clearInputs')
  document.getElementById("year").value="",
  document.getElementById("make").value="",
  document.getElementById("model").value="",
  document.getElementById("pic").value="",
  document.getElementById("description").value=""
};//end of clearInputs
var addButton= function(){
  
};
var removeCars= function(){

};
