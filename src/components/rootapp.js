import React from 'react';
import './style/style2.css';
import { connect } from "react-redux";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import Navbar from './commons/navbar/navbar';
import Home from './pages/Home';
import Formpage from './pages/Formpage';
import Footer from './commons/footer/footer';
import Menu from './commons/menu/menu';

function Rootapp({ isRegisterSubmit }) {

    return (
        <HashRouter>
            <Menu />
            <div className="container">
                <Navbar />

                <Route exact path="/" component={Home} />
                <Route path="/form" component={Formpage} />
                <section>
                    <Footer />
                </section>

            </div>
        </HashRouter>
    )
}

const mapStateToProps = ({ app }) => {
    return {
        isRegisterSubmit: app.isRegisterSubmit
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Rootapp);
