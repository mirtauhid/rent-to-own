import {useState,useEffect,useRef} from 'react'
import style from "./style.module.css";
import formateDate from "./formateDate";
import toIsoDate from './toIsoDate';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DatePicker = ({setDates, locationId,suiteId}) => {
    const [value, setValue] = useState([
      "",
      "",
    ]);
    const [showCalendar, setShowCalendar] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
      function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setShowCalendar(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [wrapperRef]);

    useEffect(()=>{
        setValue(["",""])
    },[locationId,suiteId]);

    const changeValue = (e) => {
      setValue(() => {
        return [formateDate(e[0]), formateDate(e[1])];
      });
      setDates([toIsoDate(e[0]), toIsoDate(e[1])]);
      setShowCalendar(false);
    };
    return (
      <div className={style["test-datePicker-wrapper"]} ref={wrapperRef}>
        {/* Check in date pick field */}

        <input
          type="text"
          className={style["test-datePicker-field"]}
          onClick={() => setShowCalendar(!showCalendar)}
          placeholder="Check-in"
          value={value[0]}
          readOnly
        />

        {/* Check out date pick field */}

        <input
          type="text"
          placeholder="Check-out"
          className={style["test-datePicker-field"]}
          onClick={() => setShowCalendar(!showCalendar)}
          value={value[1]}
          readOnly
        />

        {/* calender component that opens when to pick date */}

        {showCalendar && (
          <Calendar
            selectRange
            onChange={changeValue}
            minDate={new Date()}
            className={style["test-calender"]}
          />
        )}
      </div>
    );
}

export default DatePicker
