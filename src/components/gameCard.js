import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import React from "react";

import { navigate } from "gatsby";

const GameCard = (props) => (
  <Col lg={6} sm={{ span: 6, offset: 0 }} xs={{ span: 10, offset: 1 }}>
    <button className="card" onClick={e => {
      e.preventDefault();
      navigate(props.game.nextNavigation);
    }}>
      <img src={props.game.img} alt="labyrinth game"/>
      <Card.Body>
        <h3>{props.game.topic}</h3>
        <h2>{props.game.name}</h2>
      </Card.Body>
    </button>
  </Col>
);

export default GameCard;
