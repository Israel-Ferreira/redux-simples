import {MAX_NUM_CHANGED, MIN_NUM_CHANGED} from './actionTypes'


export function alterarNumeroMinimo(novoNumero){
    return {
        type: MIN_NUM_CHANGED, 
        payload: novoNumero
    }
}



export function alterarNumeroMaximo(novoNumero){
    return {type: MAX_NUM_CHANGED, payload: novoNumero}
}