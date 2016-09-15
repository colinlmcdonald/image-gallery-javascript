export default class jQuery {
    constructor(node) {
      this.node = document.getElementById(node);
      if (!this.node) {
        this.node = document.createElement(node);
      }
      this.events = {};
    }

    addEvent(event, func) {
      this.node.addEventListener(event, func);
      this.events[event] = func;
      return this.events[event];
    }

    removeEvent(event) {
      const eventFunc = this.events[event];
      this.node.removeEventListener(event, eventFunc);
    }

    getStyle(css, value) {
      return this.node.style[css];
    }

    setStyle(css, value) {
      this.node.style[css] = value;
      return this.node.style[css];
    }

    addChild(node) {
      this.node.appendChild(node);
      return node;
    }
  };