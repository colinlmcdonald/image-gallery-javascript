import dm from './domManipulation';
import '../styles/styles.scss';

window.onload = (() => {
  const pictures = new dm('pictures-container');

  let currentPicture, hoverPicture;

  pictures.addEvent('mousedown', (e) => {
    currentPicture = new dm(e.target.id);
    pictures.addEvent('mouseover', (e) => {
      hoverPicture = new dm(e.target.id);
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