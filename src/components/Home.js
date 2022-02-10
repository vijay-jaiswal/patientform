import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../App";

function Home() {
  let navigate = useNavigate();
  const [handleIsLogin] = useContext(authenticate);

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password);
    if (password !== "") {
      if (password === "shubham") {
        localStorage.setItem("login", true);

        handleIsLogin();

        console.log("successfully login");

        navigate("/Query");
      } else {
        setError("wrong password");
      }
    } else {
      setError("This field is  required");
    }
    setPassword("");
  };
  return (
    <div className="form-home">
      <h3 className="text-danger text-center ">
        To enter please provide your password:
      </h3>

      <div className="container-fluid" id="wrap">
        <div className="row  justify-content-center">
          <form>
            <div></div>

            <label htmlFor="exampleInputPassword1">
              <h4 className=" text-primary"> *Password</h4>
            </label>
            <div className="form-group col-10 ">
              <input
                type="password"
                className="form-control 
          "
                id="exampleInputPassword1"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <p className="text-danger">{error}</p>
              {/* </div> */}
            </div>
            <div className="d-flex justify-content-center mt-3 login_container">
              <button onClick={handleSubmit} className="btn btn-primary  ">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
