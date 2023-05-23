import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/roboot.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Mar7be bik, <span>{userName}!</span>
      </h1>
      <h3>A5tar chkoun tchati m3ah.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 10rem;
    width:14rem;
  }
  span {
    color: #009999;
  }
`;
