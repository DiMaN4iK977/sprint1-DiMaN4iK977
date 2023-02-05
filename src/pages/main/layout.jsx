import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';

import { MyFooter } from '../../components/footer/footer';
import { MyHeader } from '../../components/header/header'
import './main-page.css'
import { LayoutMain } from './layoutmain';
import { Typebar } from '../../components/typebar/typebar';

export const Layout = ({ opened, setOpened, open, setOpen}) => (
    <div >
        <MyHeader state={opened} setState={setOpened}/>
            <Outlet/>
        <MyFooter />
    </div>
  )
