const slides = [
  {
    img: "img1.jpg",
    title: "Transfer your money quickly and easily",
    list: [
      "Easy money transfers <strong>for low cost</strong>",
      "Available in <strong>200+ countries</strong> worldwide",
      "<strong>24/7</strong> global availability",
    ],
  },
  {
    img: "imghero2.png",
    title: "Safe and Secure Transfers",
    list: [
      "Bank-level <strong>encryption</strong>",
      "Trusted by <strong>millions worldwide</strong>",
      "Always <strong>protected and reliable</strong>",
    ],
  },
];

let current = 0;
const imgEl = document.getElementById("hero-img");
const titleEl = document.getElementById("hero-title");
const listEl = document.getElementById("hero-list");

function showSlide(index) {
  const slide = slides[index];
  imgEl.src = slide.img;
  titleEl.innerHTML = slide.title;
  listEl.innerHTML = slide.list.map((item) => `<li>${item}</li>`).join("");
}

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 3000);

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});
