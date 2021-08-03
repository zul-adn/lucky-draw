import React from 'react';
import { connect } from 'react-redux';

import './terms.css';

export const terms = (props) => {
    return (
        <div className="terms-container">
            Terms and Condition here
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(terms)
