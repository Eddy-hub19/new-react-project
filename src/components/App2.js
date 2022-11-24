import { RecipeList } from './Recipe/RecipeList';
import recipes from './recipes.json';

function App() {
  return (
    <>
      <RecipeList recipes={recipes} />
    </>
  );
}

export default App;
