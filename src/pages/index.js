import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/styles/style.scss"
import { Link } from "gatsby";

import Container from "react-bootstrap/Container";
import GameCard from "../components/gameCard";
import Row from "react-bootstrap/Row";

const gameInfo = {
  labyrinth: {
    name: "MATRIX LABYRINTH",
    topic: "matrix multiplication",
    img: require('../static/images/image.png'),
    nextNavigation: "/labyrinth/settings/"
  },
  tetris: {
    name: "TETRIS",
    topic: "row addition",
    img: require('../static/images/image.png'),
    nextNavigation: "/page-2/"
  },
  sweep: {
    name: "SWEEP THE BOARD",
    topic: "row reduction",
    img: require('../static/images/image.png'),
    nextNavigation: "/page-2/"
  }
};

const IndexPage = () => (
  <div>
    <h1>LINEAR GAMES</h1>
    <Container>
      <Row>
        <GameCard game={gameInfo.labyrinth}/>
        <GameCard game={gameInfo.tetris}/>
      </Row>
      <Row>
        <GameCard game={gameInfo.sweep}/>
      </Row>
    </Container>
    <Link to='/page-2/'>To second page</Link>
  </div>
);

export default IndexPage;
