import React from "react";
import CMSNav from "./components/CMSNav";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

function About() {
  return (
    <div>
      <h1 className="App-header">Course Management System</h1>
      <CMSNav />
      <Card style={{ width: "30rem", margin: "auto" }}>
        <Card.Img variant="top" src="logo.png" />
        <Card.Body>
          <Card.Title>CPTS 489 Web Development</Card.Title>
          <Card.Text>
            Learn the fundamentals of a web application: web servers, protocols,
            browser internals, database integration and other concepts necessary
            to fully understand the inner workings of a dynamic web application
          </Card.Text>
          <Button
            href="https://school.eecs.wsu.edu/"
            target="_blank"
            variant="primary"
          >
            Go to WSU EECS to learn more
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
