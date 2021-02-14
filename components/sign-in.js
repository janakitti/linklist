import styled from "styled-components";
import WelcomeLayout from "./welcome-layout/welcome-layout";
import { useState } from "react";
import axios from "axios";
import { Router, useRouter } from "next/router";

const SignIn = ({ setState }) => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const creds = {
      email: user.email,
      password: user.password,
    };

    try {
      const res = await axios.post("http://localhost:4000/api/auth/", creds, {
        withCredentials: true,
      });
      router.push("/links");
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <WelcomeLayout>
      <Container>
        <Title>linklist</Title>
        <Subtitle>Sign in for better bookmarking</Subtitle>
        <form onSubmit={handleSubmit}>
          <input
            className="text-input-welcome"
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          ></input>
          <input
            className="text-input-welcome"
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          ></input>
          <button type="submit" className="primary-button-full">
            Sign in
          </button>
        </form>
        <Info>
          Don't have an account?{" "}
          <b onClick={() => setState("SignUp")}>Sign up</b>
        </Info>
      </Container>
    </WelcomeLayout>
  );
};

const Info = styled.p`
  margin: 2em 0 0 0;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  text-align: center;

  color: #767676;

  cursor: pointer;
`;

const Container = styled.div`
  position: relative;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-family: Poppins;
  font-weight: 700;
  font-size: 2em;
`;

const Subtitle = styled.h2`
  font-family: Poppins;
  font-weight: 300;
  font-size: 1em;

  margin: 0 0 2em 0;
`;

export default SignIn;
