import React, { useState } from 'react';

interface IState {
  todo: string;
  todos: string[];
}

const Todo: React.FC = () => {
  const [state, setState] = useState<IState>({ todo: '', todos: [] });

  const addTodo = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!state.todo) {
      alert('Please enter something');
      return;
    }

    setState((prevState) => ({
      todo: '',
      todos: [...prevState.todos, state.todo],
    }));
  };

  const deleteTodo = (index: number) => {
    setState((prevState) => ({
      ...prevState,
      todos: prevState.todos.filter((_, i) => i !== index),
    }));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        value={state.todo} onChange={(e) => setState((prevState) => ({ ...prevState, todo: e.target.value }))} placeholder="Add Todos..."/>
      <button onClick={(e) => addTodo(e)}>ADD</button>
      <label>
        {state.todos.map((todo, index) => (
          <div key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        ))}
      </label>
    </div>
  );
};

export default Todo;
