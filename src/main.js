'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';

import {
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  createGallery,
  clearGallery,
} from './js/render-functions';

console.log('Hello from main.js!');

const searchBtn = document.querySelector('#search-button');
const loadMoreBtn = document.querySelector('#load-more-button');
const searchField = document.querySelector('#search-field');

// =====Search Button Logic
let page = 1;
let query = '';
let loadedNumber = 0;

searchBtn.addEventListener('click', async event => {
  event.preventDefault();
  clearGallery();
  query = searchField.value.trim();
  showLoader();

  try {
    if (query === '') {
      page = 1;
      loadedNumber = 0;
      hideLoadMoreButton();
      iziToast.info({
        message: 'Please enter a search query.',
        position: 'topRight',
      });
      hideLoader();
      return;
    }

    const images = await getImagesByQuery(query, page);

    searchField.value = '';
    iziToast.destroy();
    console.log(images.hits);
    loadedNumber += images.hits.length;
    createGallery(images.hits);

    hideLoader();
    showLoadMoreButton();
  } catch (error) {
    console.dir(error);
  }
});

// =====Load more Button Logic
loadMoreBtn.addEventListener('click', async event => {
  event.preventDefault();
  showLoader();
  page += 1;

  try {
    const images = await getImagesByQuery(query, page);
    console.log(images);
    createGallery(images.hits);
    const card = document.querySelector('.gallery-item');
    const cardHeight = card.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight.height * 2,
      behavior: 'smooth',
    });

    loadedNumber += images.hits.length;
    console.log('завантажено: ', loadedNumber + 'з', images.totalHits);
    hideLoader();
    if (loadedNumber >= images.totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    console.dir(error);
  }
});
