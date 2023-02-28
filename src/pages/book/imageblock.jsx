import React, { useState } from 'react'
// import { BookData } from '../../data/bookdata'
import './book-page.css'
import bookimage from '../../pictures/image (5).png'


export function App({id, img, changeImage, swipe}) {  
    
    
    const BookData = []
    

    // if(image.url) {
    //     changeImage(appState.activeObject.url)
    // } else {
    //     changeImage(appState.activeObject)
    // }
    const [appState, changeState] = useState({
        activeObject: img,
        objects: BookData[id].image
    })

    function toggleActive(id) {
        changeState({...appState, activeObject: appState.objects[id]})
    }

    function toggleActiveStyles(id) {
        if(appState.objects[id] === appState.activeObject) {
            return "images active";
        } 
        return "images";
    }

    if(BookData[id].image === undefined) {
        return <img src={bookimage} alt="img" />
    }

    if(BookData[id].image && BookData[id].image[0] === '/') {
        return <img src={img} alt="img" />
    }
 
    if(BookData[id].image && BookData[id].image[0] !== '/') {    

    return (
        <div>
        <img className="test" src={appState.activeObject.url} alt=''/>
        <div className='image-click'>
            {appState.objects.map(e => (
                <div key={e.id} role='button' tabIndex={0} onKeyDown={() => {}}
                className={toggleActiveStyles(e.id-1)}
                onClick={() => {
                    toggleActive(e.id-1)
                }}
                >
                    <img src={e.url} alt="img" />
                    {/* <div className={toggleActiveStyles(e.id-1)}/> */}
                </div>
            ))}
        </div>
        </div>
    )
}

return ''


   
}
// const [active, setActive] = useState(false)  

// if(BookData[id].image === undefined) {
//     return ''
// }   
  
// if(BookData[id].image[0] !== '/') {
    

    // return ( 
        // BookData[id].image.map(item => (
        //     <div key={item.id} className='images' role='button' tabIndex={0}><img  src={item.bookimage} alt='img'/></div>
        // ) 
        // )
        
    // ) 
// } return ''


