import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonForm from './PokemonForm/PokemonForm';
import PookemonInfo from './PokemonInfo/PokemonInfo';

export default class PokemonApp extends Component {
  state = {
    pokemonName: '',
  };
  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    const { pokemonName } = this.state;
    return (
      <>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PookemonInfo pokemonName={pokemonName} />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
