import Links from "../components/links";
import { Provider } from "react-redux";
import store from "../redux/store";

export default function Dashboard() {
  return (
    <Provider store={store}>
      <Links />
    </Provider>
  );
}
