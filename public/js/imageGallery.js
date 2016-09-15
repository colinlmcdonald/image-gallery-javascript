import $ from './jQuery';

export default class ImageGallery{
  constructor(images) {
    this.imageData = images;
    this.images = this.createImageNodes();
    this.container = this.addImages();
    this.addDragEvents(this.container);
  }

  createImageNodes() {
    return this.imageData.map((image, i) => {
      const newImage = new $('img');
      newImage.node.src = image.url;
      newImage.node.className = 'picture';
      newImage.node.dataset.imageId = i;

      this.addDragEvents(newImage)
      return newImage;
    })
  }

  addImages() {
    const picContainer = new $('pictures-container');
    let row = new $('div');
    row.node.className = 'row';
    this.images.forEach((image, i) => {
      row.addChild(image.node)
      if ((i + 1) % 4 === 0) {
        picContainer.addChild(row.node)
        row = new $('div');
        row.node.className = 'row';
      } 
    })
    return picContainer;
  }

  addDragEvents(picContainer) {
    this.currentPicture;
    this.hoverPicture;

    picContainer.addEvent('mousedown', (e) => {
      this.currentPicture = e.target;
    });
    picContainer.addEvent('dragenter', (e) => {
        e.stopPropagation();
      if (e.target.nodeName === 'IMG') {
        if (this.hoverPicture) {
          this.hoverPicture.style.opacity = 1;
        }
        this.hoverPicture = e.target;
        this.hoverPicture.style.opacity = 0;
        this.changeImages(this.currentPicture, this.hoverPicture);
      }
    });
    picContainer.addEvent('dragend', (e) => {
      e.stopPropagation();
      this.currentPicture.style.opacity = 1;
    })
  }

  changeImages(cp, hp) {
    let temp = cp.src;
    cp.src = hp.src;
    hp.src = temp;
    this.currentPicture = this.hoverPicture;
  }
}
