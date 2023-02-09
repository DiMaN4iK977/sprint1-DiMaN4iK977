import React, { useState } from 'react'
import { BookData } from '../../data/bookdata'
import './book-page.css'

export function App({id, image, changeImage, swipe}) {  
    
    
    const [appState, changeState] = useState({
        activeObject: image,
        objects: BookData[id].image
    })

    if(image.url) {
        changeImage(appState.activeObject.url)
    } else {
        changeImage(appState.activeObject)
    }
    
        
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
        return ''
    }

    if(BookData[id].image && BookData[id].image[0] !== '/') {    

    return (
        <div>
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


