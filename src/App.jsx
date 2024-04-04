import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/login/LoginPage";
import Home from "./pages/home/Home";
import InvHome from "./pages/inventaris/InvHome";
import InvInput from "./pages/inventaris/InvInput";
import InvDetail from "./pages/inventaris/InvDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/inventaris" element={<InvHome />} />
      <Route path="/inventaris/input" element={<InvInput />} />
      <Route path="/inventaris/detail" element={<InvDetail />} />
    </Routes>
  );
}

export default App;
