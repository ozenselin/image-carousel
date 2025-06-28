export const createCarouselState = (config) => {
  if (!config || !config.maxItems) {
    throw new Error("Config with maxItems is required");
  }

  let currentIndex = 0;
  let previousIndex = 0;
  const maxItems = config.maxItems;

  const isValidIndex = (index) => {
    return Number.isInteger(index) && index >= 0 && index < maxItems;
  };

  const getCurrentIndex = () => currentIndex;
  const getPreviousIndex = () => previousIndex;
  const getMaxItems = () => maxItems;

  const setCurrentIndex = (newIndex) => {
    if (!isValidIndex(newIndex)) {
      return false;
    }

    previousIndex = currentIndex;
    currentIndex = newIndex;
    return true;
  };

  const goToNext = () => {
    return setCurrentIndex(currentIndex + 1);
  };

  const goToPrevious = () => {
    return setCurrentIndex(currentIndex - 1);
  };

  const canGoNext = () => currentIndex < maxItems - 1;
  const canGoPrevious = () => currentIndex > 0;

  const reset = () => {
    previousIndex = currentIndex;
    currentIndex = 0;
  };

  const destroy = () => {
    // basic cleanup
  };

  return {
    getCurrentIndex,
    getPreviousIndex,
    getMaxItems,
    setCurrentIndex,
    goToNext,
    goToPrevious,
    canGoNext,
    canGoPrevious,
    reset,
    destroy,
  };
};
