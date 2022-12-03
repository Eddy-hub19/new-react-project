import PropTypes from 'prop-types';
export const Recipe = ({ recipe: { name, time, servings, calories } }) => {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <li>{time} mins</li>
        <li>{servings} servings</li>
        <li>{calories} calories</li>
        <div>
          <h3>Difficulty</h3>
          <div>
            <span>Easy</span>
            <span>Medium</span>
            <span>Hard</span>
          </div>
        </div>
      </ul>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }).isRequired,
};

// recipe props - {}
