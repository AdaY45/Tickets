const tabcontent = document.getElementsByClassName("tabcontent");
const tablinks = document.getElementsByClassName("nav-link");
const items = document.getElementsByClassName("slider-textcard");
const itemCount = items.length;
let count = 0;
const menu = document.querySelector(".menu");
const menuBlock = document.querySelector(".menu-block");
const menuItems = document.getElementsByClassName("menu-btn");


function openSearch(evt,element) {
  for(let item of tabcontent) {
    item.style.display = "none";
  }

  for(let item of tablinks) {
    console.log(item.classList);
    item.classList.remove("active");
  }

  document.getElementById(element).style.display = "block";
  evt.currentTarget.classList.add("active");
}

function openPassenger(evt,element) {
  evt.preventDefault();
  const tabpassenger = document.getElementsByClassName("tabpassenger");
  const tablinks = document.getElementsByClassName("pass-type-choice");
  for(let item of tabpassenger) {
    item.style.display = "none";
  }

  for(let item of tablinks) {
    item.classList.toggle("active", "");
  }

  document.getElementById(element).style.display = "block";
  evt.currentTarget.classList.add("active");
  return false;
}

function showNextItem() {
  items[count].classList.remove('active');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add('active');
}

function showPreviousItem() {
  items[count].classList.remove('active');

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('active');
}

function keyPress(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}

function menuPress() {
  for(let menuitem of menuItems) {
    if(menuitem.classList.contains('active')) {
      menuitem.classList.remove('active');
    } else {
      menuitem.classList.add('active');
    }
  }
  if(menuBlock.classList.contains('active')) {
    menuBlock.classList.remove('active');
  } else {
    menuBlock.classList.add('active')
  }
}

document.addEventListener('keydown', keyPress);