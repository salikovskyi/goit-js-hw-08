// Add imports above this line
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line


const GlryEl = document.querySelector(".gallery");



const arr = galleryItems.map(item => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
}).join("");


GlryEl.insertAdjacentHTML("afterbegin", arr)

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });



console.log(galleryItems);
