import "./App.css";
import React, { useState } from "react";
import FormInput from "./components/FormInput";

const App = () => {
    const [values, setValues] = useState({
        username: "",
        dateofBirth: "",
        email: "",
        age: "",
        password: "",
        confirmpassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",

            placeholder: "Username",
            ErroMessage:
                "username should be 4-18 character and shouldn't include any special character",
            label: "Username",
            pattern: "^[a-zA-Z0-9]{4,16}$",
            required: true,
        },
        {
            id: 2,
            name: "birthday",
            type: "date",

            placeholder: "BirthDay",

            label: "BirthDay",
        },
        {
            id: 3,
            name: "email",
            type: "email",

            placeholder: "email",
            ErroMessage: "it should be a valid email",
            label: "Email",
            required: true,
        },
        {
            id: 4,
            name: "age",
            type: "text",

            placeholder: "Age",
            ErroMessage: "not less than 16 years and not more than 99 ",
            label: "Age",
            pattern: "^(1[6-9]|[2-5][0-9]|9[0-9])$",
            required: true,
        },
        {
            id: 5,
            name: "password",
            type: "password",

            placeholder: "password",
            ErroMessage:
                "must not be less than 7 character and must have at least a letter, a number and a special character",
            label: "PassWord",
            pattern:
                "^(?=.*[a-zA-Z])(?=.*d)(?=.*[!@#$%^&*()_+])[A-Za-zd][A-Za-zd!@#$%^&*()_+]{7,19}$",
            required: true,
        },
        {
            id: 6,
            name: "confrimpassword",
            type: "password",

            placeholder: "confirmpassword",
            ErroMessage: "password don't match",
            label: "ConfirmPassWord",
            pattern: values.password,
            required: true,
        },
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        // const data = new FormData(e.target);
        // console.log(Object.fromEntries(data.entries()));
    };
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    console.log(values);
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}

                <button>Submit</button>
            </form>
        </div>
    );
};

export default App;
