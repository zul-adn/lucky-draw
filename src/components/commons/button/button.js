import React from 'react';
import { connect } from 'react-redux';

import './button.css';


export const Button = (props) => {
    return (
        <div className={props.type === 'primary' ? 'btn bg-primary' : 'btn bg-secondary'} onClick={props.onClick}>
            {props.label}
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)
