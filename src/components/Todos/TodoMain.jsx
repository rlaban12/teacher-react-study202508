import React from 'react';

import styles from './scss/TodoMain.module.scss';
import TodoItem from './TodoItem';
import {TODOS} from './dummy-data/DUMMY_TODOS.js';

const TodoMain = () => {
  return (
    <ul className={styles['todo-list']}>
      {TODOS.map(todo => <TodoItem key={todo.id} item={todo} />)}
    </ul>
  );
};

export default TodoMain;
