import axios from "axios";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { resetUser, setUser } from "../redux/actions";
import { config } from "../utils/config";
import { Color, Size } from "../utils/theme";
import Loader from "./Loader";

export function withAuth<P>(WrappedComponent: React.ComponentType<P>) {
  const ComponentWithAuth = (props: P) => {
    const [verified, setVerified] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
      (async () => {
        try {
          let res = await axios.get(config.apiUrl + "/users/me", {
            method: "get",
            withCredentials: true,
          });
          setVerified(true);
          dispatch(setUser(res.data));
        } catch (ex) {
          console.log(ex);
          setVerified(false);
          dispatch(resetUser());
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
