import { useState } from 'react';
import { fetchDogByBreed } from './BreedSelect/api';
import { BreedSelect } from './BreedSelect/BreedSelect';
import { Dog } from './BreedSelect/Dog';

const ERROR_MESSAGE =
  'У нас не получилось взять данные о собачке, попробуйте еще разочек 😇';

export const App = () => {
  const [dog, setDog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const selectBreed = async breedId => {
    try {
      setIsLoading(true);
      setError(null);
      const dog = await fetchDogByBreed(breedId);
      setDog(dog);
    } catch {
      setError(ERROR_MESSAGE);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <BreedSelect onSelect={selectBreed} />

      {dog && !isLoading && <Dog dog={dog} />}

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {isLoading && <div>LOADING...</div>}
    </>
  );
};
