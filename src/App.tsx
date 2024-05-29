import { Outlet } from "react-router";
import SearchAppBar from "./components/Navbar";

function App() {
  return (
    <>
      <SearchAppBar />
      <Outlet />
    </>
  );
}

export default App;
