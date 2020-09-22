import React from 'react'
import { connect } from 'react-redux'

import Card from '../Card'

const Sorteio = ({ min, max }) => {
    const randomNum = parseInt(Math.random() * (max - min)) + min
    return (
        <Card title="Sorteio dos números" purple>
            <div className="Sorteio">
                <span>Resultado: <strong>{randomNum}</strong></span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {...state.numeros}
}

export default  connect(mapStateToProps)(Sorteio)