import { Outlet, useLocation } from "react-router";
import Header from "./sharedComponents/Header";

function App() {
  const { pathname } = useLocation();

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
