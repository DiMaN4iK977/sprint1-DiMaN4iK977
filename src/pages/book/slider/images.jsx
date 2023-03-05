
import React, { useContext } from "react";

export function Images({slideNumber, slidesCount, goToSlide, items}) {
    return (
    items.map((item, index) => (
        <div role='button' key={item} tabIndex={0} onKeyDown={() => {}} aria-label="Mute volume"
            className={`one-image ${slideNumber === index ? "selected" : ""}`}
            onClick={() => goToSlide(index)}
        ><img src={`http://localhost:5000/${item}`} alt=''/></div>   
    ))
    // return images;

    );
}
