import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/login/LoginPage";
import Home from "./pages/home/Home";
import InvHome from "./pages/inventaris/InvHome";
import InvInput from "./pages/inventaris/InvInput";
import InvListPC from "./pages/inventaris/InvListPC";
import InvRekap from "./pages/inventaris/InvRekap";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/inventaris" element={<InvHome />} />
      <Route path="/inventaris/input" element={<InvInput />} />
      <Route path="/inventaris/rekap" element={<InvRekap />} />
      <Route path="/inventaris/list-PC" element={<InvListPC />} />
    </Routes>
  );
}

export default App;
