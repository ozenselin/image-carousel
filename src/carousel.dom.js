export const createCarouselDOM = (rootElement, config) => {
  if (!(rootElement instanceof HTMLElement)) {
    throw new Error("rootElement must be a valid HTMLElement");
  }

  if (!config || !config.classes || !config.images) {
    throw new Error("config must contain classes and images");
  }

  let elements = null;
  let isInitialized = false;

  const cacheElements = () => {
    elements = {
      list: rootElement.querySelector(`.${config.classes.list}`),
      nextButtons: rootElement.querySelectorAll(`.${config.classes.nextButton}`),
      previousButtons: rootElement.querySelectorAll(
        `.${config.classes.previousButton}`
      ),
      dotsContainer: rootElement.querySelector(
        `.${config.classes.dotsContainer}`
      ),
      items: Array.from(
        rootElement.querySelectorAll(`.${config.classes.item}`)
      ),
      dots: Array.from(rootElement.querySelectorAll(`.${config.classes.dot}`)),
    };
  };

  const createImage = (imageConfig) => {
    const image = document.createElement("img");
    Object.entries(imageConfig).forEach(([attribute, value]) => {
      if (value !== undefined && value !== null) {
        image.setAttribute(attribute, value);
      }
    });
    return image;
  };

  const createDot = () => {
    const dot = document.createElement("span");
    dot.classList.add(config.classes.dot);
    return dot;
  };

  const createCarouselItem = (imageConfig) => {
    const item = document.createElement("li");
    item.classList.add(config.classes.item);
    const image = createImage(imageConfig);
    item.appendChild(image);
    return item;
  };

  const injectHTML = () => {
    rootElement.innerHTML = `
    <div class="${config.classes.carousel}">
      <div class="carousel__navigation carousel__navigation--overlay">
        <button class="${config.classes.button} ${config.classes.previousButton}" type="button">
          <svg class="carousel__icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
        </button>
        <button class="${config.classes.button} ${config.classes.nextButton}" type="button">
          <svg class="carousel__icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
        </button>
      </div>
      <div class="${config.classes.panel}">
        <ul class="${config.classes.list}"></ul>
      </div>
      <div class="carousel__navigation carousel__navigation--bottom">
        <button class="${config.classes.button} ${config.classes.previousButton}" type="button">
          <svg class="carousel__icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
        </button>
        <div class="${config.classes.dotsContainer}"></div>
        <button class="${config.classes.button} ${config.classes.nextButton}" type="button">
          <svg class="carousel__icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
        </button>
      </div>
    </div>
    `;

    const list = rootElement.querySelector(`.${config.classes.list}`);
    const dotsContainer = rootElement.querySelector(
      `.${config.classes.dotsContainer}`
    );

    config.images.forEach((imageConfig) => {
      const item = createCarouselItem(imageConfig);
      const dot = createDot();

      list.appendChild(item);
      dotsContainer.appendChild(dot);
    });
  };

  const updateClasses = (previousIndex, currentIndex) => {
    if (!elements) return;

    const selectedItemClass = config.classes.selectedItem;
    const selectedDotClass = config.classes.selectedDot;

    if (elements.items[previousIndex]) {
      elements.items[previousIndex].classList.remove(selectedItemClass);
    }

    if (elements.items[currentIndex]) {
      elements.items[currentIndex].classList.add(selectedItemClass);
    }

    if (elements.dots[previousIndex]) {
      elements.dots[previousIndex].classList.remove(selectedDotClass);
    }

    if (elements.dots[currentIndex]) {
      elements.dots[currentIndex].classList.add(selectedDotClass);
    }
  };

  const moveItems = (targetIndex) => {
    if (!elements?.items?.[0]) return;

    const itemWidth = parseFloat(getComputedStyle(elements.items[0]).width);
    const leftPosition = -targetIndex * itemWidth;
    elements.list.style.left = `${leftPosition}px`;
  };

  const computeScale = (itemIndex, selectedIndex) => {
    const difference = Math.abs(selectedIndex - itemIndex);
    return config.scale.HIGHEST - config.scale.STEP * difference;
  };

  const resizeItems = (selectedIndex) => {
    if (!elements?.items) return;

    elements.items.forEach((item, index) => {
      const scale = computeScale(index, selectedIndex);
      item.style.transform = `scale(${scale})`;
    });
  };

  const initialize = () => {
    if (isInitialized) return;

    injectHTML();
    cacheElements();
    resizeItems(0);
    updateClasses(0, 0);
    isInitialized = true;
  };

  const destroy = () => {
    elements = null;
    isInitialized = false;
    rootElement.innerHTML = "";
  };

  const getElements = () => {
    if (!elements) {
      cacheElements();
    }
    return elements;
  };

  return {
    initialize,
    destroy,
    moveItems,
    resizeItems,
    updateClasses,
    getElements,
    get isInitialized() {
      return isInitialized;
    },
  };
};
