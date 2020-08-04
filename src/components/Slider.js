import React from "react";
import Switch from "react-switch";

const Slider = ({ handleChange, checked, style }) => {
  return(
    <Switch
      checked={checked}
      onChange={handleChange}
      handleDiameter={28}
      offColor={style.sliderOff}
      onColor={style.sliderOn}
      height={40}
      width={70}
      className="react-switch"
    />
  );
}

export default Slider;