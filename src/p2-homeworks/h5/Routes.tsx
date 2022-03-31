import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import Error404 from './pages/Error404';
import PreJunior from './pages/PreJunior';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    ERROR_404: '*/',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    return (
        <div>
            <Routes>
                в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR
                exact нужен чтоб указать полное совпадение (что после '/' ничего не будет)
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                // add routes

                у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу
                <Route path={PATH.ERROR_404} element={<Error404/>}/>
                <Route path={PATH.JUNIOR} element={<div>NOT YET BUT SOON</div>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<div>NOT YET</div>}/>
            </Routes>
        </div>
    )
}

export default Pages
