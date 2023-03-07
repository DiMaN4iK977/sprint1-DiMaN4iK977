import { useContext, useState, useMemo, useEffect } from 'react'
import '../content/content.css'
import { NavLink, useLocation, useParams} from 'react-router-dom'
import toggleBtn from '../../pictures/Vector (Stroke).png'
import toggleBtnDown from '../../pictures/Vector (Stroke) (1).png'
import { Context } from '../../data/context'
import { fetchBranch } from '../../http/branchapi'
import { Subsection } from './subsection'

export function TypebarItem({item}) {

    const {setActiveCategory, setOpened, opened} = useContext(Context)
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
    // console.log(current);

    function setCategory(path) {
        const arr = path.pathname.split('/')
        let str = ''
        if(arr.length === 4) {
            str = path.pathname.slice(0, path.pathname.length - arr[arr.length -1].length - 1)
        } else {
            str = path.pathname
        }
        let id = 1
        branches.forEach(child => {
            if(child.path === str) {
                id = child.id
            }
    })
        return setTimeout(() => setActiveCategory(id),0)
    }
    // setTimeout(() => {
        
    // }, 0)
    // const check = (location) => {
    //     setActiveCategory(setCategory(location))
    // }

    setCategory(location)
    // check(opened)
    if(branches.length > 0) {
    return (
        <div className='category'>
            <NavLink className="category-book" to={current} key={item.id}>{item.name}                         
                <div role='button' tabIndex={0} onClick={() => setOpen(!open)} onKeyDown={() => {}}>                    
                    <img src={open ? toggleBtnDown : toggleBtn} alt='img'/>
                </div>
            </NavLink>
            <div className={open ? "category-many open" : "category-many"}>
                {branches.map(child => (
                    <NavLink to={child.path} key={child.id} onClick={() => setOpened(!opened)} className='category-book'>
                        <Subsection child={child} />
                    </NavLink>  
                ))} 
            </div>
        </div>
    )
    } return (
        <div className='category'>
            <NavLink className="category-book" onClick={() => setOpened(!opened)}  to={item.path} key={item.id}>{item.name}</NavLink>
        </div>
    )
}
