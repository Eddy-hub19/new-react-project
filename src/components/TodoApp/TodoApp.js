// import Section from './components/Section';
// import Dropdown from 'components/Dropdown';

import TodoList from 'components/TodoList';

import { Component } from 'react';

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

    const totalTodoCount = todos.length;
    const completedTodos = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

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
