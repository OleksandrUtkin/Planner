import React, {useEffect, useRef} from 'react';
import {connect} from "react-redux";
import {useHistory} from 'react-router-dom';
import {logOut} from "../../store/actions/auth";
import {ReactComponent as LogoutSvg} from "../../icons/logoutIcon.svg";
import {ReactComponent as SettingsIcon} from "../../icons/settingsIcon.svg";

const Menu = (props) => {
    const history= useHistory();
    const showMenu = props.showMenu;
    const setShowMenu = props.setShowMenu;
    const menuBtnRef = props.menuBtnRef;
    const userEmail = props.userEmail;
    const userName = props.userName;
    const menuRef = useRef(null);

    const handleLogOut = () => {
        props.logOut();
    };

    const handleOutsideClick = (e) => {
        if (!e.composedPath().includes(menuBtnRef.current) && !e.composedPath().includes(menuRef.current)) {
            setShowMenu(false);
        }
    };

    const goToUserSettings = () => {
        history.push('/profile-settings');
    };

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
        return () => document.body.removeEventListener('click', handleOutsideClick);
    });

    return (
        <div className={showMenu ? 'menu menu_open' : 'menu'} ref={menuRef}>
            <button onClick={goToUserSettings} className="menu__user-settings">
                <p className="menu__user-name">{userName}</p>
                <p className="menu__user-email">{userEmail}</p>
                <div className='menu__user-settings-text'>
                    <SettingsIcon/>
                    Settings
                </div>
            </button>
            <button className='menu__li-btn' onClick={handleLogOut}>
                <LogoutSvg/>
                Log out
            </button>
        </div>
    );
};

const mapStateToProps = (store) => {
    return {
        authStatus: store.firebase.auth.uid,
        userEmail: store.firebase.auth.email,
        userName: store.firebase.profile.userName
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
