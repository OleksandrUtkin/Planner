import React from 'react';
import {connect} from "react-redux";

const LifeGoals = (props) => {
    console.log(props.dateOfBirth);
    const dateOfBirth = props.dateOfBirth;
    // const yearOfBirth = props.dateOfBirth.slice(0,4);
    const liveYears = props.liveYears;
    const yearsArr = [];
    // console.log(new Date(dateOfBirth).getFullYear());
    // console.log(props);

    for (let i = 1; i <= liveYears; i++) yearsArr.push(i);

    return (
        <section className='life-goals-section'>
            <ul className='years-ul'>
                {yearsArr.map((year, index) => {
                    return <li key={year+index} className='years-ul__year'>{year}</li>
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
