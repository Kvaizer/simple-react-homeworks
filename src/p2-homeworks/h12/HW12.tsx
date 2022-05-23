import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeAC, selectTheme} from '../h10/bll/themesReducer';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(selectTheme)
    const dispatch = useDispatch()

    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeAC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <SuperRadio value={theme} fontStyle={s[`${theme}-text`]} options={themes} onChangeOption={onChangeCallback}/>
            <hr/>
        </div>
    );
}

export default HW12;
