import React, { useContext } from "react";

export function Dot({ number, slideNumber }) {

  return (
    <div
      className={`dot ${slideNumber === number ? "selected" : ""}`}
      // onClick={() => goToSlide(number)}
    />
  );
}