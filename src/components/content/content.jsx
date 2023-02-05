import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'

import './content.css'
import iconAction from '../../pictures/Icon_Action.png'
import iconAction2 from '../../pictures/Icon_Action (1).png'
import buttonIcon from '../../pictures/button icon.png'
import buttonIcon2 from '../../pictures/button icon (1).png'
// import {context} from '../../store/context'
import { Booktable } from '../bookcard/booktable'
import { List } from '../booklist/list'
import buttontable from '../../pictures/button icon (2).png'
import buttonlist from '../../pictures/button icon (3).png'


export const Content = ({list, setList}) => {
    const [open, setOpen] = useState(false)

    return (
        <div className='content'>
            <div className='navBar'>
                <div>
                    <div className='search'>
                        <div role='button' tabIndex={0} onKeyDown={() => {}} onClick={() => setOpen(!open)}><img className='searchIcon' src={iconAction} alt="img" /></div>
                        <input className={open ? 'search-txt': 'search-txt open'} type="text" placeholder='Поиск книги или автора...' />
                    </div>
                    <div className='filter'>
                        <img className='filterIcon' src={iconAction2} alt="img" />
                        <input className='filter-txt' type="text" placeholder='По рейтингу' />
                    </div >
                </div>
                <div>
                    <div className='content-button' data-test-id='button-menu-view-window' role='button'onKeyDown={() => {}} tabIndex={0} onClick={() => setList(true)}><img src={list ? buttonIcon : buttontable} alt='img'/></div>
                    <div className='content-button' data-test-id='button-menu-view-list' role='button' onKeyDown={() => {}} tabIndex={0} onClick={() => setList(false)}><img src={list ? buttonIcon2 : buttonlist} alt='img'/></div>
                </div>
            </div>
               {list ? <Booktable/> : <List/>}
    </div>
)
   }