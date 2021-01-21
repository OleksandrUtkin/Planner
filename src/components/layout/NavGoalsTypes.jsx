import React from 'react';
import {connect} from 'react-redux';
import {showLifeGoalsAction} from '../../store/actions/showTypesOfGoals';
import {showYearGoalsAction} from '../../store/actions/showTypesOfGoals';
import {showMonthGoalsAction} from '../../store/actions/showTypesOfGoals';
import {showDayGoalsAction} from '../../store/actions/showTypesOfGoals';

const NavGoalsTypes = (props) => {
    const showLifeGoals = props.showLifeGoals;
    const showYearGoals = props.showYearGoals;
    const showMonthGoals = props.showMonthGoals;
    const showDayGoals = props.showDayGoals;

    const showLifeGoalsFunc = () => {
        props.showLifeGoalsAction()
    };

    const showYearGoalsFunc = () => {
        props.showYearGoalsAction()
    };

    const showMonthGoalsFunc = () => {
        props.showMonthGoalsAction()
    };

    const showDayGoalsFunc = () => {
        props.showDayGoalsAction()
    };

    return (
        <div className='goals-nav'>
            <button
                className={showLifeGoals ? 'goals-nav__btn goals-nav__btn_active' : 'goals-nav__btn'}
                onClick={showLifeGoalsFunc}>
                Life
            </button>
            <button
                className={showYearGoals ? 'goals-nav__btn goals-nav__btn_active' : 'goals-nav__btn'}
                onClick={showYearGoalsFunc}>
                Year
            </button>
            <button
                className={showMonthGoals ? 'goals-nav__btn goals-nav__btn_active' : 'goals-nav__btn'}
                onClick={showMonthGoalsFunc}>
                Month
            </button>
            <button
                className={showDayGoals ? 'goals-nav__btn goals-nav__btn_active' : 'goals-nav__btn'}
                onClick={showDayGoalsFunc}>
                Day
            </button>
        </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        showLifeGoalsAction: () => dispatch(showLifeGoalsAction()),
        showYearGoalsAction: () => dispatch(showYearGoalsAction()),
        showMonthGoalsAction: () => dispatch(showMonthGoalsAction()),
        showDayGoalsAction: () => dispatch(showDayGoalsAction()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavGoalsTypes);
