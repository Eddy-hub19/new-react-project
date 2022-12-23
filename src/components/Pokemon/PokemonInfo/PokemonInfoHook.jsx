const { useState, useEffect } = require('react');

export const PokemonInfo = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setPokemon(null);

    if (!pokemonName) {
      return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(res => res.json())
      .then(pokemon => setPokemon(pokemon))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [pokemonName]);

  return (
    <div>
      {error && <h1>{`Покемона с таким именем нет ${pokemon.name}`}</h1>}
      {loading && <div>Загружаем..</div>}
      {!pokemonName && <div>Введите имя покемона</div>}
      {pokemon && (
        <div>
          <p>{pokemon.name}</p>
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            width="250"
            alt={pokemon.name}
          />
        </div>
      )}
    </div>
  );
};
