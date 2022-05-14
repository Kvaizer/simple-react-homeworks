import {AppStoreType} from './store';

const initState = {
    isLoading: false
}

export const loadingReducer = (state: {isLoading: boolean} = initState, action: LoadingAT): {isLoading: boolean} => {
    debugger
    switch (action.type) {
        case 'LOADING': {
            return {
                isLoading: !state.isLoading
            }
        }
        default: return state
    }
}

export const loadingAC = () => ({type: 'LOADING'} as const) // fix any
export type LoadingAT = ReturnType<typeof loadingAC>

export const selectIsLoading = (store: AppStoreType) => store.loading.isLoading