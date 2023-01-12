import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

let markup = '';

const divElem = document.querySelector('.gallery');
divElem.addEventListener('click', onClick);



function onClick(e) {

    const instance = basicLightbox.create(`
    <img src=${e.target.dataset.source} width="800" height="600">
`)
    instance.show()
    e.preventDefault()
};


galleryItems.forEach(element => {
    markup += `<div class="gallery__item">
  <a class="gallery__link" href=${element.original}>
    <img
      class="gallery__image"
      src=${element.preview}
      data-source=${element.original}
      alt=${element.description}
    />
  </a>
</div>`
  
});

divElem.insertAdjacentHTML('beforeend', markup);



