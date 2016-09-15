export default class jQuery {
    constructor(node) {
      this.node = document.getElementById(node);
      if (!this.node) {
        this.node = document.createElement(node);
      }
      this.events = {};
    }

    addEvent(event, func) {
      return new Promise((resolve, reject) => {
        this.node.addEventListener(event, func);
        this.events[event] = func;
        resolve(this.events[event])
      })
    }

    removeEvent(event) {
      return new Promise((resolve, reject) => {
        if (!this.events[event]) {
          reject('Sorry, that event does not exist');
        } else {
          const eventFunc = this.events[event];
          this.node.removeEventListener(event, eventFunc);
        }
      })
    }

    getStyle(css, value) {
      return new Promise((resolve, reject) => {
        resolve(this.node.style[css]);
      })
    }

    setStyle(css, value) {
      return new Promise((resolve, reject) => {
        this.node.style[css] = value;
        resolve(this.node.style[css])
      })
    }

    addChild(node) {
      return new Promise((resolve, reject) => {
        this.node.appendChild(node);
        resolve(node)
      })
    }
  };