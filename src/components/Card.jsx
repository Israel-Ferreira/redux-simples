import React from 'react'

import './Card.css'

const getColor = (props) => {
    if(props.red){
        return "Red"
    } else if(props.green){
        return "Green"
    } else if(props.blue) {
        return "Blue"
    } else if(props.purple){
        return "Purple"
    }else{
        return ""
    }
}

export default props => {
    return (
        <div className={`Card ${getColor(props)}`} >
            <div className="Header">
                <span className="Title">{props.title}</span>
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}
