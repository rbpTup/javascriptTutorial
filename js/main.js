// console.log(this);
/* Functions ***************** */
// let a, b, sumNum, c;

// function sum(g, h){
//   return g + h;
// }

// function multiple(b, n){
//   return b * n;
// }


// function printSum() {
//   sum();
// }



// sumNum = sum(4, 5);
// c = multiple(2, sumNum);
// console.log(c);


// let car = ['aa', 'bb'];
// console.log(car);


/* Objects ******************** */
// let person1;

// person1 = {
//   firstName: "Farzin",
//   lastName: "Ahamadi",
//   age: 26,
//   hobby: [
//     'Video Game',
//     'Movie',
//     'Anime'
//   ],
//   printFullName: function(){
//     console.log(`${this.firstName} ${this.lastName}`);
//   }
// };

// person1.nationalCode = '0017306140';

// console.log(person1);
// console.log(person1.firstName);
// console.log(person1.hobby[1]);
// console.log(person1.age);

// console.log(typeof person1);
// console.log(typeof person1.hobby[1]);
// console.log(typeof person1.age);


/* Events ****************** */
function printFirstName() {
  console.log("Farzin");
}

function printVal(value){
  console.log(value);
}

function itsHovered(){
  console.log("Box is Hovered");
}

function itsOut(){
  console.log("Box is not Hovered");
}

let a, b;
a = 5;
b = 4;

// setTimeout(function() {
//   console.log(a + b);
// }, 2000);

setInterval(function() {
  console.log(a);
  a += 1;
}, 2000);