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
    return {
      damage_relations: response.data?.damage_relations ?? {},
      pokemon: response.data?.pokemon ?? [],
    };
  } catch (error) {
    console.error("ERROR OCCURED : ");
    console.error(error);
    return [{ code: error.code, message: error.message }];
  }
};

export const getPokemonDetailById = async (url) => {
  try {
    console.log("===========", url);
    const response = await axios.get(url);
    console.log(response.data);
    console.log("====================");
  } catch (error) {
    console.error("ERROR OCCURED : ");
    console.error(error);
    return [{ code: error.code, message: error.message }];
  }
};
