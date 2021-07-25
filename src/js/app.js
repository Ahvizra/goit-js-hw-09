export const galleryRef = document.querySelector('.gallery')
const lightbox = document.querySelector('.lightbox')
const closeButtom = document.querySelector('.lightbox__button')
const lightboxImage = document.querySelector('.lightbox__image')
const overlay = document.querySelector('.lightbox__overlay')


galleryRef.addEventListener('click', openLightBox)
closeButtom.addEventListener('click', closeLightBox)
overlay.addEventListener('click', closeLightBox)


function openLightBox(event) {
  if (!event.target.dataset.source) {
    return
  }
  event.preventDefault();
  lightboxImage.src = event.target.dataset.source
  lightbox.classList.add('is-open')
    document.addEventListener('keydown',closeOnEsc)
}

function closeLightBox(event) {
  lightboxImage.src = "";
  lightbox.classList.remove('is-open')
    document.removeEventListener('keydown',closeOnEsc)
  
}

function closeOnEsc(event) {
  if (event.code === 'Escape' && lightbox.classList.contains('is-open')) {
    closeLightBox()
  }
}