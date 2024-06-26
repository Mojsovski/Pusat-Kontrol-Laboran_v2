import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/login/LoginPage";
import Home from "./pages/laboran/home/Home";
import InvHome from "./pages/laboran/inventaris/InvHome";
import InvInput from "./pages/laboran/inventaris/InvInput";
import InvListPC from "./pages/laboran/inventaris/InvListPC";
import InvRekap from "./pages/laboran/inventaris/InvRekap";

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
