import '../content/content.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import toggleBtn from '../../pictures/Vector (Stroke).png'

export function TypebarItem({item}) {
    // const = useState[isActive, ]

    if(item.children) { 
        return (
        <NavLink className='title' to={item.path} key={item.id}>
                    <div className="category">
                        <span>{item.name}</span>
                        <img src={toggleBtn} alt='img'/>
                        {/* <i className='bi-chevron-down toggle-btn' /> */}
                        </div>
                         <div className="category-many">
                            {item.children.map(child => (
                                <TypebarItem key={child.id} item={child} /> 
                            ))} 
                        </div>
        </NavLink>
        )              
    }
        return (
                <NavLink to={item.path} key={item.id}  className='category-book'>
                    <span className='categore-name'>{item.name}</span>
                    <span className='count'>{item.count}</span>
                </NavLink>  
        )
}
