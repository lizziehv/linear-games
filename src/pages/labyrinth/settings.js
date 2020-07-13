import React from "react";
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import { navigate } from "gatsby";

const LabyrinthSettings = () => (
  <div>
    <h1>MATRIX LABYRINTH</h1>
    <Row>
      <Col sm={{span: 3, offset: 3}} xs={{ span: 10, offset: 1 }}>
        <div className="down">
          <button>
            <div className="triangle-up" />
          </button>
          <button>
            <div className="triangle-down" />
          </button>
        </div>
      </Col>
    </Row>
    <Row className="padded">
      <Col sm={{span: 3, offset: 3}} xs={{ span: 10, offset: 1 }}>
        <button className="general">TUTORIAL</button>
      </Col>
      <Col sm={{span: 3, offset: 0}} xs={{ span: 10, offset: 1 }}>
        <button className="general" onClick={
          e => {e.preventDefault(); 
          navigate("/labyrinth/game/")}}>
          START
        </button>
      </Col>
    </Row>
  </div>
);

export default LabyrinthSettings;
