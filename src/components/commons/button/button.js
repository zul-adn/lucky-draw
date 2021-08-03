import React from 'react';
import { connect } from 'react-redux';

import './button.css';


export const Button = (props) => {
    return (
        <div className="btn">
            {props.label}
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)
