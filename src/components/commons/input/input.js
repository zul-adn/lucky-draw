import React from 'react'
import { connect } from 'react-redux'

import './input.css'

export const input = (props) => {
    return (
        <div className="input-container">
            <label>{props.label}</label>
            <input 
                type={props.type} 
                placeholder={props.placeholder} 
                value={props.value}
                onChange={props.onChange} 
                className="input"
            />
            <div className="helper">This field cannot be empty</div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(input)
