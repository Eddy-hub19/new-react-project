import { Component } from 'react';

export default class PookemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      console.log('Изменилось имя покемона');
      console.log('prevProps.pokemonName', prevProps.pokemonName);
      console.log('this.props.pokemonName', this.props.pokemonName);

      this.setState({ loading: true, pokemon: null });

      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(res => res.json())
        .then(pokemon => this.setState({ pokemon }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { loading, pokemon, error } = this.state;
    const { pokemonName } = this.props;
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
  }
}
