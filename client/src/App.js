import Layout from "./pages/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashBoard/dashBoard";
import './main.css';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" index element={<Layout />}/>
    <Route path="dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
