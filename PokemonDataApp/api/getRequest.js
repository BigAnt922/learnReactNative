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
    const response = await axios.get(url);
    const { abilities, height, weight, moves, stats, sprites } = response.data;
    return {
      abilities,
      height,
      weight,
      moves,
      minHp: stats[0]["base_stat"],
      maxHp: stats[stats.length - 1]["base_stat"],
      profileImageUrl: sprites.front_shiny,
      actualImageUrl: sprites.other["dream_world"]["front_default"],
    };
  } catch (error) {
    console.error("ERROR OCCURED : ");
    console.error(error);
    return [{ code: error.code, message: error.message }];
  }
};
