import React from 'react';
import NavGoalsTypes from "./NavGoalsTypes";

const Header = (props) => {
    const setShowMenuFunc = props.setShowMenuFunc;
    const menuBtnRef = props.menuBtnRef;

    return (
        <header>
            <p className='logo-text'>Planner</p>
            <NavGoalsTypes/>
            <button className="menu-btn" onClick={setShowMenuFunc} ref={menuBtnRef}>
                <div className='menu-btn__line menu-btn__line_1'></div>
                <div className='menu-btn__line menu-btn__line_2'></div>
                <div className='menu-btn__line menu-btn__line_3'></div>
            </button>
        </header>
    );
};

export default Header;
