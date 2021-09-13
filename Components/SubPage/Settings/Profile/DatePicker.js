import {useState,useEffect,useRef} from 'react'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {FaCalendar} from "react-icons/fa";

const DatePicker = ({dob,setDob,dobError,setDobError,formSubmitted}) => {
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

    if(formSubmitted){
      setValue(null);
    }


    const changeValue = (e) => {
      setDob(e);
      setShowCalendar(false);
      setDobError(false);
    };

    return (
      <div
        className={"relative flex border-2 rounded-md"}
        ref={wrapperRef}
        style={{ padding: "7px" }}
      >
        {/* Check in date pick field */}
        <FaCalendar className="mt-1 mr-2" />
        <input
          type="text"
          className={"w-full focus:outline-none text-gray-400"}
          onClick={() => setShowCalendar(!showCalendar)}
          value={
            dob
              ? `${
                  dob?.getMonth() + 1
                }/${dob?.getDate()}/${dob?.getFullYear()}`
              : "Date of Birth"
          }
          readOnly
        />

        {/* calender component that opens when to pick date */}

        {showCalendar && (
          <Calendar
            className="absolute top-10 -left-1"
            value={dob}
            onClickDay={changeValue}
          />
        )}

        
      </div>
    );
}

export default DatePicker
