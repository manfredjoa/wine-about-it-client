import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://wine-about-it-d540b94350f1.herokuapp.com/api",
  development: "https://wine-about-it-d540b94350f1.herokuapp.com/api",
  //development: "http://localhost:4000/api",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
