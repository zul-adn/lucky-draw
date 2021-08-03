import React from 'react'
import { connect } from 'react-redux';
import './section.css';

export const section = (props) => {
    return (
        <div className="section-container">
            {props.children}
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(section)
