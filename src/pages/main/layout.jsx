import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { Typebar } from '../../components/typebar/typebar';
import { MyFooter } from '../../components/footer/footer';
import { MyHeader } from '../../components/header/header'
import './main-page.css'

export const Layout = ({opened, setOpened, open, setOpen}) => (
    <div role='button' tabIndex={0} onKeyDown={() => {}} onClick={() => setOpened(!opened)}>
        <MyHeader state={opened} setState={setOpened}/>
        <div className='book-container'>
            <div className={opened ? 'menu' : 'menu opened'}>
                <Typebar open={open} setOpen={setOpen} />
            </div>
        <Outlet/>
        </div>
        <MyFooter />
    </div>
  )
