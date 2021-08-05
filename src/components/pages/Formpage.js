import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Input from './../commons/input/input';
import Terms from './../commons/termscondition/terms';
import Button from './../commons/button/button';

export const Formpage = (props) => {
    const history = useHistory();

    const [mobilePhone, setMobilePhone] = React.useState('')
    const [idCardNumber, setIdCardNumber] = React.useState('')
    const [name, setName] = React.useState('')

    const submit = () => {
        if (mobilePhone === '' || idCardNumber === '' || name === '') {
            let input = document.querySelectorAll('.input')
            let helper =  document.querySelectorAll('.helper')

            for (let i = 0; i < input.length; i++) {
                input[i].style.border = "2px solid red"
            }

            for (let i = 0; i < helper.length; i++) {
                helper[i].style.display = "block"
            }

        } else {
            alert("Success ")
            // Add Action Here
        }
    }

    const cancel = () => {
        history.push('/')
    }

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
                    value={mobilePhone}
                    onChange={e => setMobilePhone(e.target.value)}
                />
            </section>
            <section>
                <Input
                    label='Hong Kong Identity Card number (Please enter all letter(s) and digits for HKID Card number without the bracket, e.g. A1234567 for HKID card no. A123456(7))'
                    type='text'
                    placeholder="Hong Kong ID Card number"
                    value={idCardNumber}
                    onChange={e => setIdCardNumber(e.target.value)}
                />
            </section>
            <section>
                <Input
                    label='English / Chinese name (as shown on your Hong Kong Identity Card)'
                    type='text'
                    placeholder="Please enter your name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </section>
            <section>
                <Terms />
            </section>
            <section className="flex-center">
                <div className="item">
                    <Button
                        label="Sumbit"
                        onClick={submit}
                        type="primary"
                    />
                </div>
                <div className="item">
                    <Button
                        label="Cancel"
                        type="secondary"
                        onClick={cancel}
                    />
                </div>
            </section>

        </>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Formpage)
