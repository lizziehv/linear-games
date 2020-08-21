import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../static/styles/style.scss"

import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import Slider from "../../components/Slider";
// import Container from "react-bootstrap/Container";
import { navigate } from "gatsby";
import { grayscales, pacman, ocean } from "../../static/styles/themes";
import { Clock, Volume2, Home } from 'react-feather';

const scrollCutoff = 100;

const LabyrinthSettings = (props) => {
  const [style, setStyle] = useState(grayscales);
  const [timerOn, setTimerOn] = useState(true);
  const [soundOn, setSoundOn] = useState(true);

  const handleScroll = () => {
    if (window.scrollY < scrollCutoff) {
      setStyle(grayscales);
    } else if (window.scrollY < scrollCutoff*5){
      setStyle(ocean);
    } else {
      setStyle(pacman);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const PopUp = () => {
    return(
      <img src={require("../../static/images/pop.png")} alt="" className="pop-up"/>
    );
  }

  const sheetClass = style===pacman ? 'fixed pacman-font' : 'fixed'; // wrapper for pacmant fonts

  return(
    <div className="settings-page">
      <div className={sheetClass} style={style===pacman ? style.background2 : style.background}>
        <div className="home">
          <a href="https://linear-math-games.herokuapp.com/">
            <Home size={60} style={style.icon} />
          </a>
        </div>
        <div className="content-container">
          <h1 style={style.h1}>MATRIX LABYRINTH</h1>
          <div className="settings-div" style={style.settingsDiv}>
            <div className="across setting-box">
              <Clock size={60} style={style.icon} />
              <h2 className="setting-text" style={style.h2}>timer</h2>
              <Slider handleChange={() => setTimerOn((prev) => !prev)} checked={timerOn} style={style}/>
            </div>
            <div className="across setting-box">
              <Volume2 size={60} style={style.icon} />
              <h2 className="setting-text" style={style.h2}>sound</h2>
              <Slider handleChange={() => setSoundOn((prev) => !prev)} checked={soundOn} style={style}/>
            </div>
          </div>
          <Row>
            <Col sm={{span: 3, offset: 3}} xs={{ span: 10, offset: 1 }}>
              <button className="general" style={style.button} onClick={e => {
                e.preventDefault(); 
                navigate("/labyrinth/tutorial/", { state: { style }})
              }}>
                TUTORIAL
              </button>
            </Col>
            <Col sm={{span: 3, offset: 0}} xs={{ span: 10, offset: 1 }}>
              <button className="general" style={style.button} onClick={
                e => {e.preventDefault(); 
                navigate("/labyrinth/game/", { state: { style, timerOn, soundOn }})}}>
                START
              </button>
            </Col>
          </Row>
        </div>
        {style===grayscales && <PopUp />}
      </div>
    </div>
  );
}

export default LabyrinthSettings;
