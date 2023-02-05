import '../content/content.css'
import { NavLink, useLocation, useParams} from 'react-router-dom'
import toggleBtn from '../../pictures/Vector (Stroke).png'
import toggleBtnDown from '../../pictures/Vector (Stroke) (1).png'

export function TypebarItem({item, open, setOpen, param}) {
    // console.log(`books/${param.category ? param.category : 'all'}`);
    // const lol = `books/${param.category ? param.category : 'all'}`
    // console.log(lol);
    const location = useLocation()
    let current = ''
    if( location.pathname === '/root/' || location.pathname === '/contract') {
        current = '/books'
    } else {
        current = location.pathname
    }

    if(item.children) { 
        return (
        <div>
                    <div className='category'>
                    <NavLink className="category-book" to={current} key={item.id}>{item.name}
                        <div role='button' tabIndex={0} onClick={() => setOpen(!open)} onKeyDown={() => {}}>                    
                            <img src={open ? toggleBtnDown : toggleBtn} alt='img'/>
                            </div>
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
