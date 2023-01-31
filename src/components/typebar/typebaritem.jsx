import '../content/content.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export function TypebarItem({item}) {
    // const = useState[isActive, ]

    if(item.children) { 
        return (
        <NavLink className='title' to={item.path} key={item.id}>
                    <span className="category">{item.name}</span>
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
