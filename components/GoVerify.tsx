import { useRouter } from "next/router";

export interface IGoVerifyProps {
  email: string;
}

const GoVerify: React.FC<IGoVerifyProps> = ({ email }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-md text-dark my-2">{`A verification email has been sent to ${email}`}</h1>
      <p className="text-sm text-dark my-2">
        <b
          onClick={() => router.push("/sign-in")}
          className="cursor-pointer hover:text-darker"
        >
          Sign in
        </b>{" "}
        once you have verified your account.
      </p>
    </div>
  );
};

export default GoVerify;
