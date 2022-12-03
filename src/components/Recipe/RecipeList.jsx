import PropTypes from 'prop-types';
import { Recipe } from './Recipe';

const RecipeList = ({ recipes }) => {
  return (
    <ul>
      {recipes.map(recipe => (
        <li key={recipe.id}>
          <Recipe recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default RecipeList;

// recipes prop []
