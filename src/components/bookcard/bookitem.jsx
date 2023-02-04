import React from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import './bookitem.css'
import { MyButton } from './button'

export function BookItem({item}) {
    const location = useLocation()
    console.log(location);
   
    return (
    <NavLink to={`${location.pathname}/${item.id}`} className='book-item' data-test-id='card'>
         <div className='wrapper'>
            <div className='book-imageitem'>{item.image}</div>
            <div className='book-star'>{item.star}</div>
            <div className='book-name'>{item.name}</div>
            <div className='book-author'>{item.author}</div>
            <MyButton />
        </div>
    </NavLink>
    )
} 
