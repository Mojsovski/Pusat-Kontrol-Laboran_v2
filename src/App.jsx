import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import Home from "./pages/laboran/home/Home";
//laboran
import InvHome from "./pages/laboran/inventaris/InvHome";
import InvInput from "./pages/laboran/inventaris/InvInput";
import InvList from "./pages/laboran/inventaris/InvList";
import InvRekap from "./pages/laboran/inventaris/InvRekap";
import InvMovePC from "./pages/laboran/inventaris/InvMovePC";
import InvMove from "./pages/laboran/inventaris/InvMove";
//admin
import InvAdminHome from "./pages/admin/inventaris/InvHome";
import InvAdminInput from "./pages/admin/inventaris/InvInput";
import InvAdminList from "./pages/admin/inventaris/InvAdminList";
import InvAdminRekap from "./pages/admin/inventaris/InvRekap";
import InvRoom from "./pages/admin/inventaris/InvRoom";
import InvAllRekap from "./pages/admin/inventaris/InvAllRekap";
import InvAllListPC from "./pages/admin/inventaris/InvAllListPC";
import InvAllListNonPC from "./pages/admin/inventaris/InvAllListNonPC";
import ExportInv from "./pages/laboran/inventaris/InvExport";
//setting
import Setting from "./pages/setting/Setting";
import ChangeAccount from "./pages/setting/ChangeAccount";
import Users from "./pages/setting/Users";
import SignUp from "./pages/setting/SignUp";
//log
import Log from "./pages/admin/log/Log";
import LogPCDetail from "./pages/admin/log/LogPCDetail";
//global
import InvEdit from "./pages/global/inventaris/InvEdit.jsx";
import InvEditPC from "./pages/global/inventaris/InvEditPC";
import InvDetailPC from "./pages/global/inventaris/InvDetailPC";

import ProtectedRoute from "./router/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      {/* Role Laboran */}
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
        path="/inventaris/list"
        element={
          <ProtectedRoute>
            <InvList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inventaris/detail/:id"
        element={
          <ProtectedRoute>
            <InvDetailPC />
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
        path="/inventaris/editpc/:id"
        element={
          <ProtectedRoute>
            <InvEditPC />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inventaris/pindah/pc/:id"
        element={
          <ProtectedRoute>
            <InvMovePC />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inventaris/pindah/inv/:id"
        element={
          <ProtectedRoute>
            <InvMove />
          </ProtectedRoute>
        }
      />

      {/* Role Admin */}
      <Route
        path="/admin/home"
        element={
          <ProtectedRoute>
            <InvAdminHome />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/inventaris/ruanglab"
        element={
          <ProtectedRoute>
            <InvRoom />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/inventaris/input"
        element={
          <ProtectedRoute>
            <InvAdminInput />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/inventaris/rekap"
        element={
          <ProtectedRoute>
            <InvAdminRekap />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/inventaris/list"
        element={
          <ProtectedRoute>
            <InvAdminList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/inventaris/detail/:id"
        element={
          <ProtectedRoute>
            <InvDetailPC />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/inventaris/edit/:id"
        element={
          <ProtectedRoute>
            <InvEdit />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/inventaris/edit/pc/:id"
        element={
          <ProtectedRoute>
            <InvEditPC />
          </ProtectedRoute>
        }
      />
      {/* user management */}
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
      {/* room */}
      <Route
        path="/admin/inventaris/rekap/:room"
        element={
          <ProtectedRoute>
            <InvAllRekap />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/inventaris/listPC/:room"
        element={
          <ProtectedRoute>
            <InvAllListPC />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/inventaris/list/:room"
        element={
          <ProtectedRoute>
            <InvAllListNonPC />
          </ProtectedRoute>
        }
      />
      {/* PDF */}
      <Route
        path="/downloadrekap"
        element={
          <ProtectedRoute>
            <ExportInv />
          </ProtectedRoute>
        }
      />
      {/* Log */}
      <Route
        path="/log"
        element={
          <ProtectedRoute>
            <Log />
          </ProtectedRoute>
        }
      />
      <Route
        path="/log/pc/detail/:id"
        element={
          <ProtectedRoute>
            <LogPCDetail />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
