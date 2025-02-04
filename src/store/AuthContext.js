import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

// Create a context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //
  // Initialized by fetching from localStorage to avoid
  // the loosing of state when user refresh the page manually
  //
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("authToken")
  );
  const navigate = useNavigate();

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("authToken", "dummy-token");
    navigate("/pwa_demo/home");
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    navigate("/pwa_demo");
  };

  // Check authentication status when app loads
  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
