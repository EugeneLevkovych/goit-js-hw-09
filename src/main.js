import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  /* опції за бажанням */
  captionsData: 'alt',
  captionPosition: 'bottom',
  animationSpeed: 250,
});
