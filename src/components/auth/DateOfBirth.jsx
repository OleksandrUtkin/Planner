import React, {useState, useEffect, useRef} from 'react';

const DateOfBirth = ({birthDaySelect, setBirthDaySelect, monthSelect, setMonthSelect, yearSelect, setYearSelect}) => {
    const dayModalRef = useRef(null);
    const birthDayBtnRef = useRef(null);
    const monthModalRef = useRef(null);
    const monthBtnRef = useRef(null);
    const yearsModalRef = useRef(null);
    const yearBtnRef = useRef(null);
    const [visibleDaysPopUp, setVisibleDayPopUp] = useState(false);
    const [visibleMonthsPopUp, setVisibleMonthsPopUp] = useState(false);
    const [visibleYearsPopUp, setVisibleYearsPopUp] = useState(false);
    const [daysInMonth, setDaysInMonth] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]);
    const [months, setMonths] = useState(['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December']);
    const [years, setYears] = useState([]);

    const months31 = ['January', 'March', 'May', 'Jule', 'August', 'October', 'December'];
    const months30 = ['January', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'];
    const months29leapYear = ['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'];
    const months28commonYear = ['January', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'];

    const days28 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
    const days29 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
    const days30 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    const days31 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

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

    const onDayChoose = (e) => {
        setBirthDaySelect(e.target.innerHTML);
        setVisibleDayPopUp(false);

        // open right pop-up
        if (!monthSelect) {
            setVisibleMonthsPopUp(true)
        } else if (monthSelect && !yearSelect) {
            setVisibleYearsPopUp(true);
        }

        // days/months/years condition
        if (e.target.innerHTML === '29' && monthSelect === 'February') {
            setYears(years.filter(year => year % 4 === 0))
        } else if (e.target.innerHTML === '29' && yearSelect && yearSelect % 4 === 0) {
            setMonths(months29leapYear);
        } else if (e.target.innerHTML === '29' && !yearSelect) {
            setMonths(months29leapYear);
        } else if (e.target.innerHTML === '30') {
            setMonths(months30)
        } else  if (e.target.innerHTML === '31') {
            setMonths(months31)
        } else {
            setMonths(months29leapYear);
            setYears(setYearsFunc);
        }
    };

    const onMonthChoose = (e) => {
        setMonthSelect(e.target.innerHTML);
        setVisibleMonthsPopUp(false);

        // days/months/years condition
        if (birthDaySelect && birthDaySelect > 28 && e.target.innerHTML === 'February') {
            setYears(years.filter(year => year % 4 === 0));
        } else if (yearSelect % 4 === 0 && e.target.innerHTML === 'February') {
            setDaysInMonth(days29)
        } else if (yearSelect % 4 !== 0 && e.target.innerHTML === 'February') {
            setDaysInMonth(days28)
        } else if (months31.includes(e.target.innerHTML)) {
            setDaysInMonth(days31);
            setYears(setYearsFunc);
        } else if (months30.includes(e.target.innerHTML)) {
            setDaysInMonth(days30);
            setYears(setYearsFunc);
        }

        // open right popup
        if (!yearSelect) {
            setVisibleYearsPopUp(true);
        } else if (!birthDaySelect && yearSelect) {
            // days/months/years condition
            setVisibleDayPopUp(true);
        }
    };

    const onYearChoose = (e) => {
        setYearSelect(e.target.innerHTML);
        setVisibleYearsPopUp(false);

        // days/months/years condition
        if (monthSelect === 'February' && e.target.innerHTML % 4 !== 0) {
            setDaysInMonth(days28);
        } else if (monthSelect === 'February' && e.target.innerHTML % 4 === 0) {
            setDaysInMonth(days29);
        } else if (birthDaySelect && birthDaySelect === '29' && e.target.innerHTML % 4 !== 0 ) {
            setMonths(months28commonYear);
        } else if (birthDaySelect && birthDaySelect === '29' && e.target.innerHTML % 4 === 0) {
            setMonths(months29leapYear);
        }

        // open right popup
        if (!monthSelect) {
            setVisibleMonthsPopUp(true)
        } else if (!birthDaySelect && monthSelect) setVisibleDayPopUp(true);
    };

    const handleOutsideClick = (e) => {
        if (visibleDaysPopUp && !e.composedPath().includes(dayModalRef.current) && !e.composedPath().includes(birthDayBtnRef.current)) {
            setVisibleDayPopUp(false)
        }

        if (e.target.classList.contains('birthday-container__modal-day-li')) {
            onDayChoose(e);
        }

        if (visibleMonthsPopUp && !e.composedPath().includes(monthModalRef.current) && !e.composedPath().includes(monthBtnRef.current)) {
            setVisibleMonthsPopUp(false);
        }

        if (e.target.classList.contains('birthday-container__modal-month-li')) {
            onMonthChoose(e);
        }

        if (visibleYearsPopUp && !e.composedPath().includes(yearsModalRef.current) && !e.composedPath().includes(yearBtnRef.current)) {
            setVisibleYearsPopUp(false);
        }

        if (e.target.classList.contains('birthday-container__modal-year-li')) {
            onYearChoose(e);
        }
    };

    const setYearsFunc = () => {
        const currentYear = new Date().getFullYear();
        const firstYear = 1903;
        let yearsArr = [];
        for (let i = firstYear; i < currentYear; i++) {
            yearsArr.push(i);
        }
        setYears(yearsArr.reverse());
    };

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
        return () => document.body.removeEventListener('click', handleOutsideClick);
    });

    useEffect(() => {
        setYearsFunc();
    }, []);

    let showDateModal = visibleDaysPopUp || visibleMonthsPopUp || visibleYearsPopUp;

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
            {showDateModal && <div className="birthday-container__modals">
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
            </div>}
        </div>
    );
};

export default DateOfBirth;
