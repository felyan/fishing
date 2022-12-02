import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TotalCatching from "./components/TotalCatching";
import OverTheAverage from "./components/OverTheAverage";
import NoCatch from "./components/NoCatch";
import Winner from "./components/Winner";
import FullList from "./components/FullList";
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fulllist" element={<FullList />} />
        <Route path="/totalcatching" element={<TotalCatching />} />
        <Route path="/winner" element={<Winner />} />
        <Route path="/overtheaverage" element={<OverTheAverage />} />
        <Route path="/nocatch" element={<NoCatch />} />
      </Routes>
    </Router>
  );
}

export default App;
