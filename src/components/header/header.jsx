import './header.css'
import { NavLink } from 'react-router-dom'

import logo from '../../pictures/Vector.png'
import avatar from '../../pictures/avatar.png'
import Cleverland from '../../pictures/Cleverland.png'
import Burger from '../../pictures/Icon_Action (2).png'

export const MyHeader = () => (
        <div className='header'>
            <img className='burger-menu'src={Burger} alt='img'/>
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