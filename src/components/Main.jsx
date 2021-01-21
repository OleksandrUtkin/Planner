import React, {useState, useEffect, useRef}  from 'react';
import {connect} from 'react-redux';
import Header from "./layout/Header";
import LifeGoals from "./goalsTypes/LifeGoals";
import YearGoals from "./goalsTypes/YearGoals";
import MonthGoals from "./goalsTypes/MonthGoals";
import DayGoals from "./goalsTypes/DayGoals";
import Menu from "./layout/Menu";

const Main = (props) => {
    const showLifeGoals = props.showLifeGoals;
    const showYearGoals = props.showYearGoals;
    const showMonthGoals = props.showMonthGoals;
    const showDayGoals = props.showDayGoals;

    const [showMenu, setShowMenu] = useState(false);
    let unmounted = false;
    const menuBtnRef = useRef(null);

    const setShowMenuFunc = () => {
        !unmounted && setShowMenu(!showMenu);
    };

    useEffect(() => {
        return () => unmounted = true;
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
                {showLifeGoals && <LifeGoals/>}
                {showYearGoals && <YearGoals/>}
                {showMonthGoals && <MonthGoals/>}
                {showDayGoals && <DayGoals/>}
            </div>
        </>
    );
};

const mapStateToProps = (store) => {
    return {
        showLifeGoals: store.showTypesOfGoalsReducer.showLifeGoals,
        showYearGoals: store.showTypesOfGoalsReducer.showYearGoals,
        showMonthGoals: store.showTypesOfGoalsReducer.showMonthGoals,
        showDayGoals: store.showTypesOfGoalsReducer.showDayGoals
    }
};

export default connect(mapStateToProps)(Main);
