import { Outlet } from "react-router";
import Header from "./sharedComponents/Header";

function App() {
  return (
    <>
    <header className="shadow-sm bg-main">
      <Header />
    </header>
    <main>
      <Outlet />
    </main>
    </>
  );
}

export default App;
