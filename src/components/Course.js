import React from "react";

function Course({ course, setMsg }) {
  function deleteCourse() {
    console.log("delete called" + course.courseid);
    fetch("http://localhost:4000/api/courses/" + course.courseid, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMsg(() => `Course ${course.courseid} deleted succesfully`);
      })
      .catch(console.error);
  }
  return (
    <div className="card m-5">
      <div className="card-header">{course.courseid}</div>
      <div className="card-body">
        <h5 className="card-title">{course.coursename}</h5>
        <p className="card-text">{course.coursedesc}</p>
        <button type="button" className="btn btn-danger" onClick={deleteCourse}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Course;
