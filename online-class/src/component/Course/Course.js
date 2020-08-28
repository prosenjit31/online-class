import React from 'react';
import './Course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
const Course = (props) => {
    const { courseName, coursePrice } = props.course;
    const handleAddBtn = props.handleAddBtn;
    return (
        <div className="course-container d-flex align-items-center justify-content-center">
            <div>
                <h3> Course Name: {courseName}</h3>
                <h3>Course Price: ${coursePrice}</h3>
                <button className="btn btn-outline-primary" onClick={() => handleAddBtn(props.course)}>Enroll Now  <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> </button>
            </div>

        </div>
    );
};

export default Course;