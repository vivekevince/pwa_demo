import { Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/pwa_demo" element={<Login />} />=
      {/* Catch-all Route for undefined route */}
      <Route path="*" element={<NotFoundPage />} />
      {/* Private Routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/pwa_demo/home" element={<Home />} />
        {/* <Route path="/home" element={<Users />} /> */}
      </Route>
    </Routes>
  );
}
