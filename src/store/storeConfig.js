import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    numeros: (state, action) => {
        console.log(`State: ${state}, Action: ${action.type}`)


        switch(action.type){
            case 'MIN_NUMBER_CHANGED':
                return {...state, min: action.payload}
            case 'MAX_NUMBER_CHANGED':
                return {...state, max: action.payload}
            default:
                return {min: 7, max: 31}
        }
    },
    nomes: (state, action) => {
        console.log(`State: ${state}, Action: ${action}`)
        return ['Israel', 'Denilson', 'Mariana', 'Marcos']
    }
})


const storeConfig = () => createStore(reducers)

export default storeConfig