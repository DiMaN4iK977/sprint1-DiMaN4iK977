import { useContext, useState, useEffect, useMemo } from 'react'
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
import Crist from '../../pictures/Icon_Action (3).png'
import { Context } from '../../data/context';
import { getBook } from '../../http/bookapi';


export const Content = ({list, setList}) => {
    const [open, setOpen] = useState(true)
    const [bookData, setBookData] = useState([])
    // console.log(bookData);
    // const value = useMemo(() => ({
    //     bookData, setBookData
    // }), [bookData]);
    // const value = bookData

    useEffect(() => {
        getBook().then(data => setBookData(data.data));
    }, [])

    // console.log(bookData);

   

    return (
    <Context.Provider value={bookData}>
        <div className='content'>

            <div className='navBar'>
                <div className='utils'>
                    <div className={open ? 'search' : 'search open'}>
                        <div role='button' className={open ? 'button' : 'button closed'} tabIndex={0} onKeyDown={() => {}} onClick={() => setOpen(!open)}><img className='searchIcon' src={iconAction} alt="img" /></div>
                        <input className={open ? 'search-txt': 'search-txt open'} inputMode='search' type='text' placeholder='Поиск книги или автора...' />
                        <div role='button' className={open ? 'button closed' : 'button'} tabIndex={0} onKeyDown={() => {}} onClick={() => setOpen(!open)}><img className='searchIcon' src={Crist} alt="img" /></div>
                    </div>
                    <div className={open ? 'filter' : 'filter closed'}>
                        <img className='filterIcon' src={iconAction2} alt="img" />
                        <input className='filter-txt' type="text" placeholder='По рейтингу' />
                    </div >
                </div>
                <div>
                    <div className={open ? 'content-button' : 'content-button closed'} data-test-id='button-menu-view-window' role='button'onKeyDown={() => {}} tabIndex={0} onClick={() => setList(true)}><img src={list ? buttonIcon : buttontable} alt='img'/></div>
                    <div className={open ? 'content-button' : 'content-button closed'} data-test-id='button-menu-view-list' role='button' onKeyDown={() => {}} tabIndex={0} onClick={() => setList(false)}><img src={list ? buttonIcon2 : buttonlist} alt='img'/></div>
                </div>
            </div>
               {list ? <Booktable/> : <List/>}
    </div>
    </Context.Provider>
)
   }