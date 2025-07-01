import { Outlet, useLocation } from "react-router";
import Loader from "./components/Loader";
import useAuth from "./hooks/useAuth";
import Header from "./sharedComponents/Header";

function App() {
  const { pathname } = useLocation();
  const { loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <header
        className={`shadow-sm bg-main/30 ${
          pathname === "/" ? "backdrop-blur-3xl absolute w-full" : ""
        }`}
      >
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
