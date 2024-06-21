import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col flex-1 py-6">
        <Outlet />
      </main>
      <footer />
    </div>
  );
};

export default App;
