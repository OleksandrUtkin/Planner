export const SHOW_LIFE_GOALS = 'SHOW_LIFE_GOALS';
export const SHOW_YEAR_GOALS = 'SHOW_YEAR_GOALS';
export const SHOW_MONTH_GOALS = 'SHOW_MONTH_GOALS';
export const SHOW_DAY_GOALS = 'SHOW_DAY_GOALS';

export const showLifeGoalsAction = () => {
    return {
        type: SHOW_LIFE_GOALS
    }
};

export const showYearGoalsAction = () => {
    console.log('showYearGoalsAction');
    return {
        type: SHOW_YEAR_GOALS
    }
};

export const showMonthGoalsAction = () => {
    return {
        type: SHOW_MONTH_GOALS
    }
};

export const showDayGoalsAction = () => {
    return {
        type: SHOW_DAY_GOALS
    }
};

export default showLifeGoalsAction;