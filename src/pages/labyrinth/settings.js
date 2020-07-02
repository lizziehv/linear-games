import React from "react";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";

const LabyrinthSettings = () => (
  <div>
    <h1>MATRIX LABYRINTH</h1>
    <Row>
      <Col sm={{span: 3, offset: 2}} xs={{ span: 10, offset: 1 }}>
        <Button variant="primary" size='lg'>Tutorial</Button>
      </Col>
      <Col sm={{span: 3, offset: 2}} xs={{ span: 10, offset: 1 }}>
        <Button variant="primary" size='lg' href="/labyrinth/game/">Start</Button>
      </Col>
    </Row>
  </div>
);

export default LabyrinthSettings;
