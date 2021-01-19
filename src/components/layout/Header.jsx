import React, {useState, useRef} from 'react';
import Menu from "./menu/Menu";

const Header = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const menuBtnRef = useRef();

    const setShowMenuFunc = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header>
            <p>Planner</p>
            <button className="menu-btn" onClick={setShowMenuFunc} ref={menuBtnRef}>
                <div className='menu-btn__line menu-btn__line_1'></div>
                <div className='menu-btn__line menu-btn__line_2'></div>
                <div className='menu-btn__line menu-btn__line_3'></div>
            </button>
            <Menu showMenu={showMenu} setShowMenu={setShowMenu} menuBtnRef={menuBtnRef}/>
        </header>
    );
};

export default Header;
