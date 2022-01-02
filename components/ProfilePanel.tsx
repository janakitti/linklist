import { useDispatch, useSelector } from "react-redux";
import { IUserState } from "../redux/reducers/user";
import { IRootState } from "../redux/reducers";
import { resetUser } from "../redux/actions";
import Router from "next/router";

const ProfilePanel: React.FC = () => {
  let { username }: IUserState = useSelector((state: IRootState) => state.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    // TODO: Add /logout endpoint
    dispatch(resetUser());
    Router.push("/sign-in");
  };

  return (
    <div className="grid-container grid grid-rows-8 h-full bg-light">
      <div className="item1 row-span-2 w-full flex items-center justify-center">
        <h1 className="text-xl font-bold">{username}</h1>
      </div>
      <div className="item2 row-span-5 w-full"></div>
      <div className="item2 row-span-1 w-full flex items-center justify-center">
        <p
          className="text-sm text-dark my-2 font-bold cursor-pointer hover:text-darker"
          onClick={handleSignOut}
        >
          Sign out
        </p>
      </div>
    </div>
  );
};

export default ProfilePanel;
