import { fetchData } from "./js/pixabay-api.js";
import { renderCard } from "./js/render-functions.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
  form: document.querySelector(".form_for_image"),
  inp: document.querySelector(".input"),
  button: document.querySelector(".button"),
  list: document.querySelector(".gallery"),
  loader:document.querySelector(".loader")
};
refs.loader.style.display="none";
const myApiKey = "44825095-5da981a8d37f63705e36ec7d1";

refs.form.addEventListener("submit", handler);

function handler(event) {
  event.preventDefault();
  if (refs.inp.value === "") {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query!'
    });
  } else {
    let inputValue = refs.inp.value.toLowerCase();
    showLoader();
    fetchData(myApiKey, inputValue)
      .then(data => {
        hideLoader();
        if (data.hits.length === 0) {
          iziToast.error({
            title: '',
            message: 'Sorry, there are no images matching your search query. Please try again!'
          });
        } else {
          const arr = data.hits.map(item => ({
            webformatURL: item.webformatURL,
            largeImageURL: item.largeImageURL,
            tags: item.tags,
            likes: item.likes,
            views: item.views,
            comments: item.comments,
            downloads: item.downloads
          }));
          const markup = renderCard(arr);
          refs.list.innerHTML = markup;
          let gallery = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
          });
          gallery.refresh();
        }
      })
      .catch(error => {
        hideLoader();
        onFetchError(error);
      })
      .finally(() => refs.form.reset());
  }
}

function onFetchError(error) {
  console.error('Error fetching data:', error);
}

function showLoader() {
  refs.loader.style.display = "block";
}

function hideLoader() {
  refs.loader.style.display = "none";
}
