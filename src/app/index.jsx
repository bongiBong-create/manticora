import { Outlet } from "react-router-dom";
import { Header } from "../components/header";

export const App = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
    </>
  );
};
