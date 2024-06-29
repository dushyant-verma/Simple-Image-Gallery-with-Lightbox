const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;

const showLightbox = (index) => {
  currentIndex = index;
  lightboxImg.src = galleryItems[currentIndex].src;
  lightbox.style.display = "block";
};

const closeLightbox = () => {
  lightbox.style.display = "none";
};

const showPrev = () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
  lightboxImg.src = galleryItems[currentIndex].src;
};
const showNext = () => {
  currentIndex =(  currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0;
  lightboxImg.src = galleryItems[currentIndex].src;
};

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => showLightbox(index));
});


closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);




closeBtn.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});
