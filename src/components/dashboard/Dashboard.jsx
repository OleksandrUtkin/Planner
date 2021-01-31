import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import classNames from 'classnames';

const Dashboard = (props) => {

    const {dateOfBirth, liveYears, isLoaded} = props;
    const yearsArr = [];
    const userFullYears = Math.floor((new Date() - new Date(dateOfBirth)) / 1000 / 60 / 60 / 24 / 365.25);
    for (let i = 1; i <= liveYears; i++) yearsArr.push(i);

    // months
    const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'];
    let months = [];
    new Date(dateOfBirth).getDate() === 1 ?
        months = months.concat(allMonths.slice(new Date(dateOfBirth).getMonth()), allMonths.slice(0, new Date(dateOfBirth).getMonth())) :
        months = months.concat(allMonths.slice(new Date(dateOfBirth).getMonth()), allMonths.slice(0, new Date(dateOfBirth).getMonth() + 1));

    // days of week/month
    const [daysInMonth, setDaysInMonth] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]);

    const days28 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
    const days29 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
    const days30 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    const days31 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

    const months31 = ['January', 'March', 'May', 'Jule', 'August', 'October', 'December'];
    const months30 = ['January', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'];
    const months29leapYear = ['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'];
    const months28commonYear = ['January', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'];

    const [activeMonth, setActiveMonth] = useState(allMonths[new Date().getMonth()]);
    const [activeYear, setActiveYear] = useState(new Date().getFullYear());



    console.log(activeMonth, activeYear);

    // fix double active months with the same value
    useEffect(() => {
        if(isLoaded) {
            const currentMonths = document.getElementsByClassName('months-ul__month_current');
            if(currentMonths.length > 1) {
                new Date(dateOfBirth).getDate() <= new Date().getDate() && currentMonths[1].classList.remove('months-ul__month_current')
            }
        }
    });

    if(!isLoaded) return <p>Loading...</p>;

    return (
        <section className='life-time-section'>
            <div className="years-and-days-in-month">
                <ul className='years-ul'>
                    {yearsArr.map((year, index) => {
                        return <li
                            key={year+index}
                            className={classNames({
                                'years-ul__year': userFullYears < year,
                                'years-ul__year years-ul__year_current': userFullYears+1 === year,
                                'years-ul__year years-ul__year_last': userFullYears >= year
                            })}
                        >
                            {year}
                        </li>
                    })}
                </ul>
                <div className="days-in-month-container">
                    <ul className="days-in-week">
                        <li>M</li>
                        <li>T</li>
                        <li>W</li>
                        <li>T</li>
                        <li>F</li>
                        <li>S</li>
                        <li>S</li>
                    </ul>
                    <ul className="days-in-month">

                    </ul>
                </div>
            </div>
            <ul className="months-ul">
                {months.map((month, index) => {
                    return <li
                        key={month+index}
                        className={classNames({
                            'months-ul__month': index > months.indexOf(allMonths[new Date().getMonth()]),
                            'months-ul__month months-ul__month_current': month === activeMonth,
                            'months-ul__month months-ul__month_last': index < months.indexOf(allMonths[new Date().getMonth()])
                        })}
                    >
                        {month}
                    </li>
                })}
            </ul>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        dateOfBirth: state.firebase.profile.dateOfBirth,
        liveYears: state.firebase.profile.liveYears,
        isLoaded: state.firebase.profile.isLoaded
    }
};

export default connect(mapStateToProps)(Dashboard);
