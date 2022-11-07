import React, { useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";

function Editissue() {
    let navigate = useNavigate();
    let params = useParams();
    const formik = useFormik({
      initialValues: {
        title: "",
        author: "",
        name: "",
        phoneno: "",
        issued: "",
        return: "",
      },
      validate: (values) => {
        let error = {};
  
        if (!values.title) {
          error.title = "Please enter the Book title";
        }
        if (!values.name) {
          error.name = "Please enter the author name";
        }
        if (values.name && (values.name.length <= 2 || values.name.length > 15)) {
          error.name = "Username must be between 3 to 15 characters";
        }
        if (!values.author) {
          error.author = "Please enter the author name";
        }
        if (values.phoneno.toString().length !== 10) {
          error.phoneno = "Please enter the valid Phone number";
        }
  
        if (!values.issued) {
          error.issued = "Required field";
        }
        if (!values.return) {
          error.return = "Required field";
        }
  
        return error;
      },
      onSubmit: async (values) => {
        try {
          await axios.put(
            `https://63515e843e9fa1244e5cec50.mockapi.io/issuedbook/${params.id}`,
            values
          );
          alert("Changed sucessfully");
          navigate("/portal/issuedbooks");
        } catch (error) {
          alert("Error");
        }
      },
    });

    useEffect(() => {
        async function fetchData() {
            try {
                let user = await axios.get(  `https://63515e843e9fa1244e5cec50.mockapi.io/issuedbook/${params.id}`)
                formik.setValues(user.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    
    }, [])

    return (
      <div className="container">
        <div>
          <h2>Book Request</h2>
        </div>
        <br></br>
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label>Book Title*</label>
                <input
                  name="title"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.title}
                  type={"text"}
                  className={`form-control ${
                    formik.touched.title && formik.errors.title ? "error-box" : ""
                  } ${
                    formik.touched.title && !formik.errors.title
                      ? "success-box"
                      : null
                  }`}
                />
                {formik.touched.title && formik.errors.title ? (
                  <span style={{ color: "red" }}>{formik.errors.title}</span>
                ) : null}
              </div>
            </div>
  
            <div className="col-lg-6">
              <div className="form-group">
                <label>Author name*</label>
                <input
                  name="author"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.author}
                  type={"text"}
                  className={`form-control ${
                    formik.touched.author && formik.errors.author
                      ? "error-box"
                      : ""
                  } ${
                    formik.touched.author && !formik.errors.author
                      ? "success-box"
                      : null
                  }`}
                />
                {formik.touched.author && formik.errors.author ? (
                  <span style={{ color: "red" }}>{formik.errors.author}</span>
                ) : null}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>Name*</label>
                <input
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  type={"text"}
                  className={`form-control ${
                    formik.touched.name && formik.errors.name ? "error-box" : ""
                  } ${
                    formik.touched.name && !formik.errors.name
                      ? "success-box"
                      : null
                  }`}
                />
                {formik.touched.name && formik.errors.name ? (
                  <span style={{ color: "red" }}>{formik.errors.name}</span>
                ) : null}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>Phone number*</label>
                <input
                  name="phoneno"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneno}
                  className={`form-control ${
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
            <div className="col-lg-4">
              <div className="form-group">
                <label>Issued Date*</label>
                <input
                  name="issued"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.issued}
                  type={"date"}
                  className={`form-control ${
                    formik.touched.issued && formik.errors.issued
                      ? "error-box"
                      : ""
                  } ${
                    formik.touched.issued && !formik.errors.issued
                      ? "success-box"
                      : null
                  }`}
                />
                {formik.touched.issued && formik.errors.issued ? (
                  <span style={{ color: "red" }}>{formik.errors.issued}</span>
                ) : null}
              </div>
            </div>
  
            <div className="col-lg-4">
              <div className="form-group">
                <label>Return Date*</label>
                <input
                  name="return"
                  onChange={formik.handleChange}
                  value={formik.values.return}
                  type={"date"}
                  className={`form-control ${
                    formik.touched.return && formik.errors.return
                      ? "error-box"
                      : ""
                  } ${
                    formik.touched.return && !formik.errors.return
                      ? "success-box"
                      : null
                  }`}
                />
  
                {formik.touched.return && formik.errors.return ? (
                  <span style={{ color: "red" }}>{formik.errors.return}</span>
                ) : null}
              </div>
            </div>
  
            <div className="col-lg-12">
              <div className="form-group">
                <input
                  disabled={formik.errors.values}
                  type={"submit"}
                  className="btn btn-success"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }

export default Editissue