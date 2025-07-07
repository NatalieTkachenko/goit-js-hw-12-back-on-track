import axios from 'axios';

const API_KEY = '30786866-3f5d93462a7f9cfec75d687d6';
const BASE_URL = 'https://pixabay.com/api/';
// const DEFAULT_PARAMS = `?key=${API_KEY}&lang=en&image_type=photo&orientation=horizontal&safesearch=true&order=popular&per_page=12`;

//======реалізація через fetch
// export async function getImagesByQuery(query) {
// try {
//     const response = await fetch (BASE_URL + DEFAULT_PARAMS + `&q=${query}`);

//     console.log(response);

//     if (!response.ok) {
//         throw new Error (response.statusText);
//     }

//     const images = await response.json();
//     return images;
// }
// catch (error) {
//     console.dir(error);
// }
// }

//======реалізація через axios

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
    lang: 'en',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    order: 'popular',
    per_page: 15,
  },
});

export async function getImagesByQuery(query, page) {
  try {
    const response = await instance({ params: { q: query, page: page } });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
