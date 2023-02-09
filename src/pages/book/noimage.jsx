import React, { useState } from 'react'
import './book-page.css'

import { BookData } from "../../data/bookdata"

export function NoImage({id, image, changeImage, count, setSwipe}) {  
    
    
    const [appState, changeState] = useState({
        activeObject: image,
        objects: BookData[id].image
    })  
    
     const current = 0
    if(image.url) {
          changeImage(appState.activeObject.url)
     } else {
          changeImage(appState.activeObject)
     }

     

     // function toggleActive(id) {
     //      if(count > id) {
     //           id+=1
     //      } id-=1
     //      changeState({...appState, activeObject: appState.objects[id]})
     //      }    


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
                <div className='boo'> 
               
                    <img src={e.url} alt="img" />
                    <div className={toggleActiveStyles(2)}/>
                </div>
            ))}
        </div>
    )
}

return ''


   
}
