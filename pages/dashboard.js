import DashboardPage from "../components/dashboard-page/dashboard-page";
import { Provider } from "react-redux";
import store from "../redux/store";

export default function Dashboard() {
  return (
    <Provider store={store}>
      <DashboardPage />
    </Provider>
  );
}
