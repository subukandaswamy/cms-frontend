import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MessageContext } from "../App";

function DeleteModal({ course, setMsg }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const setMsg1 = useContext(MessageContext);

  function deleteCourse() {
    fetch("http://localhost:4000/api/courses/" + course.courseid, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMsg1(`${course.courseid} deleted succesfully!`);
      })
      .catch(console.error)
      .finally(handleClose);
  }

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Course Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Deletion is irreversilble. Do you want to continue deleting
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
