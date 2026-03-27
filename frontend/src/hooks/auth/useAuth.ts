import { useState } from "react";
import { loginRequest, registerRequest } from "../../services/auth/authService";
import axios from "axios";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  

  function saveToken(token: string) {
    localStorage.setItem("token", token);
  }

  function logout() {
    localStorage.removeItem("token");
  }

  function getToken() {
    return localStorage.getItem("token");
  }

  async function register(name: string, email: string, password: string) {
    setLoading(true);

    try {
      const data = await registerRequest(name, email, password);
      return data;
    } catch (error: unknown) {
      console.error(error);

      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message || "Erro ao cadastrar");
      } else {
        alert("Erro ao conectar com o servidor");
      }
    } finally {
      setLoading(false);
    }
  }

  async function login(email: string, password: string) {
    setLoading(true);

    try {
      const data = await loginRequest(email, password);

      if (!data?.token) {
        throw new Error("Token não recebido");
      }

      saveToken(data.token);

      return data;
    } catch (error: unknown) {
      console.error(error);

      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message || "Erro ao entrar");
      } else {
        alert("Erro ao conectar com o servidor");
      }
    } finally {
      setLoading(false);
    }
  }

  return { login, register, logout, getToken, loading };
}
