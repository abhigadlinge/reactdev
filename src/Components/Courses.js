import React, { useState, useEffect } from 'react';
import CoursesApi from "./CourseApi";
import { Cards } from './Card';
import "./Courses.css"


export const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [visibleCourses, setVisibleCourses] = useState(4);
  const [loading, setLoading] = useState(true);

  const showmoreHandler = () =>{
    setVisibleCourses((prevValue) => prevValue+5)
  }

  const showlessHandler = () =>{
    setVisibleCourses((prevValue) => prevValue-5)
  }




  return (
    <div>
      <h2 className='courses'>Our Courses</h2>

      <div className='coursecontent'>
      
      {CoursesApi.slice(0, visibleCourses).map((item) => {
                return (
                    <Cards
                      key={item.id}
                      name={item.name}
                      duration={item.duration}
                      fees={item.fees}
                    />
                );
              })}
      </div>

      <div className='coursebtn'>
      <button onClick={showmoreHandler} className='showmore'>
                show more
      </button>
      <button onClick={showlessHandler} className='showless'>
                show less
      </button>
      </div>

     
    </div>
  );
};

