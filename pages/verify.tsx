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
    <>
      {isLoading ? (
        <Loader color={Color.primary} size={Size.lg} />
      ) : (
        <>{isVerified ? <h1>Verified</h1> : <h1>Uh Oh</h1>}</>
      )}
    </>
  );
};

export default VerifyPage;
