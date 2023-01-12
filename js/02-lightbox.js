import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

let markup = '';

const divElem = document.querySelector('.gallery');

galleryItems.forEach(element => {
    markup += `<a class="gallery__item" href=${element.original}>
  <img class="gallery__image" 
  src=${element.preview} 
  alt=${element.description} />
</a>`   
});

divElem.insertAdjacentHTML('beforeend', markup);


const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});
