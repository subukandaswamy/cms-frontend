import { useEffect, useState, createContext } from "react";
import "./App.css";
import CMSNav from "./components/CMSNav";
import Course from "./components/Course";
import CourseForm from "./components/CourseForm";
import Message from "./components/Message";

export const MessageContext = createContext();

function App() {
  const [courses, setcourses] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/courses")
      .then((res) => res.json())
      .then((data) => setcourses(data))
      .catch(console.error);
  }, [msg]);

  return (
    <MessageContext.Provider value={setMsg}>
      <div>
        <h1 className="App-header">Course Management System</h1>
        <CMSNav />
        <CourseForm setcourses={setcourses} setMsg={setMsg} />
        {msg.length > 0 && <Message msg={msg} setMsg={setMsg} />}
        {courses.map((course) => {
          return <Course course={course} setMsg={setMsg} />;
        })}
      </div>
    </MessageContext.Provider>
  );
}

export default App;
