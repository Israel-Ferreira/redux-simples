import React from 'react';
import { connect } from 'react-redux'

import {alterarNumeroMaximo, alterarNumeroMinimo} from '../../actions/numeros'


import './Intervalo.css'

import Card from '../Card'

const Intervalo = props => {
    const {min, max} = props
    return (
        <Card title="Intervalo de Números" blue>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number" value={min}  onChange={(e) => props.setNumeroMinimo(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number" value={max} onChange={(e) => props.setNumeroMaximo(+e.target.value)} />
                </span>
            </div>
        </Card>
    )
}


const mapStateToProps = state => {
    return {...state.numeros}
}

const mapDispatchToProps = dispatch => {
    return {
        setNumeroMinimo(novoNumero){
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },

        setNumeroMaximo(novoNumero){
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)