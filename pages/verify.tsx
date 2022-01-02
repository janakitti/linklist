import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../utils/config";
import Loader from "../components/Loader";
import { Color, Size } from "../utils/theme";

const VerifyPage: NextPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const { id } = router.query;
    (async () => {
      try {
        await axios.post(config.apiUrl + `/users/verify/${id}`);
        setIsVerified(true);
        setIsLoading(false);
      } catch (ex: any) {
        setIsVerified(false);
        setIsLoading(false);
      }
    })();
  });
  return (
    <div className="w-screen h-screen flex flox-col items-center justify-center">
      {isLoading ? (
        <Loader color={Color.primary} size={Size.lg} />
      ) : (
        <>
          {!isVerified ? (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h1 className="text-lg">Your account has been verified!</h1>
              <br></br>
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
          ) : (
            <h1>Oops! We're unable to verify account.</h1>
          )}
        </>
      )}
    </div>
  );
};

export default VerifyPage;
