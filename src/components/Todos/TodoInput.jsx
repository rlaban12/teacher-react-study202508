import React, {useState} from 'react';
import { MdAdd } from 'react-icons/md';

import styles from './scss/TodoInput.module.scss';

const TodoInput = () => {

  const {
    'form-wrapper': wrapper,
    'insert-form': insertForm,
    'insert-btn': insertBtn,
    open: openStyle,
  } = styles;

  const [toggle, setToggle] = useState(false);

  return (
    <>
      {toggle && <div className={wrapper}>
        <form className={insertForm}>
          <input
            type="text"
            placeholder="할 일을 입력 후, 엔터를 누르세요!"
          />
        </form>
      </div>}
      <button
        className={`${insertBtn} ${toggle ? openStyle : ''}`}
        onClick={() => setToggle(!toggle)}
      >
        <MdAdd />
      </button>
    </>
  );
};

export default TodoInput;
