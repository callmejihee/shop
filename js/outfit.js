let roller = document.querySelector('.outfit__contents');
roller.id = 'roll1';

let clone = roller.cloneNode(true);
clone.id = 'roll2';
document.querySelector('.outfit__wrap').appendChild(clone);

document.querySelector('#roll1').style.left = '0px';
document.querySelector('#roll2').style.left =
  document.querySelector('.outfit__contents ul').offsetWidth + 'px';

roller.classList.add('original');
clone.classList.add('clone');
