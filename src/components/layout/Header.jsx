import React, {useState, useRef, useEffect} from 'react';
import Menu from "./Menu";

const Header = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const menuBtnRef = useRef(null);
    let unmounted = false;

    const setShowMenuFunc = () => {
        !unmounted && setShowMenu(!showMenu);
    };

    useEffect(() => {
        console.log(1);
        return () => unmounted = true;
    }, []);

    return (
        <header>
            <p>Planner</p>
            <button className="menu-btn" onClick={setShowMenuFunc} ref={menuBtnRef}>
                <div className='menu-btn__line menu-btn__line_1'></div>
                <div className='menu-btn__line menu-btn__line_2'></div>
                <div className='menu-btn__line menu-btn__line_3'></div>
            </button>
            <Menu
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                menuBtnRef={menuBtnRef}
            />
        </header>
    );
};

export default Header;
