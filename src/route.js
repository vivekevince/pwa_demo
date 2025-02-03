import { Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Login />} />
      {/* <Route path="/register" element={<Register />} /> */}
      {/* <Route path="/register" element={<Register />} /> */}

      {/* Catch-all Route for undefined route */}
      <Route path="*" element={<NotFoundPage />} />

      {/* Private Routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />

        {/* Add other Private Routes inside this element as below */}
        {/* <Route path="/home" element={<Users />} /> */}
      </Route>
    </Routes>
  );
}
