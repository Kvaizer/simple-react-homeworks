import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {loadingAC, selectIsLoading} from './bll/loadingReducer';
import {AppStoreType} from './bll/store';
import preloader from '../../assets/preloader.gif'

function HW10() {
    const isLoading = useSelector<AppStoreType, boolean>(selectIsLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(() => {
            dispatch(loadingAC())
        }, 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            {isLoading
                ? (
                    <div style={{marginLeft: '20px'}}> <img  width={200} height={'auto'} src={preloader}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>Loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            <hr/>
        </div>
    )
}

export default HW10
