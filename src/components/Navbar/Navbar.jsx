import React from 'react'
import p from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className={p.nav}>
            <div className={p.item}>
                <NavLink to="/Profile">Profile</NavLink>
            </div>
            <div className={p.item}>
                <NavLink to="/Dialogs">Message</NavLink>
            </div>
            <div>
                <a className={p.item}>News</a>
            </div>
            <div>
                <a className={p.item}>Music</a>
            </div>
            <div>
                <a className={p.item}>Settings</a>
            </div>
        </nav>



    )
}

export default Navbar