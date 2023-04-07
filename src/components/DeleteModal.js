import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteModal({ course, setMsg }) {
  const [show, setShow] = useState(false);

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
      .catch(console.error)
      .finally(handleClose);
  }

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Course Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This operation can not be reversed. Do you sure want to delete course{" "}
          {course.courseid}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteCourse}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
