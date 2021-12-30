import type { NextPage } from "next";
import SignUp from "../components/SignUp";
import WelcomeLayout from "../components/WelcomeLayout";

const Home: NextPage = () => {
  return (
    <WelcomeLayout>
      <SignUp />
    </WelcomeLayout>
  );
};

export default Home;
