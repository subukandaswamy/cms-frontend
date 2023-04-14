import React from "react";
import { Card } from "react-bootstrap";
import Header from "./components/Header";
import { Button } from "react-bootstrap";

function About() {
  return (
    <div>
      <Header />
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
