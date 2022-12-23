import { useState } from 'react';
import { toast } from 'react-toastify';

export const PokemonForm = ({ onSubmit }) => {
  const [pokemonName, setpokemonName] = useState('');

  const handleNameChange = event => {
    setpokemonName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (pokemonName.trim() === '') {
      return toast.error('Ввeдите имя покемона!!!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }

    onSubmit(pokemonName);
    setpokemonName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={handleNameChange}
      />
    </form>
  );
};
