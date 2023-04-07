import React from "react";

function Course(props) {
  return (
    // <div>
    //   Course: {props.courseid} {props.coursename}
    // </div>
    <div className="card m-5">
      <div className="card-header">{props.courseid}</div>
      <div className="card-body">
        <h5 className="card-title">{props.coursename}</h5>
        <p className="card-text">
          senior software design project course aka capstone
        </p>
        <a href="#" className="btn btn-danger">
          Delete
        </a>
      </div>
    </div>
  );
}

export default Course;
