const initialState = {
    lifeGoals: [
        {id:1, title:'work with React.js', deadline: '01.03.2021'},
        {id:1, title:'work with React.Native', deadline: '22.11.2021'}
    ]
};

const lifeGoalsReducer = (state = initialState, action) => {
    return state
};

export default lifeGoalsReducer;