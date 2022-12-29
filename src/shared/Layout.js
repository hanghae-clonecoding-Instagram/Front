import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

function Layout({ children }) {
  return (
    <LayoutTotal>
      <Header />
      <div>{children}</div>
    </LayoutTotal>
  );
}
const LayoutTotal = styled.div`
  /* position: relative; */
`;

export default Layout;
