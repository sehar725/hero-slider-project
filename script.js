const slidesData = [
  {
    title: "AI Project Demo",
    description: "Experience innovative AI-powered applications that automate tasks, improve efficiency, and deliver intelligent solutions for businesses and individuals.",
    image: "images/AI.jpeg",
    button: "View Project",
    link: "#"
  },
  {
    title: "Web Development Services",
    description: "We create responsive, fast, and user-friendly websites using modern technologies to help businesses establish a strong online presence.",
    image: "images/web.avif",
    button: "Learn More",
    link: "#"
  },
  {
    title: "UI/UX Design",
    description: "Designing visually appealing and intuitive user experiences that enhance customer engagement and improve overall usability.",
    image: "images/UI.webp",
    button: "Explore Design",
    link: "#"
  }
];

// HTML mein aapki ID "slides" hai, isliye yahan "slides" likha hai
const sliderContainer = document.getElementById("slides"); 
const dotsContainer = document.getElementById("dots");

// Dynamically generate slides and dots
slidesData.forEach((slide, index) => {
  sliderContainer.innerHTML += `
    <div class="slide ${index === 0 ? 'active' : ''}">
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
    <span class="dot ${index === 0 ? 'active' : ''}"></span>
  `;
});

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let current = 0;
let slideInterval; // Auto-play timer track karne ke liye

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
  
  current = index;
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

// Auto-play shuru karne aur reset karne ke functions
function startTimer() {
  slideInterval = setInterval(nextSlide, 5000);
}

function resetTimer() {
  clearInterval(slideInterval);
  startTimer();
}

// Event Listeners (with timer reset)
document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
  resetTimer();
});

document.querySelector(".prev").addEventListener("click", () => {
  prevSlide();
  resetTimer();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    resetTimer();
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    nextSlide();
    resetTimer();
  }
  if (e.key === "ArrowLeft") {
    prevSlide();
    resetTimer();
  }
});

// Slider load hote hi auto-play start karein
startTimer();
