import React from "react";
import { useParams } from "react-router-dom";
import CMSNav from "./CMSNav";

function CourseDetails() {
  const { courseid } = useParams();
  return (
    <div>
      <CMSNav />
      CourseDetails {courseid}
    </div>
  );
}

export default CourseDetails;
