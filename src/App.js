import { useEffect, useState } from "react";
import "./App.css";
import Course from "./components/Course";

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

  useEffect(() => {
    fetch("http://localhost:4000/api/courses")
      .then((res) => res.json())
      .then((data) => setcourses(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Welcome to CMS!</h1>
      {courses.map((course) => {
        return (
          <Course courseid={course.courseid} coursename={course.coursename} />
        );
      })}
    </div>
  );
}

export default App;
