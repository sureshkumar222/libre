import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function Books() {
  const [userData, setUsersData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    try {
      setLoading(true);
      const users = await axios.get(
        "https://63515e843e9fa1244e5cec50.mockapi.io/Books"
      );
      setUsersData(users.data);
      setLoading(false);
    } catch {
      alert("Error");
    }
  };

  const deleteUser = (id) => {
    swal({
      title: "This Data wants to delete",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://63515e843e9fa1244e5cec50.mockapi.io/Books/${id}`)
          .then(() => {
            getData();
          });

        swal(" Your file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Hope to safe!");
      }
    });
  };

  const getData = () => {
    axios
      .get(`https://63515e843e9fa1244e5cec50.mockapi.io/Books`)
      .then((getData) => {
        setUsersData(getData.data);
      });
  };
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800 align-items-center">
          ALL AVAILABLE BOOKS IN LIBRARY
        </h1>
      </div>
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Serial No.</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Publisher</th>
                    <th>Published year</th>
                    <th>Copies</th>
                    <th>Status</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Serial No.</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Publisher</th>
                    <th>Published year</th>
                    <th>Copies</th>
                    <th>Status</th>
                    <th className="text-center">Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {userData.map((data) => {
                    return (
                      <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.title}</td>
                        <td>{data.author}</td>
                        <td>{data.publisher}</td>
                        <td>{data.year}</td>
                        <td>{data.copies}</td>
                        <td>{data.status}</td>
                        <td>
                          <div className="text-center">
                          <Link                             
                              to={`/portal/edit-book/${data.id}`}
                              className="btn btn-secondary m-1"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => deleteUser(data.id)}
                              className="btn btn-danger m-1"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Books;