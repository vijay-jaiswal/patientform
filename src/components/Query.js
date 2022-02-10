import React from "react";
import { useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";

import * as yup from "yup";

export const Query = () => {
  let navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        one: "",
        two: "",
        three: "",
        four: "",
      }}
      validationSchema={yup.object({
        one: yup.string().required("this field is required"),
        two: yup.string().required("this field is required"),
        three: yup.string().required("this field is required"),
        four: yup.string().required("this field is required"),
      })}
      onSubmit={() => {
        console.log("query form submitted");
        navigate("/EnrollmentForm");
      }}
    >
      {(props) => (
        <Form>
          <div id="my-radio-group">
            <h5 className=" text-primary">
              Please confirm that you are eligible:
            </h5>
          </div>

          <div role="group" aria-labelledby="my-radio-group">
            <label htmlFor="Address1">
              *Is the patient a resident of India or Indian territory ?
            </label>

            <div>
              <label>
                <Field type="radio" name="one" value="a" />
                Yes
              </label>
              <label>
                <Field type="radio" name="one" value="b" />
                No
              </label>
            </div>
            <p className="text-danger">
              <ErrorMessage name="one"></ErrorMessage>
            </p>
          </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label htmlFor="Address1">
              *Does the patient have commercial or private insurance ?{" "}
            </label>

            <div>
              <label>
                <Field type="radio" name="two" value="a" />
                Yes
              </label>
              <label>
                <Field type="radio" name="two" value="b" />
                No
              </label>
            </div>
            <p className="text-danger">
              <ErrorMessage name="two"></ErrorMessage>
            </p>
          </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label htmlFor="Address1">
              *Are the patient prescription paid for in part or full under any
              state or fedrally funded program including but not the limited to
              medicare ,
            </label>

            <div>
              <label>
                <Field type="radio" name="three" value="a" />
                Yes
              </label>
              <label>
                <Field type="radio" name="three" value="b" />
                No
              </label>
            </div>
            <p className="text-danger">
              <ErrorMessage name="three"></ErrorMessage>
            </p>
          </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label htmlFor="Address1">
              *Are the patient's prescription paid for in full by the military{" "}
            </label>

            <div>
              <label>
                <Field type="radio" name="four" value="a" />
                Yes
              </label>
              <label>
                <Field type="radio" name="four" value="b" />
                No
              </label>
            </div>
            <p className="text-danger">
              <ErrorMessage name="four"></ErrorMessage>
            </p>
          </div>
          <p>If you answered yes to 3 or 4 ,you..........</p>

          <button
            className="bg-primary"
            type="submit"
            disabled={props.isValid === false}
          >
            NEXT
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Query;
