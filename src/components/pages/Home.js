import React from 'react';
import { connect } from 'react-redux';

import { registerSubmit } from './../../store/app/action';
import { useHistory } from 'react-router-dom';

import Button from './../commons/button/button';
import Section from './../commons/section/section';
import Table from './../commons/table/table';

import Logo from './../assets/img/big-logo.png'

export const Home = ({registerSubmit}) => {
    const history = useHistory();

    const submit = () => {
       history.push('/form')
    }

    return (
        <>
            <section>
                <div className="big-logo">
                    <img src={Logo} />
                </div>
            </section>
            <section>
                <Button
                    label="Click here to register"
                    type="primary"
                    onClick={submit}
                />
            </section>
            <section>
                <Section>
                    <span>Sun Hung Kai Properties has launched the Lucky Draw for Public to support the Hong Kong SAR Government’s “Early Vaccination for All” initiative. Starting from 1 July, 56 fabulous prizes will be given out everyday for 62 consecutive days. The draw will take place every day. The earlier you receive the vaccines, the higher the chance you win!</span>
                </Section>
            </section>
            <section>
                <Section>
                    <div className="section-content">
                        <h3>Registration Period</h3>
                    </div>
                </Section>
            </section>
            <section>
                <Table />
            </section>
        </>
    )
}

const mapStateToProps = ({ app }) => {
    return {
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registerSubmit: () => dispatch(registerSubmit)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
