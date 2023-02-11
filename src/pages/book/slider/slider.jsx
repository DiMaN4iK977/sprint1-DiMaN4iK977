
import React, { useEffect, useState, createContext, useMemo } from "react";
// import PropTypes from "prop-types";
// import { getImages } from "../../../imagesApi";
import './slider.css'

import { BookData } from "../../../data/bookdata";
import { Dots } from "./dots";
// export const SliderContext = createContext();

export function Slider({ id }) {
  const [items, setItems] = useState(BookData[id].image);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null)


  // console.log(items);
  // useEffect(() => {
  //   const loadData = async () => {
  //     const images = await getImages();
  //     setItems(images);
  //   };
  //   loadData();
  // }, []);
    
  // useEffect((id) => {
  // }, [])
  // console.log(BookData[id].image);
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
                <div className="slide" key={slide.id}>
                    <img  className="slide-image" src={slide.url} alt=''/>
                   
                
               </div>
            ))}
        </div>
          <Dots slideNumber={activeNumber}  slidesCount={items.length}/>
    </div>
  );
};