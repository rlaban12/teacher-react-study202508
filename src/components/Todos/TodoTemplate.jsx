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

  const removeTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const checkTodo = id => {
    // id로 done의 값을 변경할 객체를 탐색한 후 논리값 반전
    setTodos(prevTodos => prevTodos.map(todo =>
      todo.id === id
        ? { ...todo, done: !todo.done }
        : todo
    ));

    // const copyTodos = [...todos];
    // const targetTodo = copyTodos.find(todo => todo.id === id);
    //
    // targetTodo.done = !targetTodo.done;
    //
    // setTodos(copyTodos);
  };

  return (
    <div className={styles.TodoTemplate}>
      <TodoHeader />
      <TodoMain items={todos} onDelete={removeTodo} onCheck={checkTodo} />
      <TodoInput onAdd={addTodo} />
    </div>
  );
};

export default TodoTemplate;
