import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./components/Header";

function CourseDetails() {
  const { courseid } = useParams();

  const [course, setCourse] = useState({});

  useEffect(() => {
    fetch("http://localhost:4000/api/courses/" + courseid)
      .then((res) => res.json())
      .then((data) => setCourse(data))
      .catch(console.error);
  }, [courseid]);

  return (
    <div>
      <Header />
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Course ID</p>
            </div>
            <div className="col-sm-9">
              <p className="text-primary mb-0">{course.courseid}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Course Name</p>
            </div>
            <div className="col-sm-9">
              <p className="text-primary mb-0">{course.coursename}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Semester</p>
            </div>
            <div className="col-sm-9">
              <p className="text-primary mb-0">{course.semester}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Max Enrollment</p>
            </div>
            <div className="col-sm-9">
              <p className="text-primary mb-0">{course.enrollnum}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Course Description</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{course.coursedesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
