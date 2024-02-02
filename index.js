var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var images = document.querySelectorAll(".look-img");
var closeBtn = document.querySelector(".close");

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function () {
      modal.style.display = "flex";
      modalImg.src = this.src;
  });
}

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
      modal.style.display = "none";
  }
};








document.addEventListener("DOMContentLoaded", function () {
  var weOfferElement = document.getElementById("weOffer");
  var services = ["Fire Fighting", "HVAC Design", "HVAC Products", "Annual Maintenance Contracts", "Energy"];

  var index = 0;
  setInterval(function () {
      weOfferElement.innerHTML = services[index];
      index = (index + 1) % services.length;
  }, 500); // Change the duration as needed (5000 milliseconds = 5 seconds)
});





// MENU NAVBAR CODE
function openNav() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth <= 430) {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.fontSize = "36px";
    
  } else if (screenWidth <= 768) {
    document.getElementById("myNav").style.width = "100%";
  } else {
    document.getElementById("myNav").style.width = "100%";
  }
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function menuHover() {
  document.getElementById("menu").style.opacity = "0.75";
}

function menuHoverleave() {
  document.getElementById("menu").style.opacity = "1";
}





//TEXT ANIMATION

const carouselText = [
  {text: "Apple", color: "red"},
  {text: "Orange", color: "orange"},
  {text: "Lemon", color: "yellow"}
]

$( document ).ready(async function() {
  carousel(carouselText, "#feature-text")
});

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while(letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
      updateFontColor(eleRef, carouselList[i].color)
      await typeSentence(carouselList[i].text, eleRef);
      await waitForMs(1500);
      await deleteSentence(eleRef);
      await waitForMs(500);
      i++
      if(i >= carouselList.length) {i = 0;}
    }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css('color', color);
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

