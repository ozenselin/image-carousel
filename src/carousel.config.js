const DEFAULT_SCALE = {
  HIGHEST: 1.4,
  STEP: 0.2,
};

const DEFAULT_CLASSES = {
  carousel: "carousel",
  panel: "carousel__panel",
  list: "carousel__list",
  item: "carousel__item",
  dotsContainer: "carousel__indicators",
  dot: "carousel__dot",
  buttonsContainer: "carousel__actions",
  button: "carousel__button",
  nextButton: "carousel__button--next",
  previousButton: "carousel__button--previous",
  selectedItem: "carousel__item--selected",
  selectedDot: "carousel__dot--selected",
};

const DEFAULT_IMAGES = [
  { src: "./images/image01.png", alt: "", width: "100%" },
  { src: "./images/image02.jpg", alt: "", width: "100%" },
  { src: "./images/image03.jpg", alt: "", width: "100%" },
  { src: "./images/image04.png", alt: "", width: "100%" },
  { src: "./images/image05.png", alt: "", width: "100%" },
  { src: "./images/image06.png", alt: "", width: "100%" },
  { src: "./images/image07.png", alt: "", width: "100%" },
];

const CarouselConfig = {
  scale: DEFAULT_SCALE,
  classes: DEFAULT_CLASSES,
  images: DEFAULT_IMAGES,
};

export const createConfig = (userConfig = {}) => {
  const config = {
    ...CarouselConfig,
    ...userConfig,
    classes: { ...CarouselConfig.classes, ...userConfig.classes },
    scale: { ...CarouselConfig.scale, ...userConfig.scale },
  };

  config.maxItems = config.images.length;
  return config;
};

export default CarouselConfig;
