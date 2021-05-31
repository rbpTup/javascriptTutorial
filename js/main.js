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

const adjustHOverLayer = target => {
  const width = target.offsetWidth;
  const height = target.offsetHeight;
  const left = target.offsetLeft;
  const top = target.offsetTop;

  const hoverBox = document.getElementById('hoverBox');
  hoverBox.style.left = left;
  hoverBox.style.top = top;
  hoverBox.style.width = width;
  hoverBox.style.height = height;
}

const mouseEntered = (e) => {
  let sides = {}, text;

  if(e.type === 'mouseover') {
    sides.top = e.layerY;
    sides.right = e.target.clientWidth - e.layerX;
    sides.bottom = e.target.clientHeight - e.layerY;
    sides.left = e.layerX;

    e.target.classList.add(`enter-${closestSide(sides)}`);
    adjustHOverLayer(e.target);
  }else if(e.type === 'mouseout'){
    sides.top = Math.abs(e.clientY - e.target.offsetTop);
    sides.right = Math.abs(e.clientX - e.target.clientWidth - e.target.offsetLeft);
    sides.bottom = Math.abs(e.clientY - e.target.clientHeight - e.target.offsetTop);
    sides.left = Math.abs(e.clientX - e.target.offsetLeft);

    e.target.classList.add(`exit-${closestSide(sides)}`);
  }

  e.target.textContent = text
}

function menuTrigger(e) {
  e.target.classList.toggle('fa-bars');
  e.target.classList.toggle('fa-times');
}

adjustHOverLayer(document.querySelector('.wrap > :first-child'));