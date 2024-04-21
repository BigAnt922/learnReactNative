import axios from "axios";

export const getAllTypes = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/type");
    return response.data?.results ?? [];
  } catch (error) {
    console.error("ERROR OCCURED : ");
    console.error(error);
    return [{ code: error.code, message: error.message }];
  }
};

export const getListOfOneType = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data?.pokemon ?? [];
  } catch (error) {
    console.error("ERROR OCCURED : ");
    console.error(error);
    return [{ code: error.code, message: error.message }];
  }
};

export const getPokemonDetailById = async (url) => {
  console.log("===========================");
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.error("ERROR OCCURED : ");
    console.error(error);
    return [{ code: error.code, message: error.message }];
  }
};
