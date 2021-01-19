import React, {useEffect, useRef} from 'react';
import {connect} from "react-redux";
import {logOut} from "../../../store/actions/auth";

const Menu = (props) => {
    const showMenu = props.showMenu;
    const setShowMenu = props.setShowMenu;
    const menuBtnRef = props.menuBtnRef;
    const menuRef = useRef();

    const handleLogOut = () => {
        props.logOut();
    };

    const handleOutsideClick = (e) => {
        if (!e.path.includes(menuBtnRef.current) && !e.path.includes(menuRef.current)) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
        return () => document.body.removeEventListener('click', handleOutsideClick);
    });

    return (
        <div className={showMenu ? 'menu menu_open' : 'menu'} ref={menuRef}>
            <button className='menu__li-btn' onClick={handleLogOut}>
                Log Out
            </button>
        </div>
    );
};

const mapStateToProps = (store) => {
    return {
        authStatus: store.firebase.auth.uid
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
