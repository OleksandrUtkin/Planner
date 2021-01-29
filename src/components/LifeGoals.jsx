import React from 'react';
import {connect} from "react-redux";

const LifeGoals = (props) => {

    const {dateOfBirth, liveYears} = props;
    const yearsArr = [];
    const userFullYears = Math.floor((new Date() - new Date(dateOfBirth)) / 1000 / 60 / 60 / 24 / 365.25);

    for (let i = 1; i <= liveYears; i++) yearsArr.push(i);

    if(!liveYears) return <p>Loading...</p>;

    return (
        <section className='life-goals-section'>
            <ul className='years-ul'>
                {yearsArr.map((year, index) => {
                    return <li
                        key={year+index}
                        className={userFullYears < year ? 'years-ul__year' : 'years-ul__year years-ul__year_last'}>
                        {year}
                    </li>
                })}
            </ul>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        dateOfBirth: state.firebase.profile.dateOfBirth,
        liveYears: state.firebase.profile.liveYears
    }
};

export default connect(mapStateToProps)(LifeGoals);
