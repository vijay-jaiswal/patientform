import React from "react";
import { useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";

import * as yup from "yup";

export const EnrollmentForm = () => {
  let navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        PatientFirstName: "",
        PatientLastName: "",

        Address1: "",
        Address2: "",
        city: "",
        state: "",
        Salary: "",
        ZipCode: "",
        dob: "",
        phone: "",

        EmailId: "",
        method: "",
      }}
      validationSchema={yup.object({
        PatientFirstName: yup
          .string()
          .max(20, "Name should not exceed 20 Characters")
          .required("Please Enter Patient First  Name"),

        PatientLastName: yup
          .string()
          .max(20, "Name should not exceed 20 Characters")
          .required("Please Enter Patient Last Name"),

        Address1: yup
          .string()

          .required("Please Enter address"),

        city: yup
          .string()

          .required("Please Enter city"),
        state: yup
          .string()

          .required("Please select state"),
        ZipCode: yup
          .string()
          .matches(/^\d{6}$/, "zip code must be 6 digit ")

          .required("Please Enter zip code"),
        EmailId: yup
          .string()
          .email("Invalid email")
          .required("Email is Required"),
        dob: yup.string().required("Please Enter date of birth"),
        phone: yup
          .string()
          .matches(/^\d{10}$/, "Phone number must be 10 digit ")
          .required("A phone number is required"),
      })}
      onSubmit={() => {
        navigate("/ShowMessage");

        console.log("submitted");
      }}
    >
      {(props) => (
        <div className="form-enroll">
          <Form>
            <h2 className="text-center text-danger">Patient Information</h2>

            <div className="container-fluid" id="wrap">
              <div className="row  justify-content-center">
                <div className="col-md-6 col-md-offset-3 justify-content-center">
                  <div className="row">
                    <div className="col-xs-6 col-md-6">
                      <label htmlFor="PatientFirstName">
                        *Patient First Name
                      </label>
                      <Field name="PatientFirstName" type="text"></Field>
                      <p className="text-danger">
                        <ErrorMessage name="PatientFirstName"></ErrorMessage>
                      </p>
                    </div>
                    <div className="col-xs-6 col-md-6">
                      <label htmlFor="PatientLastName">
                        *Patient Last Name
                      </label>

                      <Field name="PatientLastName" type="text"></Field>
                      <p className="text-danger">
                        <ErrorMessage name="PatientLastName"></ErrorMessage>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-6 col-md-6">
                      <label htmlFor="Address1">*Address Line 1 </label>

                      <Field name="Address1" type="text"></Field>
                      <p className="text-danger">
                        <ErrorMessage name="Address1"></ErrorMessage>
                      </p>
                    </div>
                    <div className="col-xs-6 col-md-6">
                      <label htmlFor="Address2">*Address Line 2 </label>

                      <Field name="Address2" type="text"></Field>
                    </div>
                  </div>
                  {/* <Form> */}
                  <div className="row">
                    <div className="col-xs-4 col-md-4">
                      <label htmlFor="city">*Patient city </label>

                      <Field name="city" type="text"></Field>
                      <p className="text-danger">
                        <ErrorMessage name="city"></ErrorMessage>
                      </p>
                    </div>
                    <div className="col-xs-5 col-md-5">
                      <label>
                        *State
                        <Field name="state" as="select">
                          <option defaultValue="select">Select State</option>

                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Andaman and Nicobar Islands">
                            Andaman and Nicobar Islands
                          </option>
                          <option value="Arunachal Pradesh">
                            Arunachal Pradesh
                          </option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Chandigarh">Chandigarh</option>
                          <option value="Chhattisgarh">Chhattisgarh</option>
                          <option value="Dadar and Nagar Haveli">
                            Dadar and Nagar Haveli
                          </option>
                          <option value="Daman and Diu">Daman and Diu</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Lakshadweep">Lakshadweep</option>
                          <option value="Puducherry">Puducherry</option>
                          <option value="Goa">Goa</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Himachal Pradesh">
                            Himachal Pradesh
                          </option>
                          <option value="Jammu and Kashmir">
                            Jammu and Kashmir
                          </option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Manipur">Manipur</option>
                          <option value="Meghalaya">Meghalaya</option>
                          <option value="Mizoram">Mizoram</option>
                          <option value="Nagaland">Nagaland</option>
                          <option value="Odisha">Odisha</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Sikkim">Sikkim</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Tripura">Tripura</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Uttarakhand">Uttarakhand</option>
                          <option value="West Bengal">West Bengal</option>
                        </Field>
                        <p className="text-danger">
                          <ErrorMessage name="state"></ErrorMessage>
                        </p>
                      </label>
                    </div>
                    {/* <div className="row"> */}
                    <div className="col-xs-3 col-md-3">
                      <label htmlFor="ZipCode">*Patient Zip Code </label>

                      <Field name="ZipCode" type="number"></Field>
                      <p className="text-danger">
                        <ErrorMessage name="ZipCode"></ErrorMessage>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-6 col-md-6">
                      <label htmlFor="dob">*Patient Date of Birth </label>

                      <Field name="dob" type="date"></Field>
                      <p className="text-danger">
                        <ErrorMessage name="dob"></ErrorMessage>
                      </p>
                    </div>
                    {/* </div> */}
                    <div className="col-xs-6 col-md-6">
                      <label htmlFor="phone">Patient Phone Number </label>

                      <Field name="phone" type="number"></Field>
                      <p className="text-danger">
                        <ErrorMessage name="phone"></ErrorMessage>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-6 col-md-6">
                      <label htmlFor="EmailId">*Patient Email-Id</label>

                      <Field name="EmailId" type="text"></Field>
                      <p className="text-danger">
                        <ErrorMessage name="EmailId"></ErrorMessage>
                      </p>
                    </div>
                    <div className="col-xs-6 col-md-6">
                      <p>
                        <label>
                          *Patient Prefereed Method of Contact :
                          <Field name="method" as="select">
                            <option defaultValue="select">Select </option>

                            <option value="red">Social media</option>

                            <option value="green">website </option>

                            <option value="blue">direct</option>
                          </Field>
                        </label>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-3 login_container">
                    <button type="submit" disabled={props.isValid === false}>
                      Submit
                    </button>
                  </div>{" "}
                </div>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

// const element=<EmployeeComponent></EmployeeComponent>

// ReactDOM.render(element,document.getElementById("root"));
