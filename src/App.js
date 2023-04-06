import { useEffect, useState } from "react";
import "./App.css";
import Course from "./components/Course";
import CourseForm from "./components/CourseForm";

function App() {
  const [courses, setcourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/courses")
      .then((res) => res.json())
      .then((data) => setcourses(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Welcome to CMS</h1>
      <CourseForm setcourses={setcourses} />
      {courses.map((course) => {
        return <Course course={course} />;
      })}
    </div>
  );
}

export default App;
