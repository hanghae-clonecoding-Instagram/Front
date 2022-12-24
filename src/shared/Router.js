import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Mypage from "../pages/Mypage";
import Login from "../pages/Login";
import PostPage from "../pages/PostPage";
import NotFound from "../pages/NotFound";
import UserEdit from "../pages/UserEdit";
import Signup from "../pages/Signup";


// import LoginPage from "../pages/LoginPage";

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postPage" element={<PostPage />} />
        <Route path="/userEdit" element={<UserEdit />} />
        <Route path="/*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  );
};

export default Router;
