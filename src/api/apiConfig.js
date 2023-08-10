import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "PRODUCTION URL (HEROKU)",
  development: "DEVELOPMENT URL (LOCALHOST)",
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

// I personally think it's easier to also have the development URL as the deployed Heroku URL
