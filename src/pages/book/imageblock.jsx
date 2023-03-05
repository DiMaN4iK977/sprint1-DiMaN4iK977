import React, { useState, useContext } from 'react'
import './book-page.css'
import { Context } from '../../data/context'
import dummy from '../../pictures/booksImage/dummy.png'
import { Dots } from "./slider/dots";
import './slider/slider.css'
import { Images } from './slider/images';


export function App({value}) {  
    
    // const {Bookdata} = useContext(Context)
    // console.log(document.body.clientWidth);
    const [slide, setSlide] = useState(0);
    // const [touchPosition, setTouchPosition] = useState(null)
    const [activeNumber, setActiveNumber] = useState(0)
    
    // const value = ''
    // if(Bookdata.images !== undefined) {
    //   value = JSON.parse(Bookdata.images)
    // }

    // const changeSlide = (direction = 1) => {
    //     let slideNumber = 0;
    //     if (slide + direction < 0) {
    //     slideNumber = items.length - 1;
    //     } else {
    //     slideNumber = (slide + direction) % items.length;
    //     }
    //     setActiveNumber(slideNumber)
    //     setSlide(slideNumber);
    // };

    const goToSlide = (number) => {
        setActiveNumber(number)
        setSlide(number % value.length);
      };

    // function toggleActive(id) {
    //     changeState({...appState, activeObject: appState.objects[id]})
    // }

    // function toggleActiveStyles(id) {
    //     if(appState.objects[id] === appState.activeObject) {
    //         return "images active";
    //     } 
    //     return "images";
    // }
    if(value.length > 1) {
    return (
        <div
      className="slider-big"
    >
        {/* <SlidesList /> */}
        <div className='slide-big' style={{ transform: `translateX(-${slide * 100}%)` }}>
            {value.map((slide) => (
                // <Slide key={index} data={slide} />
                <div className="slide" key={slide}>
                    <img  className="slide-image" src={`http://localhost:5000/${slide}`} alt=''/>
               </div>
            ))}
        </div>
        <div className={value.length > 5 ? 'images-scroll' : 'images'}>
            <Images items={value} slideNumber={activeNumber}  slidesCount={value.length} goToSlide={goToSlide} />
        </div>
    </div>
  );
            } return (  
                <div className="slider-big">
                  <div className="slide-big">
                    <div className="slide" >
                      <img  className="slide-image" src={value[0] === dummy ? dummy : `http://localhost:5000/${value}`} alt=''/>
                    </div>
                  </div>
                </div>
                
              )
}




   
   
  


