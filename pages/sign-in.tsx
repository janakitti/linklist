import type { NextPage } from "next";
import SignIn from "../components/SignIn";
import WelcomeLayout from "../components/WelcomeLayout";

const SignInPage: NextPage = () => {
  return (
    <WelcomeLayout>
      <SignIn />
    </WelcomeLayout>
  );
};

export default SignInPage;
