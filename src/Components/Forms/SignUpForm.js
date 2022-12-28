import React from "react";
import { Field, Formik, useField,Form } from "formik";
import "./Apps.css";
import * as Yup from 'yup'


const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("This is required!"),
  email: Yup.string().email("Valid Email").required("This is required!"),
  phone: Yup.number().required(),
  password: Yup.string().required().min(6, 'must be of 6 character Log.'),
  confirmPassword: Yup.string().required().min(6, 'must be of 6 character Log.').oneOf([Yup.ref("password")], "Password must be not same."),
  termsAndCondtions: Yup.boolean().oneOf([true], "Please accpet tems and condition"),
  additionalInfoFlag: Yup.boolean(),
  additionalInfo: Yup.string().when("additionalInfoFlag", {
    is: true,
    then: Yup.string().required("This fild is required"),
  })
})

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
        termsAndCondtions: false,
        additionalInfoFlag: false,
        additionalInfo: "",
        gender: "",
      }}
        validationSchema={SignUpSchema}

        onSubmit={(values) => {
          console.log(values);
        }}
      >

        {(formik) => (
          //onsubmit(formik.handleSubmit) = connect to fomik 


          // <form onSubmit={formik.handleSubmit}>
          <Form>   
            {/* {console.log(formik)} */}
            {console.log(formik.errors)}
            <div className="form-group">
              <label htmlFor="firstName"
              >
                First Name</label>
              <Field type="text" name='firstName' className="form-control" />
              {/* <input type="text" className="form-control" name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName} /> */}
            </div>
            {formik.touched.firstName && formik.errors.firstName && (
              <span className="field_error">{formik.errors.firstName}</span>)}
            <div className="form-group mt-2">
              <label htmlFor="lastName">Last Name</label>
              <Field type="text" name='lastName' className="form-control" />
            </div>
            {formik.touched.lastName && formik.errors.lastName && (
              <span className="field_error">{formik.errors.lastName}</span>)}
            <div className="form-group mt-2">
              <label>Gender</label>
              <div>
                <div className="form-check form-check-inline">
                  <Field type="radio" value="male" id="male" name='gender' className="form-check-input" />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <Field type="radio" value="female" id="female" name='gender' className="form-check-input" />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <Field type="radio" value="other" id="other" name='gender' className="form-check-input" />
                  <label className="form-check-label" htmlFor="other">
                    Other
                  </label>
                </div>
                {formik.touched.gender && formik.errors.gender && (
                  <span className="field_error">{formik.errors.gender}</span>)}
              </div>
            </div>
            <div className="form-group mt-2">
              <label htmlFor="email">Email</label>
              <Field type="text" name='email' className="form-control" id="email" />
            </div>
            {formik.touched.email && formik.errors.email && (
              <span className="field_error">{formik.errors.email}</span>)}
            <div className="form-group mt-2">
              <label htmlFor="phone">Phone Number</label>
              <Field type="text" name='phone' className="form-control" id="phone" />
            </div>
            {formik.touched.phone && formik.errors.phone && (
              <span className="field_error">{formik.errors.phone}</span>)}
            <div className="form-group mt-2">
              <label htmlFor="password">Password</label>
              <Field type="password" name='password' className="form-control" id="password" />
            </div>
            {formik.touched.password && formik.errors.password && (
              <span className="field_error">{formik.errors.password}</span>)}
            <div className="form-group mt-2">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field type="password" name='confirmPassword' className="form-control" id="confirmPassword" />
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <span className="field_error">{formik.errors.confirmPassword}</span>)}
            <div className="form-group mt-2">
              <label htmlFor="subscription">Subscription</label>
              <Field name="subscription" component="select" className="form-select">
                <option value="" disabled>Select</option>
                <option value="subscription-1" selected>Free</option>
                <option value="subscription-2">Pro</option>
                <option value="subscription-3">Enterprise</option>
              </Field>
            </div>
            {formik.touched.subscription && formik.errors.subscription && (
              <span className="field_error">{formik.errors.subscription}</span>)}
            <div className="form-group mt-2">
              <div className="form-check">
                <Field type="checkbox" name='additionalInfoFlag' className="form-check-input" id="additionalInfoFlag" />
                <label className="form-check-label" htmlFor="termsAndCondtions">
                  AdditionalInfoFlag.
                </label>
              </div>
              {formik.touched.additionalInfoFlag && formik.errors.additionalInfoFlag && (
                <span className="field_error">{formik.errors.additionalInfoFlag}</span>)}
            </div>
            {formik.values.additionalInfoFlag &&
              <div className="form-group mt-2">
                <label htmlFor="additionalInfo">Enter Additioal Information </label>
                <Field as="textarea" name='additionalInfo' className="form-control" value={formik.additionalInfo} id="additionalInfo" />
                {formik.touched.additionalInfo && formik.errors.additionalInfo && (
                  <span className="field_error">{formik.errors.additionalInfo}</span>)}
              </div>
            }
            <div className="form-group mt-2">
              <div className="form-check">
                <Field type="checkbox" name='termsAndCondtions' className="form-check-input" id="termsAndCondtions" />
                <label className="form-check-label" htmlFor="termsAndCondtions">
                  Accept terms and conditions.
                </label>
              </div>
              {formik.touched.termsAndCondtions && formik.errors.termsAndCondtions && (
                <span className="field_error">{formik.errors.termsAndCondtions}</span>)}
            </div>
            <div className="d-grid mt-2">
              <button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SigninForm;
