// try{

//   //connec to server / database
//   console.log(a);  

// }catch(e) {
//   throw('wrong data');
// }finally{
//   console.log('finally')
// }



// console.log(a);

// console.log("salam");

// let a = 12;
// if( typeof a != 'string' ){
//   throw('wrong data type');
// }



/////////////////////////////////////
// debugger;
// let a, b, c;
// function addTwo(num){
//   if( num === 4 ){
//     console.log(num);
//   }else{
//     console.log(d);
//   }
// }

// function addTrhee(num){
//   return num + 3;
// }

// person = {
//   age: 26,
//   getAge: function(){
//     return this.age;
//   }
// }

// a = addTwo(4);
// b = addTwo();
// c = person.getAge();

// console.log(a, b, c);

/////////////////////////////////////////////
//function declaration
// function [functionName]([arguments]) {
//   [functionBody]
// }
function consolePrint(input) {
  console.log(input);
}
// function printArguments (a, b, c, d){
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);
//   console.log(arguments);
// }
function printArguments (){
  console.log(arguments);
}

//function expression
const printAddTwo = function(input) {
  console.log(input + 2);
};

// const printAddThree = (input) => {
//   console.log(input + 3);
//   // somthing else
// };
// const printAddThree = input => {
//   console.log(input + 3);
// };
const printAddThree = input => console.log(input + 3);



// consolePrint('salam');
// consolePrint(12);
// printAddTwo(4);
// printAddTwo(-2);
// printAddThree(-2);

// printArguments(10, 'salam', [-1, 2, 3]);

// console.log(typeof printArguments);
// console.log(typeof printAddThree);

// 4!	4*3*2*1
// 	4*3!
// 	4*(3*2!)
// 	4*(3*(2*1!))
// 	4*(3*(2*(1)))
// debugger;
// const fact = (num) => {
//   if( num === 1 ){
//     return 1;
//   }else{
//     return num * fact(num-1);
//   }
// } 

// console.log( fact(4) );

function abc(num, cb) {
  cb(num);
}

abc(3, function(repeat){
  for(let i = 0; i < repeat; i++){
    console.log(`${i}: Salam`);
  }
});

abc(4, function(repeat){
  for(let i = 0; i < repeat; i++){
    console.log(`${i+2}`);
  }
});

setTimeout(function(){
  console.log('2 second passed');
}, 2000);