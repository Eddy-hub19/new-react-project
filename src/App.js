// import Section from './components/Section';
// import Dropdown from 'components/Dropdown';

import TodoList from 'components/TodoList';
import { Component } from 'react';

// import PaintingList from 'components/Painting/PaintingList';
// import { painting } from './index';

// import RecipeList from 'components/Recipe/RecipeList';
// import recipes from './components/Recipe/recipes.json';
// import Counter from 'components/Counter';
// import ColorPicker from 'components/ColorPicker';

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
/* <ColorPicker options={options} /> */

export default class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Выучить основы реакт', completed: true },
      { id: 'id-2', text: 'Разобраться с React Router', completed: false },
      { id: 'id-3', text: 'Пережить Redux', completed: true },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length
    const completedTodos = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    // console.log(completedTodos.length);
    return (
      <>
        <h1>Состояние компонента</h1>
        <div className="todo">
          <p>Общее количество todo: {totalTodoCount}</p>
          <p>Количество выполненых todo: {completedTodos}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}
