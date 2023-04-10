import React from "react";
import DeleteModal from "./DeleteModal";

function Course({ course, setMsg }) {
  return (
    // <div>
    //   Course: {props.courseid} {props.coursename}
    // </div>
    <div className="card m-5">
      <div className="card-header">{course.courseid}</div>
      <div className="card-body">
        <h5 className="card-title">{course.coursename}</h5>
        <p className="card-text">
          senior software design project course aka capstone
        </p>
        <DeleteModal course={course} setMsg={setMsg} />
      </div>
    </div>
  );
}

export default Course;
