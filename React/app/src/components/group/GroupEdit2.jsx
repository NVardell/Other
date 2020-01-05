import React, {Component} from 'react';
import {Field, Formik} from "formik";
import {DisplayFormikState} from "./GroupHelper";
import * as Yup from "yup";

// https://blog.logrocket.com/getting-started-with-react-select/

class GroupEdit2 extends Component {
render() {
    return(  <div>
        <h1>My Form</h1>
        <Formik
            initialValues={{ email: "" }}
            onSubmit={async values => {
                await new Promise(resolve => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email()
                    .required("Required")
            })}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset
                } = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email" style={{ display: "block" }}>
                            Email
                        </label>
                        <input
                            id="email"
                            placeholder="Enter your email"
                            type="text"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.email && touched.email
                                    ? "text-input error"
                                    : "text-input"
                            }
                        />
                        {errors.email && touched.email && (
                            <div className="input-feedback">{errors.email}</div>
                        )}

                        <button
                            type="button"
                            className="outline"
                            onClick={handleReset}
                            disabled={!dirty || isSubmitting}
                        >
                            Reset
                        </button>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>

                        <DisplayFormikState {...props} />
                    </form>
                );
            }}
        </Formik>

    </div>);
}
}

export default GroupEdit2;