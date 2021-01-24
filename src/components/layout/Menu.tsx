import React, {useEffect, useRef, Dispatch, SetStateAction, FC} from 'react';
import {connect} from "react-redux";
import {useHistory} from 'react-router-dom';
import {ReactComponent as LogoutSvg} from "../../icons/logoutIcon.svg";
import {ReactComponent as SettingsIcon} from "../../icons/settingsIcon.svg";
import {RootReducerType} from '../../store/reducers/rootReducer';
import {logOut} from '../../store/actions/auth';

type PropsType = {
    showMenu: boolean
    setShowMenu: Dispatch<SetStateAction<boolean>>
    menuBtnRef: any
    userEmail: string | null
    authStatus: string
    userName: any
    logOut: any
};

const Menu: FC<PropsType> = (props ) => {
    const history= useHistory();
    const showMenu = props.showMenu;
    const setShowMenu = props.setShowMenu;
    const menuBtnRef = props.menuBtnRef;
    const userEmail = props.userEmail;
    const userName = props.userName;
    const menuRef = useRef(null);

    const handleLogOut = async () => {
        props.logOut();
    };

    const handleOutsideClick = (e: any) => {
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

const mapStateToProps = (state: RootReducerType) => {
    return {
        authStatus: state.firebase.auth.uid,
        userEmail: state.firebase.auth.email,
        userName: state.firebase.profile.userName
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        logOut: () => dispatch(logOut())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
