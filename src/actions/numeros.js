export function alterarNumeroMinimo(novoNumero){
    return {
        type: 'MIN_NUMBER_CHANGED', 
        payload: novoNumero
    }
}



export function alterarNumeroMaximo(novoNumero){
    return {type: 'MAX_NUMBER_CHANGED', payload: novoNumero}
}