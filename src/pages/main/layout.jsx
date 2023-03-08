import React, { useState, useContext } from 'react'
import { Outlet } from 'react-router-dom';

import { MyFooter } from '../../components/footer/footer';
import { MyHeader } from '../../components/header/header'
import './main-page.css'
// import { LayoutMain } from './layoutmain';
import { Typebar } from '../../components/typebar/typebar';
import { Context } from '../../data/context';

export const Layout = () => (
    <div >
        <MyHeader/>
            <Outlet/>
        <MyFooter />
    </div>
  )
