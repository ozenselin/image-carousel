import Carousel from '../src/carousel.js';
const carousel = Carousel({
  rootElement: document.getElementById("my-carousel"),
  config: {
    images: [
      { src: "image01.jpg", alt: "Image 1" },
      { src: "image02.jpg", alt: "Image 2" },
      { src: "image03.jpg", alt: "Image 3" },
      { src: "image04.jpg", alt: "Image 4" },
      { src: "image05.jpg", alt: "Image 5" },
      { src: "image06.jpg", alt: "Image 6" },
      { src: "image07.jpg", alt: "Image 7" },
    ],
  },
});

carousel.initialize();