
// console.log(document);
// console.log(document.head);


let testElement, pElements;

// testElement = document.getElementById('test');
// console.log(testElement);
// testElement.textContent = 'Hi Farzin.';


// pElements = document.getElementsByTagName('p');
// console.log(pElements);

// // console.log(typeof pElements);
// for (let i in pElements) {
//   console.log(i);
//   // pElements[i].textContent = `${i}: Hi`;
// }

// let i = 0;
// for (let element of pElements) {
//   console.log(element);
//   // element.textContent = `${i}: Hi`;

//   i++;
// }

// pElements[0].textContent = 'Hi Farzin';
// pElements['test'].textContent = 'Hi Farzin';



// pElements = document.getElementsByClassName('myPar');
// for (let i = 0; i < pElements.length; i++) {
//   pElements[i].textContent = `${i}: Hi`;
// }

// myElements = document.querySelector('.myPar');
// myElements.textContent = "Hi";
// console.log(myElements);



// myElements = document.querySelectorAll('.myPar');
// console.log(myElements);
// let i = 0;
// while (i < myElements.length) {
//   myElements[i].textContent = `${i}: Hi`;

//   i++;
// }

// let myForm = document.getElementById('getName');
let myForm = document.forms['getName'];
// console.log(myForm);
// myForm.addEventListener('submit', e => {
//   e.preventDefault();
//   let firstName, lastName;

//   // firstName = myForm.getElementsByName('firstName');
//   firstName = myForm.querySelector('[name="firstName"]').value;
//   lastName = document.getElementsByName('lastName')[0].value;
//   month = document.getElementsByName('month')[0].value;
//   check = document.getElementsByName('ttr')[0].checked;
//   radio = document.getElementsByName('myRadio');
//   console.log( getRadioVal(radio) );

//   document.getElementById('fullName').textContent = `${firstName} ${lastName}`;
//   // console.log(firstName);
//   // console.log(lastName);
//   // console.log(month);
//   // console.log(check);
// })




function getRadioVal(elems){
  for( let i = 0; i < elems.length; i++){
    if( elems[i].checked ){
      return elems[i].value;
    }
  }
  return false;
}