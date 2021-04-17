/* Events ****************** */
// function printFirstName() {
//   console.log("Farzin");
// }

// function printVal(value){
//   // console.log(window.event);
//   console.log(value);
// }

// function itsHovered(){
//   console.log("Box is Hovered");
// }

// function itsOut(){
//   console.log("Box is not Hovered");
// }

// function itsMoving(){
//   console.log(window.event);
// }


// window.onload = function(){

//   let testelement = document.getElementById('test');
//   testelement.textContent = 'salam';
//   console.log(testelement);

// }

// function runjs(){

//     let testelement = document.getElementById('test');
//     testelement.textContent = 'salam';
//     console.log(testelement);

// }


/* trigger example for later ************ */
// function slide(){
//   let activeSlider = document.getElementById('activeSlider')
//   $(activeSlider).css({
//     'opacity': 0,
//     'display': 'none'
//   })
// }

// setInterval(function(){

//   let nexArrow = document.getElementById('activeSlider')
//   nexArrow.trigger('click')

// }, 6000)
/************* */



// document.getElementById('click-here').addEventListener('click', function(){
//   console.log('farzin');
// })

// let targetElement = document.getElementById('div');
// targetElement.addEventListener('mousemove', function(e){
//   console.log(e);
//   targetElement.textContent = `X: ${e.clientX} Y:${e.clientY}`;
// })


/* Conditions************** */
// let person1 = {
//   firstName: 'farzin',
//   lastName: 'ahmady',
//   age: 25.5
// };

// if(person1.age < 40 && person1.age >= 12 && person1.firstName == 'Amir') {
//   console.log('young');
// }else if(person1.age<20) {
//   console.log('kid');
// }else{
//   console.log('middle age');
// }


// switch (person1.age){
//   case 26:
//   case 25:
//     console.log('young');
//     break;
  
//   case 12:
//     console.log('kid');
//     break;
  
//   case 12:
//     console.log('kid');
//     break;

//   default:
//     console.log('i don\'t know')
// }
/*************** */




/* Loop*********** */
let cars = ['bmw m5', 'nissan gtr', 'mercedes slr'];
// cars[10] = 'test car';

console.log(cars);


// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// for (let i in cars) {
//   console.log(cars[i]);
// }

// let i = 0;
// while(i < cars.length){

//   console.log(cars[i]);
//   i++;
// }

// let i = 25;
// do{
//   console.log(cars[i]);

//   i++;
// }while(i < cars.length);

// cars.forEach(function(car){
//   console.log(car);
// });


let i = 0;
while( true ){
  i++;

  if(i>4 && i<=100){
    continue;
  }


  console.log(i);
  if(i >= 10){
    break;
  }

}