import { useContext, useState, useMemo, useEffect } from 'react'
import '../content/content.css'
import { NavLink, useLocation, useParams} from 'react-router-dom'
import toggleBtn from '../../pictures/Vector (Stroke).png'
import toggleBtnDown from '../../pictures/Vector (Stroke) (1).png'
import { Context } from '../../data/context'
import { fetchBranch } from '../../http/branchapi'
import { Subsection } from './subsection'

export function TypebarItem({item}) {

    const {setActiveCategory} = useContext(Context)
    const [open, setOpen] = useState(false)

    const [branches, setBranches] = useState([])

    useEffect(() => {
        fetchBranch(item.id).then(data => {
            setBranches(data.data)
        })
    }, [item.id])  

    const location = useLocation()
    let current = ''
    if( location.pathname === '/root/' || location.pathname === '/contract') {
        current = '/books/all'
        setTimeout(() => {
            setActiveCategory(1)
        }, 0)
    }  else {
        current = location.pathname
    }

    if(branches.length > 0) {
    return (
    <div>
        <div className='category'>
            <NavLink className="category-book" to={current} key={item.id}>{item.name}                         
                <div role='button' tabIndex={0} onClick={() => setOpen(!open)} onKeyDown={() => {}}>                    
                    <img src={open ? toggleBtnDown : toggleBtn} alt='img'/>
                </div>
            </NavLink>
            <div className={open ? "category-many open" : "category-many"}>
                {branches.map(child => (
                    <NavLink to={child.path} onClick={() => setActiveCategory(child.id)} key={child.id} className='category-book'>
                        <Subsection child={child} />
                    </NavLink>  
                ))} 
            </div>
        </div>
    </div>
    )
    } return (
        <div>
        <div className='category'>
            <NavLink className="category-book" to={item.path} key={item.id}>{item.name}</NavLink>
        </div>
    </div>
    )
}
