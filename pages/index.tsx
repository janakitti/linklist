import type { NextPage } from "next";
import { useState } from "react";
import SignUp from "../components/SignUp";
import WelcomeLayout from "../components/WelcomeLayout";

const Home: NextPage = () => {
  const [welcomeMode, setWelcomeMode] = useState("SignUp");

  return (
    <WelcomeLayout>
      <SignUp setWelcomeMode={setWelcomeMode} />
    </WelcomeLayout>
  );
};

export default Home;
