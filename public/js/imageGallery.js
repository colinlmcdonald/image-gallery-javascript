import $ from './jQuery';

export default class ImageGallery{
  constructor(images, container) {
    this.imageData = images;
    this.container = container;
    this.createImageNodes()
      .then(images => this.addImages(images))
  }

  createImageNodes() {
    return new Promise((resolve, reject) => {
      this.images = this.imageData.map(image => {
        const newImage = new $('div');
        newImage.setStyle('backgroundImage', image.url);
        newImage.node.className = 'picture';
        newImage.node.draggable = true;
        return newImage.addEvent('dragstart', (e) => {
          this.dragStartNode = e.target;
        })
        .then(newImage.addEvent('dragover', (e) => {
          this.dragOverNode = e.target;
        }))
        .then(newImage.addEvent('dragexit'), (e) => {
          this.dragExitNode = e.target;
        })
        .then(img => newImage)
      })
      resolve(Promise.all(this.images))
    })
  }

  addImages(images) {
    return new Promise((resolve, reject) => {
      const picContainer = new $('pictures-container');
      let row = new $('div');
      row.node.className = 'row';
      images.forEach((image, i) => {
        row.addChild(image.node)
        if ((i + 1) % 4 === 0) {
          picContainer.addChild(row.node)
          row = new $('div');
          row.node.className = 'row';
        } 
      })
      resolve(picContainer);
    })
  }

  setDragStart(node) {

  }
}

  // let currentPicture, hoverPicture;

  // picContainer.addEvent('mousedown', (e) => {
  //   currentPicture = new dm(e.target.id);
  //   picContainer.addEvent('mouseover', (e) => {
  //     hoverPicture = new dm(e.target.id);
  //     changeImages(currentPicture, hoverPicture);
  //   });
  // });

  // picContainer.addEvent('mouseup', (e) => {
  //   picContainer.removeEvent('mouseover');
  // });

  // function changeImages(cp, hp) {
  //   let temp = cp.getStyles().backgroundImage;
  //   cp.setStyle('backgroundImage', hp.getStyles().backgroundImage);
  //   hp.setStyle('backgroundImage', temp)
  //   currentPicture = hoverPicture;
  // };