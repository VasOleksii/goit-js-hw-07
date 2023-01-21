
import { galleryItems } from './gallery-items.js';


const pictureContainer = document.querySelector('.gallery');
const pictureMarkup = createPicturesCardMarkup (galleryItems);
let instance;

pictureContainer.insertAdjacentHTML('beforeend', pictureMarkup)
pictureContainer.addEventListener('click', showPictureOnModal)

function createPicturesCardMarkup (pictures) {
    return pictures.map(({preview, original, description}) => 
    
    `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
)
.join('');
}

function showPictureOnModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
      return;
    }
    instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
    instance.show();
    window.addEventListener('keydown', closePictureOnModal);
}
  
function closePictureOnModal(event) {
    if (event.code === 'Escape') {
        instance.close();
        window.removeEventListener('keydown', closePictureOnModal);
    }
}