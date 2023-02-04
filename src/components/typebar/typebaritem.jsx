import '../content/content.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import toggleBtn from '../../pictures/Vector (Stroke).png'
import toggleBtnDown from '../../pictures/Vector (Stroke) (1).png'

export function TypebarItem({item, open, setOpen}) {
    // const [open, setOpen] = useState(true)
    // console.log(open);

    if(item.children) { 
        return (
        <div>
                    <div className='category'>
                        <NavLink className="category-book" to={item.path} key={item.id}>{item.name}
                        <div role='button' tabIndex={0} onClick={() => setOpen(!open)} onKeyDown={() => {}}><img src={open ? toggleBtnDown : toggleBtn} alt='img'/></div>
                        </NavLink>
                    </div>
                        <div className={open ? "category-many open" : "category-many"}>
                            {item.children.map(child => (
                                <TypebarItem open={open} setOpen={setOpen} key={child.id} item={child} /> 
                            ))} 
                        </div>
        </div>
        )              
    }
        return (
                <NavLink to={item.path} key={item.id} className='category-book'>
                    <span className='category-name'>{item.name}</span>
                    <span className='count'>{item.count}</span>
                </NavLink>  
        )
}
