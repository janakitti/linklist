import axios from "axios";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import Button from "./Button";
import Input from "./Input";

export interface ISignUpProps {
  setEmail: Dispatch<SetStateAction<string>>;
}

const SignUp: React.FC<ISignUpProps> = ({ setEmail }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    if (user.password != user.passwordConfirm) {
      setErrorMsg("Passwords must match.");
      setIsLoading(false);
      return;
    }
    const newUser = {
      username: user.username,
      email: user.email,
      password: user.password,
    };

    try {
      let a = await axios.post("/api/sign-up", { param: newUser });
      setIsLoading(false);
      setEmail(user.email);
    } catch (ex: any) {
      if (ex?.response?.status === 400) {
        setErrorMsg("Invalid user info.");
      } else {
        setErrorMsg("Something went wrong...");
      }
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold">linklist</h1>
      <h2 className="text-sm text-dark my-2">Sign up for better bookmarking</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-1/2">
        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="passwordConfirm"
          placeholder="Confirm password"
          value={user.passwordConfirm}
          onChange={handleChange}
          required
        />
        <Button color={"primary"} onClick={() => {}} isLoading={isLoading}>
          Sign up
        </Button>
      </form>
      <p className="text-sm text-warn my-2">{errorMsg}</p>
      <p className="text-sm text-dark my-2">
        Already have an account?{" "}
        <b onClick={() => router.push("/sign-in")}>Sign in</b>
      </p>
    </div>
  );
};

export default SignUp;
