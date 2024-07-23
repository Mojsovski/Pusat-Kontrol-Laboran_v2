import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import Home from "./pages/laboran/home/Home";
import InvHome from "./pages/laboran/inventaris/InvHome";
import InvInput from "./pages/laboran/inventaris/InvInput";
import InvList from "./pages/laboran/inventaris/InvList";
import InvListPC from "./pages/laboran/inventaris/InvListPC";
import InvRekap from "./pages/laboran/inventaris/InvRekap";
import InvDetail from "./pages/laboran/inventaris/InvDetail";
import InvEdit from "./pages/laboran/inventaris/InvEdit";
import Setting from "./pages/laboran/setting/Setting";
import InvListNonPC from "./pages/laboran/inventaris/InvListNonPC";
import ChangeAccount from "./pages/laboran/setting/ChangeAccount";
import Users from "./pages/laboran/setting/Users";
import SignUp from "./pages/laboran/setting/SignUp";

import ProtectedRoute from "./router/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inventaris"
        element={
          <ProtectedRoute>
            <InvHome />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inventaris/input"
        element={
          <ProtectedRoute>
            <InvInput />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inventaris/rekap"
        element={
          <ProtectedRoute>
            <InvRekap />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inventaris/list-PC"
        element={
          <ProtectedRoute>
            <InvListPC />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inventaris/listinventaris"
        element={
          <ProtectedRoute>
            <InvList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inventaris/list-nonpc"
        element={
          <ProtectedRoute>
            <InvListNonPC />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inventaris/detail/:id"
        element={
          <ProtectedRoute>
            <InvDetail />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inventaris/edit/:id"
        element={
          <ProtectedRoute>
            <InvEdit />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user"
        element={
          <ProtectedRoute>
            <Setting />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user/setting"
        element={
          <ProtectedRoute>
            <ChangeAccount />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users"
        element={
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <ProtectedRoute>
            <SignUp />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
