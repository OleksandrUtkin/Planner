export const SHOW_LIFE_GOALS = 'SHOW_LIFE_GOALS';
export const SHOW_YEAR_GOALS = 'SHOW_YEAR_GOALS';
export const SHOW_MONTH_GOALS = 'SHOW_MONTH_GOALS';
export const SHOW_DAY_GOALS = 'SHOW_DAY_GOALS';

type showLifeGoalsActionType = {
    type: typeof SHOW_LIFE_GOALS
}
type showYearGoalsActionType = {
    type: typeof SHOW_YEAR_GOALS
}
type showMonthGoalsActionType = {
    type: typeof SHOW_MONTH_GOALS
}
type showDayGoalsActionType = {
    type: typeof SHOW_DAY_GOALS
}

export const showLifeGoalsAction = () : showLifeGoalsActionType => {
    return {
        type: SHOW_LIFE_GOALS
    }
};

export const showYearGoalsAction = () : showYearGoalsActionType => {
    return {
        type: SHOW_YEAR_GOALS
    }
};

export const showMonthGoalsAction = () : showMonthGoalsActionType => {
    return {
        type: SHOW_MONTH_GOALS
    }
};

export const showDayGoalsAction = () : showDayGoalsActionType => {
    return {
        type: SHOW_DAY_GOALS
    }
};