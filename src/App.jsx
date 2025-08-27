import React, {useState} from 'react';
import CourseList from './components/CourseGoals/CourseList.jsx';
import CourseInput from './components/CourseGoals/CourseInput.jsx';
import './App.css';

const App = () => {

  // 목표데이터들의 묶음배열
  const [goals, setGoals] = useState([
    {
      id: 'g1',
      text: '테스트 데이터1',
    },
    {
      id: 'g2',
      text: '테스트 데이터2',
    },
  ]);

  // 데이터 끌어올리기용 함수
  const onAddGoal = (text) => {
    const newGoal = {
      id: Math.random().toString(),
      text: text
    };
    setGoals(prev => [...prev, newGoal]);
  };

  return (
    <div>
      <section id='goal-form'>
        <CourseInput onAdd={onAddGoal} />
      </section>
      <section id='goals'>
        <CourseList items={goals} />
      </section>
    </div>
  );
};

export default App;
