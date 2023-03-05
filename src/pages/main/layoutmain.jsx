import { Outlet } from 'react-router-dom';
import React from 'react'
import { Typebar } from '../../components/typebar/typebar';

export const LayoutMain = ({opened, setOpen, open}) => (

        <div className='book-container'>
            <div className={opened ? 'menu' : 'menu opened'}>
                <Typebar open={open} setOpen={setOpen} />
                <div className='menu-for-divices'>
                    <div className='profile'>Профиль</div>
                    <div className='in-out'>Выход</div>
                </div>
            </div>
        <Outlet/>

        </div>
   
)
