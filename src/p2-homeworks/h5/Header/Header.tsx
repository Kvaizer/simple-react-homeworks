import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from '../Routes';
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.dropdown}>
            <button className={s.dropbtn}>NavBar</button>
            <div className={s.dropdownContent}>
                <NavLink className={s.navlink} to={PATH.PRE_JUNIOR}>PreJun</NavLink>
                <NavLink className={s.navlink} to={PATH.JUNIOR}>JUNIOR</NavLink>
                <NavLink className={s.navlink} to={PATH.JUNIOR_PLUS}>JUNIOR+</NavLink>
                <NavLink className={s.navlink} to={PATH.ERROR_404}>Error404</NavLink>
            </div>
        </div>

    )
}

export default Header
