import { galleryItems } from './gallery-items.js';
// Change code below this line

const pictureContainer = document.querySelector('.gallery');
const pictureMarkup = createPicturesCardMarkup (galleryItems);
let instance;

pictureContainer.insertAdjacentHTML('beforeend', pictureMarkup)
//pictureContainer.addEventListener('click', showPictureOnModal)


function createPicturesCardMarkup (pictures) {
    return pictures.map(({preview, original, description}) => 
    
    `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>`
)
.join('');
};

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt'
 });


