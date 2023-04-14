import React from "react";
import DeleteModal from "./DeleteModal";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";

function Course({ course, setMsg }) {
  return (
    // <div>
    //   Course: {props.courseid} {props.coursename}
    // </div>
    <div className="card m-5">
      <div className="card-header">{course.courseid}</div>
      <div className="card-body">
        <h5 className="card-title">{course.coursename}</h5>
        <p className="card-text">{course.coursedesc}</p>
        <DeleteModal course={course} setMsg={setMsg} />
        <LinkContainer to={`/courses/${course.courseid}`}>
          <Button className="m-3" variant="primary">
            Details
          </Button>
        </LinkContainer>
      </div>
    </div>
  );
}

export default Course;
