import React, { useState } from "react";

function CourseForm({ setcourses, setMsg }) {
  const [courseid, setCourseid] = useState("");
  const [coursename, setCoursename] = useState("");
  const [coursedesc, setCoursedesc] = useState("");
  const [semester, setSemester] = useState("Spring");
  const [enrollnum, setEnrollnum] = useState(50);

  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  function createCourse(e) {
    console.log("here");
    postData("http://localhost:4000/api/courses", {
      courseid,
      coursename,
      semester,
      coursedesc,
      enrollnum,
    })
      .then((course) => {
        console.log(course);
        setcourses((prevCourses) => [...prevCourses, course]);
        setMsg(`course ${course.courseid} created succesfully`);
      })
      .catch(console.error);
    e.preventDefault();
  }

  return (
    <form method="post" action="/courses/create" onSubmit={createCourse}>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Course ID</label>
        <input
          required
          name="courseid"
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="CPTS_123"
          onChange={(e) => {
            setCourseid(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Course Name</label>
        <input
          required
          name="coursename"
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Artificial Intelligence"
          onChange={(e) => {
            setCoursename(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Semester</label>
        <select
          name="semester"
          className="form-control"
          id="exampleFormControlSelect1"
          value={semester}
          onChange={(e) => {
            setSemester(e.target.value);
          }}
        >
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Course Description</label>
        <textarea
          name="coursedesc"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={(e) => {
            setCoursedesc(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="form-group">
        <input
          type="number"
          id="enrollment-limit"
          name="enrollnum"
          min="50"
          max="100"
          value={enrollnum}
          step="10"
          onChange={(e) => {
            setEnrollnum(e.target.value);
          }}
        />
        <label htmlFor="volume">Enrollment Limit</label>
      </div>
      <div className="form-group">
        <input type="submit" value="Add Course" className="btn btn-primary" />
      </div>
      <div>
        <p>{courseid}</p>
        <p>{coursename}</p>
        <p>{coursedesc}</p>
        <p>{semester}</p>
        <p>{enrollnum}</p>
      </div>
    </form>
  );
}

export default CourseForm;
