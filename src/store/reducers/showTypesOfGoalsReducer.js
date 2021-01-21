import {SHOW_LIFE_GOALS, SHOW_YEAR_GOALS, SHOW_MONTH_GOALS, SHOW_DAY_GOALS} from '../actions/showTypesOfGoals';

const initialState = {
    showLifeGoals: true,
    showYearGoals: false,
    showMonthGoals: false,
    showDayGoals: false
};

const showTypesOfGoalsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LIFE_GOALS:
            return initialState;
        case SHOW_YEAR_GOALS:
            return {
                showLifeGoals: false,
                showYearGoals: true,
                showMonthGoals: false,
                showDayGoals: false
            };
        case SHOW_MONTH_GOALS:
            return {
                showLifeGoals: false,
                showYearGoals: false,
                showMonthGoals: true,
                showDayGoals: false
            };
        case SHOW_DAY_GOALS:
            return  {
                showLifeGoals: false,
                showYearGoals: false,
                showMonthGoals: false,
                showDayGoals: true
            };
        default:
            return state
    }
};

export default showTypesOfGoalsReducer;