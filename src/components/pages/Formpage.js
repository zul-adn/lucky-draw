import React from 'react';
import { connect } from 'react-redux';

import Input from './../commons/input/input';
import Terms from './../commons/termscondition/terms';

export const Formpage = (props) => {
    return (
        <>
            <section>
                <div className="form-title">
                    Please provide your personal infromation
                </div>
            </section>
            <section>
                <Input 
                    label='Hong Kong mobile phone number (For the purpose of notifying the winner via SMS, please provide a valid 8-digit Hong Kong mobile phone number.)'
                    type='text'
                    placeholder="Mobile number"
                />
            </section>
            <section>
                <Input 
                    label='Hong Kong Identity Card number (Please enter all letter(s) and digits for HKID Card number without the bracket, e.g. A1234567 for HKID card no. A123456(7))'
                    type='text'
                    placeholder="Hong Kong ID Card number"
                />
            </section>
            <section>
                <Input 
                    label='English / Chinese name (as shown on your Hong Kong Identity Card)'
                    type='text'
                    placeholder="Please enter your name"
                />
            </section>
            <section>
                <Terms />
            </section>
            <section className="flex center ">
                    
            </section>
            
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Formpage)
