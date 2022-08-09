import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Details from "../pages/Details";
import { AddUser } from "../helpers/functions";
import PrivateRouter from "./PrivateRouter";
import { AuthContext } from "../contexts/AuthContext";
import UpdateBlog from "../pages/UpdateBlog";

const initialValues = { title: "", img: "", content: "" };

const AppRouter = () => {
  const  currentUser  = useContext(AuthContext);
  const [info, setInfo] = useState(initialValues);
  const navigate = useNavigate();
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo(initialValues);
    AddUser(info,currentUser.email);
    navigate("/");
    initialValues();
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="login"
          element={<Login email={email} setEmail={setEmail} />}
        />
        <Route path="/" element={<Dashboard />} />
        <Route path="details/:id" element={<PrivateRouter />}>
          <Route path="" element={<Details info={info} setInfo={setInfo} handleSubmit={handleSubmit} />} />
        </Route>

        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route
          path="newblog"
          element={
            <NewBlog
              info={info}
              setInfo={setInfo}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route path="logout" element={<Login />} />
        <Route
          path="updateblog"
          element={
            <UpdateBlog
              info={info}
              setInfo={setInfo}
              handleSubmit={handleSubmit}
            />
          }
        />
      </Routes>
    </>
  );
};

export default AppRouter;
