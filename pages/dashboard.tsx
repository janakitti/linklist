import axios from "axios";
import type { NextPage } from "next";
import { useEffect } from "react";
import { config } from "../utils/config";

const Dashboard: NextPage = () => {
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(config.apiUrl + "/users/me", {
          method: "get",
          withCredentials: true,
        });
        // const res = await axios.get("api/me", {
        //   method: "get",
        //   withCredentials: true,
        // });
        console.log(res);
      } catch (ex) {
        console.log(ex);
      }
    })();
  }, []);
  return (
    <div className="grid-container grid grid-cols-1 lg:grid-cols-6 h-screen">
      <div className="item1 col-span-1 bg-warn h-full">1</div>
      <div className="item2 col-span-3 bg-primary h-full">2</div>
      <div className="item2 col-span-2 bg-light h-full">2</div>
    </div>
  );
};

export default Dashboard;
