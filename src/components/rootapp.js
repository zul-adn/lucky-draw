import React from 'react';
import './style/style2.css';
import { connect } from "react-redux";
import moment from 'moment';
import 'moment/locale/id';  // without this line it didn't work

import Navbar from './commons/navbar/navbar';
import Button from './commons/button/button';
import Section from './commons/section/section';
import Table from './commons/table/table';
import Footer from './commons/footer/footer';

import Logo from './assets/img/big-logo.png'

moment.locale('id');

function Rootapp(props) {

    return (
        <div className="container">
            <Navbar />
            <section>
                <div className="big-logo">
                    <img src={Logo} />
                </div>
            </section>
            <section>
                <Button
                    label="Register"
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
            <section>
                <Footer />
            </section>
        </div>
    )
}

const mapStateToProps = ({ app }) => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Rootapp);
