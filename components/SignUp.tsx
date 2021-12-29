import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import { config } from "../utils/config";
import { Color, Size } from "../utils/theme";
import Button from "./Button";
import Input from "./Input";
import Loader from "./Loader";

export interface ISignUpProps {
  setWelcomeMode: Dispatch<SetStateAction<string>>;
}

const SignUp: React.FC<ISignUpProps> = ({ setWelcomeMode }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const newUser = {
      username: user.username,
      email: user.email,
      password: user.password,
    };

    try {
      await axios.post(config.apiUrl, newUser);
      setWelcomeMode("SignIn");
    } catch (ex: any) {
      console.log(ex);
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
        <Button color={"primary"} onClick={() => {}}>
          {isLoading ? (
            <Loader color={Color.white} size={Size.md} />
          ) : (
            <>Sign up</>
          )}
        </Button>
      </form>
      <p className="form-error">{errorMsg}</p>
      <p className="text-sm text-dark my-2">
        Already have an account?{" "}
        <b onClick={() => setWelcomeMode("SignIn")}>Sign in</b>
      </p>
    </div>
  );
};

export default SignUp;
