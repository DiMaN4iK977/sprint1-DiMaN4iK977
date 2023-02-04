import { useState } from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'

import logo from '../../pictures/Vector.png'
import avatar from '../../pictures/avatar.png'
import Cleverland from '../../pictures/Cleverland.png'
import Burger from '../../pictures/Icon_Action (2).png'
import Crist from '../../pictures/Icon_Action (3).png'

export const MyHeader = ({state, setState}) => ( 

        <div className='header'>
            <div role='button' tabIndex={0} onClick={() => setState(!state)} onKeyDown={() => {}}><img className='burger-menu'  src={state ? Burger : Crist} alt='img'/></div>
            <NavLink to='/books/all' className='logo'>
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
