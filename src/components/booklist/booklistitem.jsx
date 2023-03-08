import React from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { MyButton } from '../bookcard/button'
import './booklistitem.css'
import dummy from '../../pictures/booksImage/dummy.png'
import { Image } from '../content/image'

export const BookListItem = ({item}) => {
    const location = useLocation()

    return (
    <NavLink to={`${location.pathname}/${item.id}`} className='booklist-item'>
         <div className='listwrapper'>
            {/* <div className='booklist-image'><img src={`http://localhost:5000/${getImages(item)[0]}`} alt=''/></div> */}
            <div className='booklist-content'>
                <div className='booklist-name'>{item.name}</div>
                <div className='booklist-author'>{item.author}</div>
                <div className='bottom'>
                    <div className="booklist-star">{item.rate === 0 ? 'еще нет оценок' : <Image rate={item.rate}/>}</div>
                    <MyButton/>
                </div>
            </div>

        </div>
    </NavLink>
    )
}
