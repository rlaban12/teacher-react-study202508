import React, {useState} from 'react';
import TodoHeader from './TodoHeader';
import styles from './scss/TodoTemplate.module.scss';
import TodoMain from './TodoMain';
import TodoInput from './TodoInput';
import {TODOS} from './dummy-data/DUMMY_TODOS.js';

const TodoTemplate = () => {

  const [todos, setTodos] = useState(TODOS);

  const addTodo = (title) => {
    const newTodo = {id: Math.random().toString(), title, done: false};
    setTodos(prev => [...prev, newTodo]);
  };

  return (
    <div className={styles.TodoTemplate}>
      <TodoHeader />
      <TodoMain items={todos} />
      <TodoInput onAdd={addTodo} />
    </div>
  );
};

export default TodoTemplate;
