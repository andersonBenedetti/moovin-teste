const dropActive = document.getElementById('drop-active');
const nav = document.getElementById('nav');
const arrow = document.getElementById('arrow');
console.log(arrow);

function addOver() {
  nav.classList.add('active');
  arrow.classList.add('active');
}
function addOut() {
  nav.classList.remove('active');
  arrow.classList.remove('active');
}

dropActive.addEventListener('mouseover', addOver);
dropActive.addEventListener('mouseout', addOut);
nav.addEventListener('mouseover', addOver);
nav.addEventListener('mouseout', addOut);
