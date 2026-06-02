const slidesData = [
{
title:"AI Project Demo",
description:"Experience innovative AI-powered applications that automate tasks, improve efficiency, and deliver intelligent solutions for businesses and individuals.",
image:"images/AI.jpeg",
button:"View Project",
link:"#"
},
{
title:"Web Development Services",
description:"We create responsive, fast, and user-friendly websites using modern technologies to help businesses establish a strong online presence.",
image:"images/web.avif",
button:"Learn More",
link:"#"
},
{
title:"UI/UX Design",
description:"Designing visually appealing and intuitive user experiences that enhance customer engagement and improve overall usability.",
image:"images/UI.webp",
button:"Explore Design",
link:"#"
}
];

const sliderContainer = document.getElementById("slider-container");
const dotsContainer = document.getElementById("dots");

slidesData.forEach((slide,index)=>{

sliderContainer.innerHTML += `
<div class="slide ${index===0 ? 'active' : ''}">
<img src="${slide.image}" alt="${slide.title}">
<div class="overlay"></div>

<div class="content">
<h1>${slide.title}</h1>
<p>${slide.description}</p>
<a href="${slide.link}" class="btn">${slide.button}</a>
</div>

</div>
`;

dotsContainer.innerHTML += `
<span class="dot ${index===0 ? 'active' : ''}"></span>
`;

});

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let current = 0;

function showSlide(index){

slides.forEach(slide=>slide.classList.remove("active"));
dots.forEach(dot=>dot.classList.remove("active"));

slides[index].classList.add("active");
dots[index].classList.add("active");
}

function nextSlide(){
current=(current+1)%slides.length;
showSlide(current);
}

function prevSlide(){
current=(current-1+slides.length)%slides.length;
showSlide(current);
}

document.querySelector(".next")
.addEventListener("click",nextSlide);

document.querySelector(".prev")
.addEventListener("click",prevSlide);

dots.forEach((dot,index)=>{
dot.addEventListener("click",()=>{
current=index;
showSlide(current);
});
});

document.addEventListener("keydown",(e)=>{
if(e.key==="ArrowRight") nextSlide();
if(e.key==="ArrowLeft") prevSlide();
});

setInterval(nextSlide,5000);