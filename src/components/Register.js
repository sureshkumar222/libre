import axios from "axios";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Usercontext";

function Register() {
  const {setReg} = useContext(UserContext);
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneno:"",
      password: "",
   
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Please enter the name";
      } else if (values.name.length > 15) {
        errors.name = "must be 15 characters or less";
      }
      if (!values.email) {
        errors.email = "Please enter the email id";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (values.phoneno.toString().length !== 10) {
        errors.phoneno = "Please enter the valid Phone number";
      }

      if (!values.password) {
        errors.password = "Please enter the password";
      } else if (values.password.length < 8) {
        errors.password = "must be 8 characters";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://63463cc5745bd0dbd3791eaf.mockapi.io/register",
          values
        );
        {
          navigate("/");
        }
        alert("Successfully Registerd & wait for Admin Confirmation");
        setReg({ name: values.name , email: values.email, phoneno: values.phoneno});
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    },
  });
  return (
    <div className="container">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-block">
            <img className="bg-register-image" src="./image/register.jpg" alt="register"/>
            </div>
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form className="user" onSubmit={formik.handleSubmit}>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        type={"text"}
                        className={`form-control form-control-user ${
                          formik.touched.name && formik.errors.name
                            ? "error-box"
                            : ""
                        } ${
                          formik.touched.name && !formik.errors.name
                            ? "success-box"
                            : null
                        }`}
                        id="exampleFirstName"
                        placeholder="Full Name"
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.name}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      className={`form-control form-control-user ${
                        formik.touched.email && formik.errors.email
                          ? "error-box"
                          : ""
                      } ${
                        formik.touched.email && !formik.errors.email
                          ? "success-box"
                          : null
                      }`}
                      type="email"
                      id="exampleInputEmail"
                      placeholder="Email Address"
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <span style={{ color: "red" }}>
                        {formik.errors.email}
                      </span>
                    ) : null}
                  </div>
                
              <div className="form-group row">
              <div className="col-lg-6">
                <input
                  name="phoneno"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneno}
                  placeholder="Phone number"
                  className={`form-control  form-control-user ${
                    formik.touched.phoneno && formik.errors.phoneno
                      ? "error-box"
                      : ""
                  } ${
                    formik.touched.phoneno && !formik.errors.phoneno
                      ? "success-box"
                      : null
                  }`}
                />
  
                {formik.touched.phoneno && formik.errors.phoneno ? (
                  <span style={{ color: "red" }}>{formik.errors.phoneno}</span>
                ) : null}
              </div>
            </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        className={`form-control form-control-user ${
                          formik.touched.password && formik.errors.password
                            ? "error-box"
                            : ""
                        } ${
                          formik.touched.password && !formik.errors.password
                            ? "success-box"
                            : null
                        }`}
                        type="password"
                        id="exampleInputPassword"
                        placeholder="Password"
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.password}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <button type={"submit"} className="btn btn-primary btn-user btn-block">
                    Register Account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;