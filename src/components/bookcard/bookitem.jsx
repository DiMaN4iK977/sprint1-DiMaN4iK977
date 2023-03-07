import React from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import './bookitem.css'
import { MyButton } from './button'
import dummy from '../../pictures/booksImage/dummy.png'
import { getImages } from '../../pages/book'

export function BookItem({item}) {
    const location = useLocation()  
    
    return (
    <NavLink to={`${location.pathname}/${item.id}`} className='book-item' data-test-id='card'>
         <div className='wrapper'>
            {/* <div className='book-imageitem'><img src={`http://localhost:5000/${getImages(item)[0]}`} alt=''/></div> */}
            <div className='book-star'>{item.rate}</div>
            <div className='book-name'>{item.name}</div>
            <div className='book-author'>{item.author}</div>
            <MyButton />
        </div>
    </NavLink>
    )
} 
