import React from "react";
import { Formik } from "formik";
import "./Apps.css";
const SigninForm = () => {
  return (
    <>
      <Formik initialValues={{
        // first time load how to set?
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        subscription: "",
        termsAndCondtions: "",
        gender: "",
      }}
        validate={(values) => {
          const errors = {};
          // firstname
          if (!values.firstName) {
            errors.firstName = "Required!";
          }
          // lastname
          if (!values.lastName) {
            errors.lastName = "Required!";
          }
          // email
          if (!values.email) {
            errors.email = "Required!";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Not Valid Email!"
          }
          // phone
          if (!values.phone) {
            errors.phone = "Required!";
          } else if (values.phone.length < 10 || values.phone.length > 10) {
            errors.phone = "Numbar is not 10 Digits";
          } else if (/^\d{10}$/.test()) {
            errors.phone = "num";
          }
          // password
          if (!values.password) {
            errors.password = "Required!";
          }
          // confirm Password
          if (!values.confirmPassword) {
            errors.confirmPassword = "Required!";
          } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Confirm Password is not mach Password";
          }


          // Gender
          if(!values.gender){
            errors.gender ="Required!"
          }
          // subscription
          if(!values.subscription){
            errors.subscription ="Required!"
          }
          // 
          if(!values.termsAndCondtions){
            errors.termsAndCondtions ="Required!"
          }

          return errors;
          // console.log(values);
        }}

        onSubmit={(values) => {
          console.log(values);
        }}
      >

        {(formik) => (
          //onsubmit(formik.handleSubmit) = connect to fomik 
          <form onSubmit={formik.handleSubmit}>
            {/* {console.log(formik)} */}
            {console.log(formik.errors)}
            <div className="form-group">
              <label htmlFor="firstName"
              >
                First Name</label>
              <input type="text" className="form-control" name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName} />
            </div>
            <span className="field_error">{formik.errors.firstName}</span>
            <div className="form-group mt-2">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" className="form-control" name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName} />
            </div>
            <span className="field_error">{formik.errors.lastName}</span>
            <div className="form-group mt-2">
              <label>Gender</label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.gender === "male"}
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.gender === "female"}
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="other"
                    value="other"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.gender === "other"}
                  />
                  <label className="form-check-label" htmlFor="other">
                    Other
                  </label>
                </div>
                <span className="field_error">{formik.errors.lastName}</span>
              </div>
            </div>
            <div className="form-group mt-2">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email} />
            </div>
            <span className="field_error">{formik.errors.email}</span>
            <div className="form-group mt-2">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" className="form-control" name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone} />
            </div>
            <span className="field_error">{formik.errors.phone}</span>
            <div className="form-group mt-2">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password} />
            </div>
            <span className="field_error">{formik.errors.password}</span>
            <div className="form-group mt-2">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
            </div>
            <span className="field_error">{formik.errors.confirmPassword}</span>

            <div className="form-group mt-2">
              <label htmlFor="confirmPassword">Subscription</label>
              <select className="form-control" name="subscription"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subscription}
              >
                <option value="">Select</option>
                <option value="subscription-1">Free</option>
                <option value="subscription-2">Pro</option>
                <option value="subscription-3">Enterprise</option>
              </select>
            </div>
            <span className="field_error">{formik.errors.subscription}</span>

            <div className="form-group mt-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="termsAndCondtions"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.termsAndCondtions}
                />
                <label className="form-check-label" htmlFor="termsAndCondtions">
                  Accept terms and conditions.
                </label>
              </div>
              <span className="field_error">{formik.errors.termsAndCondtions}</span>
            </div>

            <div className="d-grid mt-2">
              <button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SigninForm;
