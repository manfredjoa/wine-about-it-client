import api from "./apiConfig";
import jwtDecode from "jwt-decode";

export default async function registerUser(credentials) {
  try {
    const response = await api.post("/users/register", credentials);
    localStorage.setItem("token", response.data.token);
    const user = jwtDecode(response.data.token);
    console.log(user);
    return user;
  } catch (error) {
    console.log("Error: Registering user.", error);
  }
}
