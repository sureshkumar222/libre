import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function Addbooks() {
    let navigate=useNavigate();
    const formik = useFormik({
      initialValues: {
    
        id: "",
        title: "",
        author: "",
        publisher: "",
        year:"",
        copies: "",
        status:""
      },
      validate: (values) => {
        let error = {};
  
    
        if (!values.title) {
          error.title = "Please enter the Book title";
        }
  
        if (!values.author) {
          error.author = "Please enter the author name";
        }
        if (!values.publisher) {
          error.publisher = "please enter the publisher";
        }
        
        if (!values.copies) {
            error.copies = "Please enter the No of copies";
          }
          if (!values.status) {
            error.status = "Please enter the status";
          }
  
        return error;
      },
      onSubmit: async (values) => {
        try {
          await axios.post(
            "https://63515e843e9fa1244e5cec50.mockapi.io/Books",
            values
          );
          alert("Form submitted sucessfully");
          navigate('/portal/books')
        } catch (error) {
          alert("Error");
        }
      },
    });
    return (
      <div className="container">
        <div>
          <h2>Add a new book</h2>
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
                    formik.touched.title && formik.errors.title
                      ? "error-box"
                      : ""
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
                    formik.touched.author && formik.errors.author ? "error-box" : ""
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
            <div className="col-lg-4">
              <div className="form-group">
                <label>Publisher</label>
                <input
                  name="publisher"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.publisher}
                  className={`form-control ${
                    formik.touched.publisher && formik.errors.publisher? "error-box" : ""
                  } ${
                    formik.touched.publisher && !formik.errors.publisher
                      ? "success-box"
                      : null
                  }`}
                />
                 
                {formik.touched.publisher && formik.errors.publisher? (
                  <span style={{ color: "red" }}>{formik.errors.publisher}</span>
                ) : null}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>Published Year</label>
                <input
                  name="year"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.year}
                  type={"date"}               
                  className="form-control"
                />
               
              </div>
            </div>
           
            <div className="col-lg-4">
              <div className="form-group">
                <label>Number of copies</label>
                <input
                  name="copies"
                  onChange={formik.handleChange}
                  value={formik.values.copies}
                  type={"number"}
                  className={`form-control ${
                    formik.touched.copies && formik.errors.copies ? "error-box" : ""
                  } ${
                    formik.touched.copies && !formik.errors.copies
                      ? "success-box"
                      : null
                  }`}
                />
               
                {formik.touched.copies && formik.errors.copies ? (
                  <span style={{ color: "red" }}>{formik.errors.copies}</span>
                ) : null}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>Status</label>
                <select
                  name="status"
                  onChange={formik.handleChange}
                  value={formik.values.status}
            
                  className={`form-control ${
                    formik.touched.status && formik.errors.status? "error-box" : ""
                  } ${
                    formik.touched.status && !formik.errors.status
                      ? "success-box"
                      : null
                  }`}
                >
                  <option>AVAILABLE</option>
                  <option>Not AVAILABLE</option>                
                </select>
                {formik.touched.status && formik.errors.status ? (
                  <span style={{ color: "red" }}>{formik.errors.status}</span>
                ) : null}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <input disabled={formik.errors.values} type={"submit"} className="btn btn-success" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }

export default Addbooks