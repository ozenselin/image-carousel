import "./carousel.css";
import { createConfig } from "./carousel.config.js";
import { createCarouselState } from "./carousel.state.js";
import { createCarouselDOM } from "./carousel.dom.js";
import { createCarouselEvents } from "./carousel.events.js";

const createCarousel = ({ rootElement, config: userConfig = {} }) => {
  if (!(rootElement instanceof HTMLElement)) {
    throw new Error("rootElement must be a valid HTMLElement");
  }

  const config = createConfig(userConfig);
  let state = null;
  let dom = null;
  let events = null;
  let isInitialized = false;

  const initialize = () => {
    if (isInitialized) return;

    state = createCarouselState(config);
    dom = createCarouselDOM(rootElement, config);
    events = createCarouselEvents(rootElement, state, dom, config);

    dom.initialize();
    events.initialize();
    isInitialized = true;
  };

  const destroy = () => {
    if (events?.destroy) events.destroy();
    if (dom?.destroy) dom.destroy();
    if (state?.destroy) state.destroy();

    state = null;
    dom = null;
    events = null;
    isInitialized = false;
  };

  const goToNext = () => {
    if (!isInitialized) throw new Error("Must call initialize() first");
    events.handleNext();
  };

  const goToPrevious = () => {
    if (!isInitialized) throw new Error("Must call initialize() first");
    events.handlePrevious();
  };

  const goToIndex = (index) => {
    if (!isInitialized) throw new Error("Must call initialize() first");
    return state.setCurrentIndex(index);
  };

  const getCurrentIndex = () => {
    if (!isInitialized) throw new Error("Must call initialize() first");
    return state.getCurrentIndex();
  };

  return {
    initialize,
    destroy,
    goToNext,
    goToPrevious,
    goToIndex,
    getCurrentIndex,
    get isInitialized() {
      return isInitialized;
    },
  };
};

export default createCarousel;
