import axios from 'axios';
import React, {useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import s from './Request.module.css'

const Requests = () => {

    const [state, setState] = useState<boolean>(false)
    const [message, setMessage] = useState<string | null>(null)
    const [disabled, setDisabled] = useState<boolean>(false)

    const pullRequest = () => {
        setDisabled(true)
        axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: state})
            .then(res => {
                console.log(res)
                setMessage('Request was successfully done')
                setDisabled(true)
            })
            .catch(err => {
                console.log({...err})
                console.log(err.response ? err.response.data.errorText : err.message)
                setMessage(err.message)
                setDisabled(true)
            })
            .finally(() => {
                console.log(state)
                setDisabled(false)
            })
    }


    return <div>
        <hr/>
        <div className={s.mainContainer}>
            <div><SuperButton onClick={pullRequest} disabled={disabled}>Request</SuperButton></div>
            <div className={s.checkBoxContainer}><SuperCheckbox checked={state} onChangeChecked={setState}/></div>
            <div className={message === 'Request was successfully done' ? s.done : s.err}>{message}</div>
        </div>
        <hr/>
    </div>

};

export default Requests;