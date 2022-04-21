import {initialStateType, userType} from '../HW8';

export type ActionsType = ReturnType<typeof SortAC> | ReturnType<typeof CheckAC>

export const homeWorkReducer = (state: initialStateType, action: ActionsType): initialStateType => { // need to fix any

    const sortUsers = (a: userType, b: userType, order: string) => {
        const name1 = a.name.toLowerCase()
        const name2 = b.name.toLowerCase()
        if(order === 'up') {
            if(name1 > name2) return 1
            if(name1 < name2)  return -1
            else return 0
        } else if(order === 'down') {
            if(name1 < name2) return 1
            if(name1 > name2) return -1
            else return 0
        } else return 0
    }
    switch (action.type) {
        case 'sort': {
            let stateCopy = [...state]

            if(action.payload === 'up') stateCopy.sort((a, b) => sortUsers(a, b, 'up'))

            if(action.payload === 'down') stateCopy.sort((a, b) => sortUsers(a, b, 'down'))

            return stateCopy
        }
        case 'check': {
            return state.filter(user => user.age >= action.payload)
        }
        default: return state
    }
}

export const SortAC = (payload: string) => ({type: 'sort', payload} as const)
export const CheckAC = (payload: number) => ({type: 'check', payload} as const)
