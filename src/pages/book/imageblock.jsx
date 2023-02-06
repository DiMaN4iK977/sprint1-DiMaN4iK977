import React, { useState } from 'react'
import { BookData } from '../../data/bookdata'
import './book-page.css'

// export const ImageBlock = ({id}) => {

    export function App(id) {  
    
    const [appState, changeState] = useState({
        activeObject: BookData[id].image,
        objects: BookData[id].image
    })

    // console.log(appState.activeObject);
        
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
                    <img src={e.bookimage} alt="img" />
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


