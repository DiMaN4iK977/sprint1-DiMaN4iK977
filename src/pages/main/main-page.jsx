import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Content } from '../../components/content/content';
import { Root } from '../../components/root/root';
import { BookPage } from '../book';
import { Contract } from '../../components/contract/contract';
import { Layout } from './layout';
import './main-page.css'


export const MainPage = () => {
const [list, setList] = useState(true)
return (
    <div className='container'>
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<Navigate to='/books/all'/>}/>
                <Route path='/books/:category' element={<Content list={list} setList={setList}/>}/>
                <Route path='/root' element={<Root/>}/>
                <Route path='/contract' element={<Contract/>}/>
                <Route path='*'  element={<Navigate to='/books/all'/>} />
            </Route>
            <Route path='/books/:categories/:id' element={<BookPage/>}/>
        </Routes>
        </div>
)
}