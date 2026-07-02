import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

export default function Layout() {
  const navigation = useNavigation();

  return (
    <div className="layout" className="grid grid-rows-[auto_1fr_auto] gap-10 h-[100dvh]">
      <Header />
      <main className="w-full max-w-3xl px-4 mx-auto overflow-y-auto lg:max-w-4xl">
        {navigation.state === "loading" && <Loader />}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
