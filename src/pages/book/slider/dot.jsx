import React, { useContext } from "react";

export function Dot({ number, slideNumber}) {
  return (
    <div role='button' tabIndex={0} onKeyDown={() => {}} aria-label="Mute volume"
      className={`dot ${slideNumber === number ? "selected" : ""}`}
      // onClick={() => goToSlide(number)}
    />
  );
}