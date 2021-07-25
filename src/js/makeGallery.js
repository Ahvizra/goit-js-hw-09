import gallery from "./galleryImg";

import { galleryRef } from "./app"

const makeGaleryMarkup = (img) => {
  const { preview, original, description } = img;
  return `<li class="gallery__item">
<a class="gallery__link" /* href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
</a>
</li>`;
}
const makeGalery = gallery.map(makeGaleryMarkup).join('')

galleryRef.insertAdjacentHTML('afterbegin', makeGalery)