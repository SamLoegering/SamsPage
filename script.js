const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const years = ["Freshamn Fall","Freshamn Spring","Sophomore Fall","Sophomore Spring","Junior Fall"];

const tableYear = document.querySelector(".year");

//changing theme
const colors = document.querySelector(':root');

function getColors()
{
	var c = getComputedStyle(colors);
}

function setColor()
{
var randomColor = Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
colors.style.setProperty('--accent1','#'+randomColor);
	colors.style.setProperty('--accent2','#'+randomColor2);
	var gradient = "linear-gradient("+"#"+ randomColor + ", " +"#"+ randomColor2 + ")";
	colors.style.setProperty('--accent3',gradient);
}

//code for table slider
//iterate over slides
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
tableYear.textContent = years[counter];
nextBtn.addEventListener("click", function () {
  counter++;
	tableYear.textContent = years[counter];
	setColor();
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
	tableYear.textContent = years[counter];
	setColor();
  carousel();
});

function carousel() {
 

  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";
