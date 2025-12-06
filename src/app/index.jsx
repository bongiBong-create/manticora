import { Header } from "../components/header";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";

export const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
