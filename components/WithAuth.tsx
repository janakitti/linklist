import axios from "axios";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { config } from "../utils/config";
import { Color, Size } from "../utils/theme";
import Loader from "./Loader";

export function withAuth<P>(WrappedComponent: React.ComponentType<P>) {
  const ComponentWithAuth = (props: P) => {
    const [verified, setVerified] = useState(false);

    useEffect(() => {
      (async () => {
        try {
          await axios.get(config.apiUrl + "/users/me", {
            method: "get",
            withCredentials: true,
          });
          setVerified(true);
        } catch (ex) {
          console.log(ex);
          setVerified(false);
          Router.push("/sign-in");
        }
      })();
    }, []);
    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return (
        <div className="w-screen h-screen flex items-center justify-center">
          <Loader color={Color.primary} size={Size.lg} />
        </div>
      );
    }
  };
  return ComponentWithAuth;
}
