import React from 'react';
import { connect } from 'react-redux';
import {

    NavLink,

} from "react-router-dom";

import './menu.css';

export const menu = (props) => {

    const closeMenu = () => {
        const menublock = document.querySelector('.menu-container')
        menublock.style.display = 'none'
    }

    return (
        <div className="menu-container" onClick={closeMenu}>
            <div className="menu-header">
                <i class='bx bx-collapse' onClick={closeMenu}></i>
            </div>
            <ul>

                <NavLink to="/">
                    <li>
                        Home Page
                    </li>
                </NavLink>

                <li>FAQ</li>
                <li>Terms & Conditions</li>
                <li>Privacy Police Statement</li>
                <li>Public Winner List</li>
                <li>Staff Winner List</li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(menu)
