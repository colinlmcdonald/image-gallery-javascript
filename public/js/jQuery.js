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

    addChild(node) {
      this.node.appendChild(node);
      return node;
    }
  };