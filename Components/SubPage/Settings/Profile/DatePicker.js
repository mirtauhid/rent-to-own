import { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaCalendar } from "react-icons/fa";
import { Field, ErrorMessage } from "formik";

const DatePicker = () => {
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

  return (
    <>
      <div
        className={"relative flex border-2 rounded-md"}
        ref={wrapperRef}
        style={{ padding: "7px" }}
      >
        <Field name="dob">
          {(props) => {
            const { field } = props;
            return (
              <>
                <FaCalendar className="mt-1 mr-2" />
                <input
                  className={`w-full focus:outline-none ${field.value ? "text-gray-600":"text-gray-400"}`}
                  onClick={() => setShowCalendar(!showCalendar)}
                  {...field}
                  value={field.value ? `${new Date(field.value).getMonth()}/${new Date(
                    field.value
                  ).getDate()}/${new Date(field.value).getFullYear()}` : "Date of Birth"}
                />
                {showCalendar && (
                  <Calendar
                    className="absolute top-10 -left-1"
                    onClickDay={(e) => {
                      props.form.setFieldValue("dob", e)
                      setShowCalendar(false);
                    }}
                  />
                )}
              </>
            );
          }}
        </Field>
      </div>
      <ErrorMessage name="dob" component="div" className="text-red-500" />
    </>
  );
};

export default DatePicker;
