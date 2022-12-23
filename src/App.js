// import ColorPicker from 'components/ColorPicker';
import { PokemonAppHook } from 'components/Pokemon/PokemonHook';
import { Component } from 'react';
// import SearchPic from 'components/SearchPic/SearchPic';
// import './components/SearchPic/styles.css';
// import Section from './components/Section';
// import Dropdown from 'components/Dropdown';

// import PaintingList from 'components/Painting/PaintingList';
// import { painting } from './index';

// import RecipeList from 'components/Recipe/RecipeList';
// import recipes from './components/Recipe/recipes.json';
// import Counter from 'components/Counter';

// const options = [
//   { color: '#4CAF50', label: 'green' },
//   { color: '#2196F3', label: 'blue' },
//   { color: '#607D8B', label: 'grey' },
//   { color: '#E91E63', label: 'pink' },
//   { color: '#3F5185', label: 'indigo' },
// ];

/* <Dropdown /> */
/* <Section title="Топ недели"><PaintingList items={painting} /></Section>  */
/* <RecipeList recipes={recipes} /> */
/* <Counter initialValue={10} /> */

//  ColorPicker //
/* <ColorPicker options={options} /> */

// import { Reader } from 'components/Reader/Reader';
// import publication from './components/Reader/publication.json';
/* <Reader items={publication} /> */

export default class App extends Component {
  render() {
    return (
      <>
        <PokemonAppHook />
      </>
    );
  }
}
