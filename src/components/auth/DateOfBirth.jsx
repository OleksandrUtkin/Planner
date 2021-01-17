import React, {useState, useEffect, useRef} from 'react';
import '../../scss/components/auth.scss';

const DateOfBirth = (props) => {
    const [birthDaySelect, setBirthDaySelect] = useState(false);
    const [monthSelect, setMonthSelect] = useState(false);
    const [yearSelect, setYearSelect] = useState(false);
    const dayModalRef = useRef();
    const birthDayBtnRef = useRef();
    const monthModalRef = useRef();
    const monthBtnRef = useRef();
    const yearsModalRef = useRef();
    const yearBtnRef = useRef();
    const [dayOfBirth, setDayOfBirth] = useState(null);
    const [monthOfBirth, setMonthOfBirth] = useState(null);
    const [YearOfBirth, setYearOfBirth] = useState(null);
    const [visibleDaysPopUp, setVisibleDayPopUp] = useState(false);
    const [visibleMonthsPopUp, setVisibleMonthsPopUp] = useState(false);
    const [visibleYearsPopUp, setVisibleYearsPopUp] = useState(false);
    const [daysInMonth, setDaysInMonth] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]);
    const [months, setMonths] = useState(['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December']);
    const [years, setYears] = useState([]);

    const showDayOfBirth = (e) => {
        e.preventDefault();
        visibleDaysPopUp ? setVisibleDayPopUp(false) : setVisibleDayPopUp(true);
    };

    const showMonthOfBirth = (e) => {
        e.preventDefault();
        visibleMonthsPopUp ? setVisibleMonthsPopUp(false) : setVisibleMonthsPopUp(true);
    };

    const showYearOfBirth = (e) => {
        e.preventDefault();
        visibleYearsPopUp ? setVisibleYearsPopUp(false) : setVisibleYearsPopUp(true);
    };


    const handleOutsideClick = (e) => {
        if (visibleDaysPopUp && !e.path.includes(dayModalRef.current) && !e.path.includes(birthDayBtnRef.current)) {
            setVisibleDayPopUp(false)
        }
        if (e.target.classList.contains('birthday-container__modal-day-li')) {
            setBirthDaySelect(e.target.innerHTML);
            setVisibleDayPopUp(false);
            setVisibleMonthsPopUp(true);
        }
        if (visibleMonthsPopUp && !e.path.includes(monthModalRef.current) && !e.path.includes(monthBtnRef.current)) {
            setVisibleMonthsPopUp(false);
        }
        if (e.target.classList.contains('birthday-container__modal-month-li')) {
            setMonthSelect(e.target.innerHTML);
            setVisibleMonthsPopUp(false);
            setVisibleYearsPopUp(true);
        }
        if (visibleYearsPopUp && !e.path.includes(yearsModalRef.current) && !e.path.includes(yearBtnRef.current)) {
            setVisibleYearsPopUp(false);
        }
        if (e.target.classList.contains('birthday-container__modal-year-li')) {
            setYearSelect(e.target.innerHTML);
            setVisibleYearsPopUp(false);
        }
    };

    const setYearsFunc = () => {
        const currentYear = new Date().getFullYear();
        const firstYear = 1903;
        let yearsArr = [];
        for (let i = firstYear; i <= currentYear; i++) {
            yearsArr.push(i);
        }
        setYears(yearsArr.reverse());
    };

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    });

    useEffect(() => {
        setYearsFunc();
    }, []);

    return (
        <div className='birthday-container'>
            <p >Date of birth:</p>
            <div className='birthday-container__btns'>
                <button
                    className='birthday-container__day'
                    onClick={showDayOfBirth}
                    ref={birthDayBtnRef}>
                    {birthDaySelect ? birthDaySelect : 'Day'}
                </button>
                <button
                    className='birthday-container__month'
                    onClick={showMonthOfBirth}
                    ref={monthBtnRef}>
                    {monthSelect ? monthSelect : 'Month'}
                </button>
                <button
                    className='birthday-container__year'
                    onClick={showYearOfBirth}
                    ref={yearBtnRef}>
                    {yearSelect ? yearSelect : 'Year'}
                </button>
            </div>
            <div className="birthday-container__modals">
                <ul className="birthday-container__modal-day-ul" ref={dayModalRef}>
                    {visibleDaysPopUp && daysInMonth.map((day, index) => {
                        return <li className='birthday-container__modal-day-li' key={`${index}+${day}`}>{day}</li>
                    })}
                </ul>
                <ul className='birthday-container__modal-month-ul' ref={monthModalRef}>
                    {visibleMonthsPopUp && months.map((month, index) => {
                        return <li className='birthday-container__modal-month-li' key={`${index}+${month}`}>{month}</li>
                    })}
                </ul>
                <ul className='birthday-container__modal-years-ul' ref={yearsModalRef}>
                    {visibleYearsPopUp && years.map((year, index) => {
                        return <li className='birthday-container__modal-year-li' key={`${index}+${year}`}>{year}</li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default DateOfBirth;
