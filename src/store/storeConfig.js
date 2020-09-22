import { createStore, combineReducers } from 'redux'

import NumerosReducer from '../reducers/numeros'

const reducers = combineReducers({
    numeros: NumerosReducer
})


const storeConfig = () => createStore(reducers)

export default storeConfig