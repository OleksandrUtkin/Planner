import React, {useState, useEffect, useRef}  from 'react';
import {connect} from 'react-redux';
import Header from "./layout/Header";
import LifeGoals from "./LifeGoals";
import Menu from "./layout/Menu";

const Main: React.FC = () => {

    console.log(1);

    const [showMenu, setShowMenu] = useState(false);
    let unmounted: boolean = false;
    const menuBtnRef = useRef(null);

    const setShowMenuFunc = () => {
        !unmounted && setShowMenu(!showMenu);
    };

    useEffect(() => {
        return () => {
            unmounted = true;
        }
    }, []);

    return (
        <>
            <Header
                setShowMenuFunc={setShowMenuFunc}
                menuBtnRef={menuBtnRef}
            />
            <Menu
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                menuBtnRef={menuBtnRef}
            />
            <div className="content-wrap">
                <LifeGoals/>
            </div>
        </>
    );
};

export default Main;
