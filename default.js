let inputText = document.getElementById('text');
let list = document.getElementById('list');

function reFreshListAttribute() {
    let freshList = document.getElementsByClassName('list-item');

    for (let i=0; i<freshList.length; i++) {
        freshList[i].getElementsByClassName('up-btn')[0].removeAttribute('disabled');
        freshList[i].getElementsByClassName('down-btn')[0].removeAttribute('disabled');
        if (i==0){
            freshList[i].getElementsByClassName('up-btn')[0].setAttribute('disabled', '');
        }
        if(i==freshList.length-1){
            freshList[i].getElementsByClassName('down-btn')[0].setAttribute('disabled', '');
        }
    }
}

function deleteItem(e) {
    let element = e.target.parentElement;
    element.remove();
    reFreshListAttribute();
}

function upItem(e) {
    let element = e.target.parentElement;
    let handleItem = element.previousSibling;
    handleItem.insertAdjacentElement('beforebegin', element);
    reFreshListAttribute();
}

function downItem(e) {
    let element = e.target.parentElement;
    let handleItem = element.nextSibling;
    handleItem.insertAdjacentElement('afterend', element);
    reFreshListAttribute();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

inputText.addEventListener('keyup', event => {
    console.log(event.keyCode);
    if (event.keyCode == 13) {
        if (event.target.value!='') {
            let liElement = document.createElement('li');
            let textElement = document.createTextNode(event.target.value);

            let delButton = document.createElement('button');
            let delText = document.createTextNode('✖');

            let upButton = document.createElement('button');
            let upText = document.createTextNode('↑');

            let downButton = document.createElement('button');
            let downText = document.createTextNode('↓');


            delButton.appendChild(delText);
            delButton.classList.add('del-btn');
            delButton.addEventListener('click', deleteItem);

            upButton.appendChild(upText);
            upButton.classList.add('up-btn');
            upButton.addEventListener('click', upItem);

            downButton.appendChild(downText);
            downButton.classList.add('down-btn');
            downButton.addEventListener('click', downItem);


            liElement.appendChild(textElement);
            liElement.appendChild(delButton);
            liElement.appendChild(upButton);
            liElement.appendChild(downButton);
            liElement.classList.add('list-item');
            liElement.style.backgroundColor = `rgb(${getRandomInt(100, 255)},${getRandomInt(100, 255)},${getRandomInt(100, 255)})`;

            list.appendChild(liElement);
            reFreshListAttribute();

            event.target.value = '';
        }
    }
});


// Math.random() * (max - min) + min
console.log( Math.ceil(Math.random() * (102 - 100) + 100) );
console.log( Math.ceil(Math.random() * (102 - 100) + 100) );
console.log( Math.ceil(Math.random() * (102 - 100) + 100) );
console.log( Math.ceil(Math.random() * (102 - 100) + 100) );

const aa = 1.49;
console.log( Math.floor(aa) );
console.log( Math.ceil(aa) );
console.log( Math.round(aa) );