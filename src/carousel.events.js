export const createCarouselEvents = (rootElement, state, dom, config) => {
  if (!(rootElement instanceof HTMLElement)) {
    throw new Error("rootElement must be a valid HTMLElement");
  }

  if (!state || !dom || !config) {
    throw new Error("state, dom, and config are required");
  }

  const eventListeners = [];
  let isInitialized = false;

  const handleIndexChange = () => {
    dom.moveItems(state.getCurrentIndex());
    dom.resizeItems(state.getCurrentIndex());
    dom.updateClasses(state.getPreviousIndex(), state.getCurrentIndex());
  };

  const handleNext = () => {
    if (!state.canGoNext()) return;
    state.goToNext();
    handleIndexChange();
  };

  const handlePrevious = () => {
    if (!state.canGoPrevious()) return;
    state.goToPrevious();
    handleIndexChange();
  };

  const getDotIndex = (targetDot) => {
    const elements = dom.getElements();
    return elements.dots.findIndex((dot) => dot === targetDot);
  };

  const handleDotClick = (event) => {
    const dotIndex = getDotIndex(event.target);

    if (dotIndex === -1 || dotIndex === state.getCurrentIndex()) {
      return;
    }

    state.setCurrentIndex(dotIndex);
    handleIndexChange();
  };

  const handleKeydown = (event) => {
    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        handlePrevious();
        break;
      case "ArrowRight":
        event.preventDefault();
        handleNext();
        break;
    }
  };

  const addEventListener = (element, eventType, handler) => {
    if (!element) return;
    element.addEventListener(eventType, handler);
    eventListeners.push({ element, eventType, handler });
  };

  const setupEventListeners = () => {
    const elements = dom.getElements();

    addEventListener(elements.nextButton, "click", handleNext);
    addEventListener(elements.previousButton, "click", handlePrevious);
    addEventListener(elements.dotsContainer, "click", handleDotClick);
    addEventListener(document, "keydown", handleKeydown);
  };

  const removeEventListeners = () => {
    eventListeners.forEach(({ element, eventType, handler }) => {
      element.removeEventListener(eventType, handler);
    });
    eventListeners.length = 0;
  };

  const initialize = () => {
    if (isInitialized) return;
    setupEventListeners();
    isInitialized = true;
  };

  const destroy = () => {
    removeEventListeners();
    isInitialized = false;
  };

  return {
    initialize,
    destroy,
    handleNext,
    handlePrevious,
    get isInitialized() {
      return isInitialized;
    },
  };
};
