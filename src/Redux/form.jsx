
import React from 'react';
import { toggletodo } from './action';

const form = ({ todo, toggleTodo }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggletodo(todo.id)}
      />
      <span>{todo.id}</span>
    </div>
  );
};

export default form;
