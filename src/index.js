import ReactDOM from 'react-dom';
// import App from 'App';
import App2 from 'components/App2';

export const painting = [
  {
    id: 'id-1',
    url: 'http://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg',
    title: 'Feathers. Art abstract',
    price: 500,
    author: {
      tag: 'ractapopulous',
      url: 'https://pixabay.com/users/ractapopulous-24766/',
    },
    quantity: 10,
  },
  {
    id: 'id-2',
    url: 'http://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_1280.jpg',
    title: 'Bird. Animal art abstract',
    price: 400,
    author: {
      tag: 'ractapopulous',
      url: 'https://pixabay.com/users/ractapopulous-24766/',
    },
    quantity: 15,
  },
  {
    id: 'id-3',
    url: 'http://cdn.pixabay.com/photo/2017/09/04/22/40/flowers-2715804_1280.jpg',
    title: 'Flowers. Tulip nature art abstract',
    price: 600,
    author: {
      tag: 'ractapopulous',
      url: 'https://pixabay.com/users/ractapopulous-24766/',
    },
    quantity: 5,
  },
];

// ReactDOM.render(<App />, document.querySelector('#root'));
ReactDOM.render(<App2 />, document.querySelector('#root'));
