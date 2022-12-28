import React from "react";
import { Formik } from "formik";
import "./Apps.css";
import * as Yup from 'yup'


const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("This is required!"),
  email: Yup.string().email("Valid Email").required("This is required!"),
  phone: Yup.number().required(),
  password: Yup.string().required().min(6, 'must be of 6 character Log.'),
  confirmPassword: Yup.string().required().min(6, 'must be of 6 character Log.').oneOf([Yup.ref("password")], "Password must be not same."),
  termsAndCondtions: Yup.boolean().oneOf([true], "Please accpet tems and condition"),
  additionalInfoFlag:Yup.boolean(),
  additionalInfo:Yup.string().when("additionalInfoFlag",{
    is:true,
    then:Yup.string().required("This fild is required"),
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
            {formik.touched.firstName && formik.errors.firstName && (
              <span className="field_error">{formik.errors.firstName}</span>)}
            <div className="form-group mt-2">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" className="form-control" name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName} />
            </div>
            {formik.touched.lastName && formik.errors.lastName && (
              <span className="field_error">{formik.errors.lastName}</span>)}
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
                {formik.touched.gender && formik.errors.gender && (
                  <span className="field_error">{formik.errors.gender}</span>)}
              </div>
            </div>
            <div className="form-group mt-2">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email} />
            </div>
            {formik.touched.email && formik.errors.email && (
              <span className="field_error">{formik.errors.email}</span>)}
            <div className="form-group mt-2">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" className="form-control" name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone} />
            </div>
            {formik.touched.phone && formik.errors.phone && (
              <span className="field_error">{formik.errors.phone}</span>)}
            <div className="form-group mt-2">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password} />
            </div>
            {formik.touched.password && formik.errors.password && (
              <span className="field_error">{formik.errors.password}</span>)}
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
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <span className="field_error">{formik.errors.confirmPassword}</span>)}

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
            {formik.touched.subscription && formik.errors.subscription && (
              <span className="field_error">{formik.errors.subscription}</span>)}




            <div className="form-group mt-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="additionalInfoFlag"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.additionalInfoFlag}
                />
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
              <textarea name="additionalInfo" className="form-control" id="additionalInfo" cols="30" rows="5"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.additionalInfo}
                >
              </textarea>
              {formik.touched.additionalInfo && formik.errors.additionalInfo && (
                <span className="field_error">{formik.errors.additionalInfo}</span>)}
            </div>
}



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
              {formik.touched.termsAndCondtions && formik.errors.termsAndCondtions && (
                <span className="field_error">{formik.errors.termsAndCondtions}</span>)}
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
