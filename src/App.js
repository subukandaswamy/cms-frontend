import { useEffect, useState } from "react";
import "./App.css";
import Course from "./components/Course";
import CourseForm from "./components/CourseForm";
import Message from "./components/Message";

function App() {
  const coursesVal = [
    {
      courseid: "CPTS421",
      coursename: "Capstone",
    },
    {
      courseid: "CPTS489",
      coursename: "Web Development",
    },
  ];

  const [courses, setcourses] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/courses")
      .then((res) => res.json())
      .then((data) => setcourses(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1 className="App-header">Course Management System</h1>
      <CourseForm setcourses={setcourses} setMsg={setMsg} />

      {msg.length > 0 && <Message msg={msg} />}
      {courses.map((course) => {
        return (
          <Course courseid={course.courseid} coursename={course.coursename} />
        );
      })}
    </div>
  );
}

export default App;
