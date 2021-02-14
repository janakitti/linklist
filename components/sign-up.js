import styled from "styled-components";
import WelcomeLayout from "./welcome-layout/welcome-layout";
import { useState } from "react";
import axios from "axios";

const SignUp = ({ setState }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const newUser = {
      username: user.username,
      email: user.email,
      password: user.password,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/",
        newUser
      );
      setState("SignIn");
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <WelcomeLayout>
      <Container>
        <Title>linklist</Title>
        <Subtitle>Sign up for better bookmarking</Subtitle>
        <form onSubmit={handleSubmit}>
          <input
            className="text-input-welcome"
            type="text"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
          ></input>
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
          <input
            className="text-input-welcome"
            type="password"
            name="passwordConfirm"
            placeholder="Confirm password"
            value={user.passwordConfirm}
            onChange={handleChange}
          ></input>
          <button type="submit" className="primary-button-full">
            Sign up
          </button>
        </form>
        <Info>
          Already have an account?{" "}
          <b onClick={() => setState("SignIn")}>Sign in</b>
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

const Input = styled.input`
  width: 30em;
  height: 3em;

  padding: 0 2em;
  margin: 0.5em 0;

  background: #ffffff;
  border: none;
  border-radius: 56.5px;
`;

export default SignUp;
