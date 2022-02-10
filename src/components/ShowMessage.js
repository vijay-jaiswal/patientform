import React from "react";
import { useNavigate } from "react-router-dom";

function ShowMessage() {
  let navigate = useNavigate();
  const handleMessage = () => {
    navigate("/");
    localStorage.setItem("login", false);
  };
  return (
    <>
      <h1 className="text-center">Thank you for your request</h1>
      <div>
        <p className="text-center">
          According to the information you have supplied,the patient is not
          eligible to enroll in the co-pay card program
        </p>
      </div>

      <div className="d-flex justify-content-center mt-3 login_container">
        <button className="bg-primary text-white" onClick={handleMessage}>
          BACK TO HOMEPAGE
        </button>
      </div>
    </>
  );
}

export default ShowMessage;
