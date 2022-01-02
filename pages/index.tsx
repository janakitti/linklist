import type { NextPage } from "next";
import { useState } from "react";
import GoVerify from "../components/GoVerify";
import SignUp from "../components/SignUp";
import WelcomeLayout from "../components/WelcomeLayout";

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  return (
    <WelcomeLayout>
      {!!email ? <GoVerify email={email} /> : <SignUp setEmail={setEmail} />}
    </WelcomeLayout>
  );
};

export default Home;
