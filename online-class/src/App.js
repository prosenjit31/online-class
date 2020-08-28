import React from 'react';

import './App.css';
import { useState } from 'react';
import fakeData from './fakeData';
import Course from './component/Course/Course';
import Cart from './Cart/Cart';




function App() {
  console.log(fakeData);
  const [courses, setCourses] = useState([]);

  const handleAddBtn = (course) => {
    const newCount = [...courses, course];
    setCourses(newCount)
  }
  console.log(courses);
  return (
    <div className="App">
      <div className="container">

        {
          fakeData.map(course => <Course handleAddBtn={handleAddBtn} course={course}></Course>)
        }
      </div>
      <div className="cart-container">
        <Cart addedCourse={courses}></Cart>
      </div>
    </div>
  );
}

export default App;
