import React from "react";

function Course(props) {
  return (
    // <div>
    //   Course: {props.courseid} {props.coursename}
    // </div>
    <div class="card m-5">
      <div class="card-header">{props.courseid}</div>
      <div class="card-body">
        <h5 class="card-title">{props.coursename}</h5>
        <p class="card-text">
          senior software design project course aka capstone
        </p>
        <a href="#" class="btn btn-danger">
          Delete
        </a>
      </div>
    </div>
  );
}

export default Course;
