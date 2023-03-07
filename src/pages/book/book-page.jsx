import { useLocation, useParams } from "react-router-dom"
import { useState, useContext, useEffect, useMemo } from "react";

import { MyHeader } from "../../components/header/header";
// import { BookData } from "../../data/bookdata";
import './book-page.css'
import Icon from '../../pictures/Icon_Chevron.png'
// import bookimage from '../../pictures/image (3).png'
import { MyButton } from "../../components/bookcard/button";
import iconStar from '../../pictures/Star 1 (2).png'
import Star from '../../pictures/Star 1.png'
import UserAvatar from '../../pictures/Ellipse 10.png'
import { MyFooter } from "../../components/footer/footer";
import { Typebar } from "../../components/typebar/typebar";
import toggleBtn from '../../pictures/Vector (Stroke) (3).png'
import toggleBtnDown from '../../pictures/Vector (Stroke) (4).png'
import { App } from "./imageblock";
import { Slider } from "./slider/slider";
import { Context, SecondContext } from "../../data/context";
import { getOne } from "../../http/bookapi";
import { getImages } from ".";


export const BookPage = () => {
    const params = useParams()
    const {opened, setOpened} = useContext(Context)
    // setOpened(!false)
    // const BookData = useContext(Context)

    
    // console.log(BookData);
    // console.log(BookData[params.id]);
    // const book = {id: 1, name: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих', author: 'Адитья Бхаргава, 2019' , star: 'еще нет оценок', image: <img className="img" src={bookimage} alt='img'/>}
    const discription = 'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время? Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.'
    const userDescription = 'Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.'
    
    // const booklist = `Бизнес книги / ${BookData.name}`


    const [open2, setOpen2] = useState(true) 
    const [items, setItems] = useState([]);
    
    const [BookData, setBookData] = useState({})

   
    useEffect(() => {
        getOne(params.id).then(data => {
            setBookData(data.data)
            // setItems(JSON.parse(data.data.images))
    }
    );
    }, [params.id])
    
    const value = useMemo(() => ({
        BookData
    }), [BookData])

    return (
    <SecondContext.Provider value={value}>
        <div>
            <div className={opened ? 'menus' : 'menu opened'}>
                <Typebar/>
                <div className='menu-for-divices'>
                    <div className='profile'>Профиль</div>
                    <div className='in-out'>Выход</div>
                </div>
            </div>
            
            <div className="book-list">{`Бизнес книги / ${BookData.name}`}</div>    
            <div className='book-page'>
                <div className="book-main">
                    {/* <div className="book-image"> */}
                            {/* {document.body.clientWidth > 768 ? <App value={BookData.images} /> : <Slider items={items}/>}                             */}
                    {/* </div> */}
                    <div className="about">
                        <div className="name-book">{BookData.name}</div>
                        <div className="author">{BookData.author}</div>
                        <button className='test-button' type='button' >Забронировать</button> 
                        <div className="discription">О книге
                            <div className="first-part">{discription}</div>
                            <div className="secont-part">Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие</div>
                        </div>
                    </div>
                </div>
                <div className="discription2">О книге
                            <div className="first-part">{discription}</div>
                            <div className="secont-part">Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие</div>
                </div>
            <div className="book-content">
                <div className="raiting">
                    <div className="book-title">Рейтинг</div>
                    <div className="star"><img src={iconStar} alt='img'/><img src={iconStar} alt='img'/><img src={iconStar} alt='img'/><img src={iconStar} alt='img'/><img src={Star} alt='img'/>
                    <div className="number">4.3</div>
                    </div>
                </div>
                <div className="details">
                    <div className="book-title">Подробная информация</div>
                    <div className="table">
                        <div className="group">
                            <div className="group-item">
                                <div className="group-title">Издательство</div>
                                <div className="group-discription">Питер</div>
                            </div>
                            <div className="group-item">
                                <div className="group-title">Год издания</div>
                                <div className="group-discription">2019</div>
                            </div>
                            <div className="group-item">
                                <div className="group-title">Страниц</div>
                                <div className="group-discription">288</div>
                            </div>
                            <div className="group-item">
                                <div className="group-title">Переплёт</div>
                                <div className="group-discription">Мягкая обложка</div>
                            </div>
                            <div className="group-item">
                                <div className="group-title">Формат</div>
                                <div className="group-discription">70х100</div>
                            </div>
                        </div>
                        <div className="group">
                            <div className="group-item">
                                <div className="group-title">Жанр</div>
                                <div className="group-discription">Компьютерная литература</div>
                            </div>
                            <div className="group-item">
                                <div className="group-title">Вес</div>
                                <div className="group-discription">370 г</div>
                            </div><div className="group-item">
                                <div className="group-title">ISBN</div>
                                <div className="group-discription">978-5-4461-0923-4</div>
                            </div><div className="group-item">
                                <div className="group-title">Изготовитель</div>
                                <div className="group-discription">ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonials">
                    <div className="book-title">Отзывы<div style={{color: '#A7a7a7', display: "flex", marginLeft: '6px', alignItems: 'center'}}>2</div><div onKeyDown={() => {}} onClick={() => setOpen2(!open2)} style={{marginLeft: '29px'}} role='button' tabIndex={0}><img src={open2 ? toggleBtn : toggleBtnDown} alt='img'/></div></div>
                    <div className={open2 ? "testimonials-block" : "testimonials-block open"}>
                        <div className="feedback">
                            <div className="user-testimonials">
                                <div className="user-avatar"><img className="avatar" src={UserAvatar} alt='img'/></div>
                                <div>
                                    <div>Иванов Иван</div>
                                    <div>5 января 2019</div>
                                </div>
                            </div>
                            <div className="star"><img src={iconStar} alt='img'/><img src={iconStar} alt='img'/><img src={iconStar} alt='img'/><img src={iconStar} alt='img'/><img src={Star} alt='img'/></div>
                        </div>
                        <div className="feedback">
                            <div className="user-testimonials">
                                <div className="user-avatar"><img className="avatar" src={UserAvatar} alt='img'/></div>
                                <div>
                                    <div>Николай Качков</div>
                                    <div>20 июня 2018</div>
                                </div>
                            </div>
                            <div className="star"><img src={iconStar} alt='img'/><img src={iconStar} alt='img'/><img src={iconStar} alt='img'/><img src={iconStar} alt='img'/><img src={Star} alt='img'/></div>
                            <div className="user-discription">{userDescription}</div>
                        </div>
                        <div className="feedback">
                            <div className="user-testimonials">
                                <div className="user-avatar"><img className="avatar" src={UserAvatar} alt='img'/></div>
                                <div>
                                    <div>Екаерина Беляеева</div>
                                    <div>18 февраля 2018</div>
                                </div>
                            </div>
                            <div className="star"><img src={iconStar} alt='img'/><img src={iconStar} alt='img'/><img src={iconStar} alt='img'/><img src={iconStar} alt='img'/><img src={Star} alt='img'/></div>
                        </div>
                    </div>
                    <button className='test-button' type='button' >Оценить книгу</button> 
                </div>
            </div>
            </div>
            {/* <MyFooter /> */}
        </div>
        </SecondContext.Provider>

    
    )
}
