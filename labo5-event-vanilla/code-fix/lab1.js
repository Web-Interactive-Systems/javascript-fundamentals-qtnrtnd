// TODO: Fix the errors in the functions below!

const functions = {
  addClickListener(element, callback) {},

  removeClickListener(element, callback) {},

  addKeyDownListener(element, callback) {},

  removeKeyDownListener(element, callback) {},

  addClickWithCaptureListener(element, callback) {
    let clickCount;

    const captureListener = () => {
      clickCount;
    };

    const bubbleListener = () => {
      console.log(`Click count: ${clickCount}`);
    };

    // addEventListener 'click', handler, true/false
  },

  addClickWithBubbleListener(element) {
    let count;

    const handleClick = (event) => {
      // https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
    };

    element.addEventListener('click', handleClick);

    return () => {
      // remove event listener
      //
      return count;
    };
  },
};

module.exports = functions;
