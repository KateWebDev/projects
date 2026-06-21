import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

export default function Layout() {
  const navigation = useNavigation();

  return (
    <div className="layout">
      <Header />
      <main>
        {navigation.state === "loading" && <Loader />}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
