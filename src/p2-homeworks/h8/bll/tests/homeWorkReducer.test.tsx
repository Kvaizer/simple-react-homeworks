import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {initialStateType} from '../../HW8';



let initialState: initialStateType

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    expect(newState.length).toBe(6)
    expect(newState[0].name).toBe('Александр')
    expect(newState[newState.length - 1].name).toBe('Кот')
    console.log(newState)

})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})

    expect(newState.length).toBe(6)
    expect(newState[0].name).toBe('Кот')
    expect(newState[newState.length - 1].name).toBe('Александр')

})
test('check age 18', () => {
    const newState: initialStateType = homeWorkReducer(initialState, {type: 'check', payload: 18})

    expect(newState.filter(item => item.age < 18).length).toBe(0)
    expect(newState.length).toBe(4)
})
