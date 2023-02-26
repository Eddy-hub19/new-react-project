import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {PokemonFormHook} from './PokemonForm/PokemonFormHook';
import PokemonInfo from './PokemonInfo/PokemonInfoHook';

export const PokemonAppHook = () => {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <>
      <PokemonFormHook onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer autoClose={3000} />
    </>
  );
};

