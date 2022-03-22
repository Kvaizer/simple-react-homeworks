import React from 'react'
import {AffairType} from './HW2';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id: number) => props.deleteAffairCallback(_id);
    const priorityClassName = props.affair.priority === 'low' ? s.affairPriorityLow :
                              props.affair.priority === 'middle' ? s.affairPriorityMiddle :
                              props.affair.priority === 'high' ? s.affairPriorityHigh : '';

    return (
        <div>
            <div className={s.affairContainer}>
                <div className={s.affair} key={props.affair._id}>
                    <div className={s.affairName}><code>{`<${props.affair.name}>`}</code></div>
                    <div className={priorityClassName}><code>{`<${props.affair.priority}>`}</code></div>
                    <div><SuperButton onClick={() => deleteCallback(props.affair._id)}>X</SuperButton></div>
                </div>
            </div>
        </div>
    )
}

export default Affair;
