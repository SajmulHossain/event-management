import { Outlet } from "react-router";
import Header from "./sharedComponents/Header";

function App() {
  return (
    <>
    <header className="shadow-sm bg-main/30 backdrop-blur-3xl absolute w-full">
      <Header />
    </header>
    <main>
      <Outlet />
    </main>
    </>
  );
}

export default App;
