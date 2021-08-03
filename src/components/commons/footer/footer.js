import React from 'react';
import { connect } from 'react-redux';

import './footer.css';

export const footer = (props) => {
    return (
        <div className="footer-container">
            <span>Enquiry hotline: 3766 5803</span><br/>
            <span>Enquiry email: daydaydraw@shkp.com</span><br/>
            <span>(Operating hours: Monday to Friday 9:30 a.m. – 1 p.m. and 2:30 p.m. – 6 p.m., except public holidays)</span> <br/><br/>
            <span>Trade Promotion Competition Licence Nos: 54443-4</span>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(footer)
