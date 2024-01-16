import React, { useState } from "react";
import "../App.css";
import "../components/FormInput.css";

const FormInput = (props) => {
    const { label, onChange, ErroMessage, id, ...inputProps } = props;
    const [focused, setFocused] = useState(false);
    const handleFocus = () => {
        setFocused(true);
    };
    return (
        <div className="formInput">
            <label>{label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === "confirmPassword " && setFocused(true)
                }
                focused={focused.toString()}
            />
            <span>{ErroMessage}</span>
        </div>
    );
};

export default FormInput;
