import { useContext, useState } from 'react'
import './header.css'
import { NavLink, useLocation } from 'react-router-dom'

import logo from '../../pictures/Vector.png'
import avatar from '../../pictures/avatar.png'
import Cleverland from '../../pictures/Cleverland.png'
import Burger from '../../pictures/Icon_Action (2).png'
import Crist from '../../pictures/Icon_Action (3).png'
import { Context } from '../../data/context'

export const MyHeader = () => {
    const {opened, setOpened} = useContext(Context)
    const location = useLocation()
    // console.log(location.pathname.split('/', 3));
    function setCategory(path) {
        if(path !== undefined) {
            const arr = path.pathname.split('/')
            const str = path.pathname.slice(0, path.pathname.length - arr[arr.length -1 ].length)
            return str
        }
       return '/books/all'
    }
    
    return ( 
        <div className='header'>
            <div role='button' tabIndex={0} onClick={() => setOpened(!opened)} onKeyDown={() => {}}><img className='burger-menu'  src={opened ? Burger : Crist} alt='img'/></div>
            <NavLink to={setCategory(location)} className='logo'>
                <div className='rectangle'>
                    <img className='image' src={logo} alt='img' />
                </div>
                <div className='name'><img src={Cleverland} alt='img' /></div>
            </NavLink>
            <div className='library'>Библиотека</div>
            <div className='userName'>Привет, Иван</div>
            <div className='userPhoto'>
                <img className='imageUser' src={avatar} alt='img' />
            </div>
        </div>
    );
}
