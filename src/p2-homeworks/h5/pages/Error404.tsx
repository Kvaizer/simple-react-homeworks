import React from 'react'
import s from './Error404.module.css'
import error from '../pictures/error.jpg'
function Error404() {
    return (
        <div className={s.error404}>
            <div className={s.error404Inner}>
                <img src={error}/>
            </div>
        </div>
    )
}

export default Error404
