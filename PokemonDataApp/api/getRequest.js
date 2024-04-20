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
