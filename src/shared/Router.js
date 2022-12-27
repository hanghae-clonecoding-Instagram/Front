import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Mypage from "../pages/Mypage";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import UserEdit from "../pages/UserEdit";
// import PostEdit from "../pages/PostEdit";
import Layout from "./Layout";
import KakaoRedirect from "../pages/KakaoRedirect";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/mypage" element={<Mypage />} />
          {/* <Route path="/postEdit" element={<PostEdit />} /> */}
          <Route path="/userEdit" element={<UserEdit />} />
          {/* 카카오 리다이렉트 url */}
          {/* http://localhost:3000/api/user/kakao/callback */}
          {/* <Route path="api/user/kakao/callback" element={<KakaoRedirect />} /> */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
