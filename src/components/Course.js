import React from "react";

function Course({ course }) {
  return (
    <div className="card m-5">
      <div className="card-header">{course.courseid}</div>
      <div className="card-body">
        <h5 className="card-title">{course.coursename}</h5>
        <p className="card-text">{course.coursedesc}</p>
        <a href="#" className="btn btn-danger">
          Delete
        </a>
      </div>
    </div>
  );
}

export default Course;
