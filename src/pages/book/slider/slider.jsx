
import React, { useEffect, useState, createContext, useMemo, useContext } from "react";
// import PropTypes from "prop-types";
// import { getImages } from "../../../imagesApi";
import './slider.css'
import { Context } from "../../../data/context";
// import { BookData } from "../../../data/bookdata";
import { Dots } from "./dots";
import dummy from '../../../pictures/booksImage/dummy.png'
// export const SliderContext = createContext();

export function Slider({items}) {
  // const BookData = []
  // const BookData = useContext(Context)
  // const {items} = useContext(Context)
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null)
  
  const [activeNumber, setActiveNumber] = useState(0)

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;
    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }
    setActiveNumber(slideNumber)
    setSlide(slideNumber);
  };


  const goToSlide = (number) => {
    setSlide(number % items.length);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  }

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  }
  if(items.length > 1) {
    
  return (
    <div
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
        {/* <SlidesList /> */}
        <div className="slide-list" style={{ transform: `translateX(-${slide * 100}%)` }}>
            {items.map((slide) => (
                // <Slide key={index} data={slide} />
                <div className="slide" key={slide}>
                    <img  className="slide-image" src={`http://localhost:5000/${slide}`} alt=''/>                
               </div>
            ))}
        </div>
          <Dots slideNumber={activeNumber}  slidesCount={items.length}/>
    </div>
  );
            } return (  
              <div className="slider">
                <div className="slide-list">
                  <div className="slide" >
                    <img  className="slide-image" src={items[0] === dummy ? dummy : `http://localhost:5000/${items}`} alt=''/>
                  </div>
                </div>
              </div>
              
            )
};