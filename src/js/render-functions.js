import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//=====gallery

export function createGallery(images) {
  const galleryList = document.querySelector('.gallery');
  let galleryMarkup = '';
  galleryMarkup = images
    .map(
      ({
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
        largeImageURL,
      }) => {
        return `
        <li class="gallery-item">
        
        <a href="${largeImageURL}"  >
       
        <img src="${webformatURL}" alt="${tags}" title="${tags}"/>
        </a>

       

        <div class="item-info">
        <div class="info-item">
                    <b>Likes</b>
                    ${likes}
                </div>
                <div class="info-item">
                    <b>Views</b>
                    ${views}
                </div>
                <div class="info-item">
                    <b>Comments</b>
                    ${comments}
                </div>
                <div class="info-item">
                    <b>Downloads</b>
                    ${downloads}
                </div>
        
        </div>
       </li>
        `;
      }
    )
    .join('');
  galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    spinner: true,
  });
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}

//=====Loader

export function showLoader(el) {
  document.querySelector('.loader-box').style.display = 'flex';
}

export function hideLoader(el) {
  document.querySelector('.loader-box').style.display = 'none';
}

//=====Load more button

export function showLoadMoreButton() {
  document.querySelector('#load-more-button').style.display = 'flex';
}

export function hideLoadMoreButton() {
  document.querySelector('#load-more-button').style.display = 'none';
}
