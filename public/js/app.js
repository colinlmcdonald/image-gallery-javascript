import $                     from './jQuery';
import ImageGallery           from './imageGallery'
import { jsonPictureArray }   from './data';
import '../styles/styles.scss';

window.onload = (() => {
  const pictures = JSON.parse(jsonPictureArray);
  const gallery = new ImageGallery(pictures)
})();