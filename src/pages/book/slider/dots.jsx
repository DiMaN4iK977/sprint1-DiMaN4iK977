
import React, { useContext } from "react";
import {Dot} from "./dot";

export function Dots({slideNumber, slidesCount, goToSlide}) {
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot key={`dot-${i}`} goToSlide={goToSlide} slideNumber={slideNumber} number={i} />);
    }

    return dots;
  };

  return <div className="dots">{renderDots()}</div>;
}