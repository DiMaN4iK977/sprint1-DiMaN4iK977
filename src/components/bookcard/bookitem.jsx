import React from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import './bookitem.css'
import { MyButton } from './button'
import bookimage from '../../pictures/image (5).png'


export function BookItem({item}) {
    const location = useLocation()
    // const numbers = 
    let value = JSON.stringify(item.images)
    value = JSON.parse(value)
    // value = JSON.parse(value)
    console.log(value);
    return (
    <NavLink to={`${location.pathname}/${item.id}`} className='book-item' data-test-id='card'>
         <div className='wrapper'>
            <div className='book-imageitem'><img src={`http://localhost:5000/${item.images[0]}` ? `http://localhost:5000/${item.images[0]}` : bookimage} alt=''/></div>
            <div className='book-star'>{item.star}</div>
            <div className='book-name'>{item.name}</div>
            <div className='book-author'>{item.author}</div>
            <MyButton />
        </div>
    </NavLink>
    )
} 
