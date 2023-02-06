import React from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { MyButton } from '../bookcard/button'
import './booklistitem.css'
import bookimage from '../../pictures/image (5).png'



export const BookListItem = ({item}) => {
    const location = useLocation()
    // console.log(item.image[0]);
   
    return (
    <NavLink to={`${location.pathname}/${item.id}`} className='booklist-item'>
         <div className='listwrapper'>
            <div className='booklist-image'><img src={item.image[0] ? item.image[0] : item.image ? item.image : item.image ? item.image : bookimage} alt=''/></div>
            <div className='booklist-content'>
                <div className='booklist-name'>{item.name}</div>
                <div className='booklist-author'>{item.author}</div>
                <div className='bottom'>
                    <div className="booklist-star">{item.star}</div>
                    <MyButton/>
                </div>
            </div>

        </div>
    </NavLink>
    )
}
