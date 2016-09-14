export default class jQuery {
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