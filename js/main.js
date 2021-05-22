const targetElement = document.getElementById('test');
// console.log(targetElement);
let testTxt = 'Hi';

// targetElement.textContent = "<h2>Hi</h2>";
// targetElement.innerHTML = "<h2>Hi</h2>";
// targetElement.innerHTML = `<h2>${testTxt}</h2>`;



// const paraph = document.createElement('p');
// const articleTag = document.createElement('div');
// const someTxt = document.createTextNode(' test');
// const someTxt2 = document.createTextNode(' test');
// paraph.textContent = 'some text';
// paraph.appendChild(someTxt);
// paraph.appendChild(someTxt2);
// articleTag.classList.add('class1');
// articleTag.id = 'box2';
// articleTag.textContent = 'box2';
// articleTag.appendChild(paraph);

// console.log(typeof articleTag);
// console.log(articleTag);


// targetElement.appendChild(articleTag);
// targetElement.prepend(articleTag);

// const heading = document.createElement('h2');
// heading.textContent = 'Header';
// const myPraph = document.getElementById('firstParaph');


// targetElement.insertBefore(heading, myPraph);
// targetElement.after(heading);
// targetElement.before(heading);


// const mySecondParaph = targetElement.getElementsByTagName('p')[1];
// mySecondParaph.remove();
// console.log(mySecondParaph);

// const targetParaph = targetElement.getElementsByTagName('p')[1];
// const targetParaph2 = targetElement.getElementsByTagName('p')[2];
// targetElement.removeChild(targetParaph);
// targetElement.removeChild(targetParaph2);

// const newPraph = document.createElement('p');
// newPraph.textContent = 'new paragraph';
// const targetParaph = targetElement.getElementsByTagName('p')[1];
// targetElement.replaceChild(newPraph, targetParaph);
// targetElement.replaceChild(targetParaph, newPraph);

const txt = "salam";
const newElement = `<h2>${txt}</h2>`;
myPrepend(targetElement, newElement);



function myPrepend(target, el) {
  target.innerHTML = `${el} ${target.innerHTML}`;
}
function myAppend(target, el) {
  target.innerHTML = `${target.innerHTML} ${el}`;
}