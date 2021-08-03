import React from 'react';
import { connect } from 'react-redux';
import './navbar.css';

import Logo from './../../assets/img/logo.png';

export const Navbar = (props) => {

    const showMenu = () => {
        const menublock = document.querySelector('.menu-container')
        menublock.style.display = 'block'
    }

    return (
        <div className="navbar-container">
            <div className="item">
                <i class='bx bx-menu' onClick={showMenu}></i>
            </div>
            <div className="item">
                <img src={Logo} />
            </div>
            <div className="item">
                <span>EN</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
