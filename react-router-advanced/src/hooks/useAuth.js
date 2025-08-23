// Simple authentication hook
import { useState, useEffect } from "react";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] =  useState(
    localStorage.getItem("auth") === "true"
  );

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth") === "true";
    setIsAuthenticated(storedAuth);
  }, []);

  const login = () => {
    localStorage.setItem("auth", "true");
    setIsAuthenticated(true);
  }

  const logout = () => {
    localStorage.setItem("auth", "false");
    setIsAuthenticated(false);
  }

  return {isAuthenticated, login,logout}
}
