import axios from "axios";
import type { NextPage } from "next";
import { useEffect } from "react";
import ProfilePanel from "../components/ProfilePanel";
import { withAuth } from "../components/WithAuth";
import { config } from "../utils/config";

const Dashboard: NextPage = () => {
  return (
    <div className="grid-container grid grid-cols-1 lg:grid-cols-6 h-screen">
      <div className="item1 col-span-1 h-full">
        <ProfilePanel />
      </div>
      <div className="item2 col-span-3 h-full">2</div>
      <div className="item2 col-span-2 h-full">2</div>
    </div>
  );
};

export default withAuth(Dashboard);
