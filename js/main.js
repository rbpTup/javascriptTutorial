const closestSide = sides => {
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
  let sides = {}, text;

  if(e.type === 'mouseover') {
    sides.top = e.layerY;
    sides.right = e.target.clientWidth - e.layerX;
    sides.bottom = e.target.clientHeight - e.layerY;
    sides.left = e.layerX;

    text = `Entrance from: ${closestSide(sides)}`;
  }else if(e.type === 'mouseout'){
    console.log(e);
    sides.top = Math.abs(e.clientY - e.target.offsetTop);
    sides.right = Math.abs(e.clientX - e.target.clientWidth - e.target.offsetLeft);
    sides.bottom = Math.abs(e.clientY - e.target.clientHeight - e.target.offsetTop);
    sides.left = Math.abs(e.clientX - e.target.offsetLeft);

    text = `Exit from: ${closestSide(sides)}`;
  }

  e.target.textContent = text
}

function menuTrigger(e) {
  e.target.classList.toggle('fa-bars');
  e.target.classList.toggle('fa-times');
}