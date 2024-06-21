import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col flex-1 py-6">
        <Tabs />

        <Outlet />
      </main>
      <footer />
    </div>
  );
};

export default App;
