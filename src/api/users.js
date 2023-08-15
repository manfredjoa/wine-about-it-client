import api from "./apiConfig";
import jwtDecode from "jwt-decode";

export async function registerUser(credentials) {
  try {
    const response = await api.post("/users/register", credentials);
    localStorage.setItem("token", response.data.token);
    const user = jwtDecode(response.data.token);

    return user;
  } catch (error) {
    console.log("Error: Registering user.", error);
  }
}

export async function loginUser(credentials) {
  try {
    const response = await api.post("/users/login", credentials);
    localStorage.setItem("token", response.data.token);
    const user = jwtDecode(response.data.token);
    return user;
  } catch (error) {
    console.log("Error: Logging in user.", error);
  }
}
export async function getUser(id) {
  try {
    const response = await api.get(`/users/id/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error: Getting user.", error);
  }
}

export const verifyUser = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const res = await api.get("users/verify");
    return res.data;
  }
  return false;
};

export const updateFavorites = async (id, favorites) => {
  try {
    console.log(id); // user ID
    console.log(favorites); // wine ID
    // const response = await api.put(`/users/${id}/favorites`, favorites);
    const response = await api.put(`/users/${id}/favorites`);
    return response.data;
  } catch (error) {
    console.log("Error: Adding favorites.", error);
  }
};
