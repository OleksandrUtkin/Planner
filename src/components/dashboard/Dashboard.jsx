import React from 'react';
import {connect} from "react-redux";
import classNames from 'classnames';

const Dashboard = (props) => {

    const {dateOfBirth, liveYears, isLoaded} = props;
    const yearsArr = [];
    const userFullYears = Math.floor((new Date() - new Date(dateOfBirth)) / 1000 / 60 / 60 / 24 / 365.25);
    for (let i = 1; i <= liveYears; i++) yearsArr.push(i);

    const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'];
    const months = [].concat(allMonths.slice(new Date(dateOfBirth).getMonth()), allMonths.slice(0, new Date(dateOfBirth).getMonth() + 1));
    // console.log(months)
    console.log(months.indexOf(allMonths[new Date().getMonth()]));

    if(!isLoaded) return <p>Loading...</p>;

    return (
        <section className='life-goals-section'>
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
            <div className="months-and-days">
                <ul className="months-ul">
                    {months.map((month, index) => {
                        return <li
                            key={month+index}
                            className={classNames({
                                'months-ul__month': index > months.indexOf(allMonths[new Date().getMonth()]),
                                'months-ul__month months-ul__month_current': month === allMonths[new Date().getMonth()],
                                'months-ul__month months-ul__month_last': index < months.indexOf(allMonths[new Date().getMonth()])
                            })}
                        >
                            {month}
                        </li>
                    })}
                </ul>
                <div className="days-dashboard">

                </div>
            </div>
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
