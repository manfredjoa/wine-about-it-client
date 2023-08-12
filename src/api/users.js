import api from "./apiConfig";
import jwtDecode from "jwt-decode";

export const registerUser = async (credentials) => {
  try {
    const response = await api.post("/register", credentials);
    localStorage.setItem("token", response.data.token);
    const user = jwtDecode(response.data.token);
    return user;
  } catch (error) {
    console.log("Error: Registering user.", error);
  }
};
