import React, {useState} from 'react'
import {CheckAC, homeWorkReducer, SortAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type userType = {
    _id: number
    name: string
    age: number
}

export type initialStateType = userType[]

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<initialStateType>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map(user => {
        return <div className={s.userBox}>
            <div>{user._id}</div>
            <div>{user.name}</div>
            <div>{user.age}</div>
        </div>
    })

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, SortAC('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, SortAC('down')))
    const ageCheck = () => setPeople(homeWorkReducer(initialPeople, CheckAC(18)))
    return (
        <div>
            <hr/>

            {finalPeople}
            <div className={s.buttonBox}>
                <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={ageCheck}>Age check</SuperButton></div>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
