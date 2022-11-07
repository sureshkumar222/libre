import "./App.css";
import "../src/fontawesome-free/css/all.min.css";
import "../src/css/sb-admin-2.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import PortalLayout from "./PortalLayout";
import Home from "./components/Home";
import Books from "./components/Books";
import Addbooks from "./components/Addbooks";
import Allissuedbooks from "./components/Allissuedbooks";
import Editissue from "./components/Editissue";
import Editbook from "./components/Editbook";
import Issuerequest from "./components/Issuerequest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/portal" element={<PortalLayout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="books" element={<Books />}></Route>
          <Route path="Addbooks" element={<Addbooks />}></Route>
          <Route path="edit-book/:id" element={<Editbook />}></Route>       
          <Route path="issue-request" element={<Issuerequest />}></Route>
          <Route path="issuedbooks" element={<Allissuedbooks />}></Route>
          <Route path="edit-issue/:id" element={<Editissue />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;