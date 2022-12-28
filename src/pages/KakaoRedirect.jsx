// 카카오 redirect 화면
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { actionCreators as userActions } from "../redux/modules/user";

import Spinner from "../components/Spinner";
import KakaoLogin from "../Redux/modules/user";

const KakaoRedirect = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  // redirect 화면에서 인가코드를 받아옴
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code)

  React.useEffect(async () => {
    await dispatch(KakaoLogin(code));
  }, []);

  return <Spinner />;
};

export default KakaoRedirect;