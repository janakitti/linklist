import type { NextPage } from "next";
import { useState } from "react";
import { Provider } from "react-redux";
import SignUp from "../components/SignUp";
import WelcomeLayout from "../components/WelcomeLayout";
import store from "../redux/store";

const Home: NextPage = () => {
  const [welcomeMode, setWelcomeMode] = useState("SignUp");

  return (
    <Provider store={store}>
      <WelcomeLayout>Sign in</WelcomeLayout>
    </Provider>
  );
};

export default Home;
