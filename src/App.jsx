import { Outlet, useLocation } from "react-router";
import Header from "./sharedComponents/Header";
import useAuth from "./hooks/useAuth";

function App() {
  const { pathname } = useLocation();
  const {loading} = useAuth();
  
  if(loading) {
    return;
  }

  return (
    <>
      <header
        className={`shadow-sm bg-main/30 ${
          pathname === "/" ? "backdrop-blur-3xl absolute w-full"
            : ""
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
