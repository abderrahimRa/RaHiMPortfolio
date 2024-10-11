import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
const ListItems: string[] = ["Home", "Experience", "Skills", "Contact"];

export { ListItems };
const App = () => (
  <div className="flex h-screen flex-col bg-gray-900">
    <Navbar menuItems={ListItems} />
    <Home />
  </div>
);

export default App;
