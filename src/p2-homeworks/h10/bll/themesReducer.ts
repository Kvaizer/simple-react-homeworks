import {AppStoreType} from './store';

const initState = {
    theme: 'some'
}

export const themeReducer = (state: {theme: string} = initState, action: ChangeThemeAT): {theme: string} => {
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {
                theme: action.theme
            }
        }
        default: return state
    }
}

export const changeThemeAC = (theme: string) => ({type: 'CHANGE-THEME', theme} as const)
export type ChangeThemeAT = ReturnType<typeof changeThemeAC>

export const selectTheme = (store: AppStoreType) => store.themeState.theme