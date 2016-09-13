'use strict';

window.onload = (() => {
  class jQuery {
    constructor(node) {
      this.node = document.getElementById(node);
      this.events = {};
    }

    addEvent(event, func) {
      this.node.addEventListener(event, func);
      this.events[event] = func;
    }

    removeEvent(event) {
      const eventFunc = this.events[event];
      this.node.removeEventListener(event, eventFunc);
    }

    getStyles() {
      return window.getComputedStyle(this.node);
    }

    setStyle(css, value) {
      this.node.style[css] = value;
    }
  };

  const pictures = new jQuery('pictures-container');

  let currentPicture, hoverPicture;

  pictures.addEvent('mousedown', (e) => {
    currentPicture = new jQuery(e.target.id);
    pictures.addEvent('mouseover', (e) => {
      hoverPicture = new jQuery(e.target.id);
      changeImages(currentPicture, hoverPicture);
    });
  });

  pictures.addEvent('mouseup', (e) => {
    pictures.removeEvent('mouseover');
  });

  function changeImages(cp, hp) {
    let temp = cp.getStyles().backgroundImage;
    cp.setStyle('backgroundImage', hp.getStyles().backgroundImage);
    hp.setStyle('backgroundImage', temp)
    currentPicture = hoverPicture;
  };
})();