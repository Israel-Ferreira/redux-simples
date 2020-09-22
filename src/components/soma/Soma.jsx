import React from 'react'
import { connect } from 'react-redux'

import Card from '../Card'

const Soma = props => {
    const {min, max} = props
    return (
        <Card title="Soma dos números" green>
            <div className="Soma">
                <span>Resultado: <strong>{max + min}</strong></span>
            </div>
        </Card>
    )
}


const mapStateToProps = state => {
    return {...state.numeros}
}

export default connect(mapStateToProps)(Soma)