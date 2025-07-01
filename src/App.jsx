import { Outlet, useLocation } from "react-router";
import Loader from "./components/Loader";
import useAuth from "./hooks/useAuth";
import Header from "./sharedComponents/Header";
import Footer from "./sharedComponents/Footer";

function App() {
  const { pathname } = useLocation();
  const { loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <header
        className={`shadow-sm bg-main/30 z-50 backdrop-blur-3xl ${
          pathname === "/" ? "fixed w-full" : "sticky top-0"
        }`}
      >
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
