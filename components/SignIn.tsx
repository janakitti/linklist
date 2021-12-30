import axios from "axios";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import Button from "./Button";
import Input from "./Input";

const SignUp: React.FC = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
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

    const credentials = {
      email: user.email,
      password: user.password,
    };

    try {
      let a = await axios.post("/api/sign-in", { param: credentials });
      setIsLoading(false);
      router.push("/dashboard");
    } catch (ex: any) {
      if (ex?.response?.status === 400) {
        setErrorMsg("Incorrect username or password.");
      } else {
        setErrorMsg("Something went wrong...");
      }
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold">linklist</h1>
      <h2 className="text-sm text-dark my-2">Sign in for better bookmarking</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-1/2">
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
        <Button color={"primary"} onClick={() => {}} isLoading={isLoading}>
          Sign in
        </Button>
      </form>
      <p className="text-sm text-warn my-2">{errorMsg}</p>
      <p className="text-sm text-dark my-2">
        Don't have an account? <b onClick={() => router.push("/")}>Sign up</b>
      </p>
    </div>
  );
};

export default SignUp;
