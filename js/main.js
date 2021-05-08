/*
function mouseEntered(e) {
  let width, height, bgColor, bgImage, marginTop, imageAddr;
  // console.log(e.target);

  width = e.target.clientWidth;
  height = e.target.clientHeight;
  bgColor = e.target.style.backgroundColor;
  bgImage = e.target.style.backgroundImage;
  marginTop = e.target.style.marginTop;
  imageAddr = e.target.src;
  
  // console.log(width, height);
  // console.log(bgColor);
  // console.log(bgImage);
  // console.log(marginTop);
  // console.log(typeof marginTop);
  // console.log(parseInt(marginTop));
  // console.log(typeof parseInt(marginTop));
  // console.log(imageAddr);

  // e.target.style.marginTop = "2em";
  // e.target.src = "";

  
}
*/

function changeDivBorder() {
  let element;

  element = document.getElementById('test');
  element.style.border = "1px solid #333";
}






function classCheck(e){ 
  let classList;
  console.log(e.target.classList);

  classList = e.target.classList
  // classList.add('class2');
  // classList.remove('class3');
  // if( classList.contains('class3') ) {
  //   console.log('has class');
  // }else{
  //   console.log('has not class');
  // }

  // classList.forEach((item) => {
  //   console.log(item);
  // });

  // classList.toggle('class3')
}


const getEstrySide = sides => {
  let minVal = 1000000, minIndex;

  for (let i in sides) {
    if( sides[i] < minVal ){
      minVal = sides[i];
      minIndex = i;
    }
  }

  return minIndex;
}


const mouseEntered = (e) => {
  let sides = {}, enterySide;

  sides.top = e.layerY;
  sides.right = e.target.clientWidth - e.layerX;
  sides.bottom = e.target.clientHeight - e.layerY;
  sides.left = e.layerX;
  

  // console.log(e);
  // console.log(sides);
  // console.log(e.type);

  // enterySide = getEstrySide(sides);
  e.target
  .textContent = `Entrance from: ${getEstrySide(sides)}`;
}