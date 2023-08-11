import api from "./apiConfig.js";

// Gets all wines - 200
export const getWines = async () => {
  try {
    const response = await api.get("/wines");
    return response.data;
  } catch (error) {
    console.log("Error: Getting wines.", error);
  }
};

// Get one wine by ID
export const getWine = async (id) => {
  try {
    const response = await api.get(`/wines/id/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error: Getting wine by ID.", error);
  }
};

// ProductType //

// Gets all red wines - 103
export const getRedWines = async () => {
  try {
    const response = await api.get("/wines/red");
    return response.data;
  } catch (error) {
    console.log("Error: Getting red wines.", error);
  }
};

// Gets all white wines - 71
export const getWhiteWines = async () => {
  try {
    const response = await api.get("/wines/white");
    return response.data;
  } catch (error) {
    console.log("Error: Getting white wines.", error);
  }
};

// Gets all rose wines - 26
export const getRoseWines = async () => {
  try {
    const response = await api.get("/wines/rose");
    return response.data;
  } catch (error) {
    console.log("Error: Getting rose wines.", error);
  }
};

// ==================== //

// VarietalType //

// Gets all sparkling wines - 1
export const getSparklingWines = async () => {
  try {
    const response = await api.get("/wines/sparkling");
    return response.data;
  } catch (error) {
    console.log("Error: Getting sparkling wines.", error);
  }
};

// ==================== //

// CountryState //

// Gets all wines from California - 91
export const getCaliforniaWines = async () => {
  try {
    const response = await api.get("/wines/country/California");
    return response.data;
  } catch (error) {
    console.log("Error: Getting wines from California.", error);
  }
};

// Gets all wines from France - 54
export const getFranceWines = async () => {
  try {
    const response = await api.get("/wines/country/France");
    return response.data;
  } catch (error) {
    console.log("Error: Getting wines from France.", error);
  }
};

// Gets all wines from Italy - 23
export const getItalyWines = async () => {
  try {
    const response = await api.get("/wines/country/Italy");
    return response.data;
  } catch (error) {
    console.log("Error: Getting wines from Italy.", error);
  }
};

// Gets all wines from Washington - 8
export const getWashingtonWines = async () => {
  try {
    const response = await api.get("/wines/country/Washington");
    return response.data;
  } catch (error) {
    console.log("Error: Getting wines from Washington.", error);
  }
};

// Gets all wines from Australia - 6
export const getAustraliaWines = async () => {
  try {
    const response = await api.get("/wines/country/Australia");
    return response.data;
  } catch (error) {
    console.log("Error: Getting wines from Australia.", error);
  }
};

// Gets all wines from New Zealand - 5
export const getNewZealandWines = async () => {
  try {
    const response = await api.get("/wines/country/New Zealand");
    return response.data;
  } catch (error) {
    console.log("Error: Getting wines from New Zealand.", error);
  }
};

// Gets all wines from Oregon - 4
export const getOregonWines = async () => {
  try {
    const response = await api.get("/wines/country/Oregon");
    return response.data;
  } catch (error) {
    console.log("Error: Getting wines from Oregon.", error);
  }
};

// Gets all wines from Spain - 4
export const getSpainWines = async () => {
  try {
    const response = await api.get("/wines/country/Spain");
    return response.data;
  } catch (error) {
    console.log("Error: Getting wines from Spain.", error);
  }
};

// Gets all wines from Argentina - 2
export const getArgentinaWines = async () => {
  try {
    const response = await api.get("/wines/country/Argentina");
    return response.data;
  } catch (error) {
    console.log("Error: Getting wines from Argentina.", error);
  }
};

// Gets all wines from Germany - 1
export const getGermanyWines = async () => {
  try {
    const response = await api.get("/wines/country/Germany");
    return response.data;
  } catch (error) {
    console.log("Error: Getting wines from Germany.", error);
  }
};

// Gets all wines from Portugal - 1
export const getPortugalWines = async () => {
  try {
    const response = await api.get("/wines/country/Portugal");
    return response.data;
  } catch (error) {
    console.log("Error: Getting wines from Portugal.", error);
  }
};

// Gets all wines from South Africa - 1
export const getSouthAfricaWines = async () => {
  try {
    const response = await api.get("/wines/country/South Africa");
    return response.data;
  } catch (error) {
    console.log("Error: Getting wines from South Africa.", error);
  }
};

// ==================== //
