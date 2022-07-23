import pokemonService from "../services/pokemonService";
import {
  FETCH_POKEMON,
  FETCH_POKEMONS,
  ERROR_FETCH_POKEMONS,
  ERROR_FETCH_POKEMON,
} from "./types";

export const fetchPokemonList = () => async (dispatch) => {
  try {
    const response = await pokemonService.get("pokemon?limit=1154");
    dispatch({ type: FETCH_POKEMONS, payload: response.data.results });
  } catch (error) {
    dispatch({ type: ERROR_FETCH_POKEMONS, payload: true });
  }
};

export const fetchPokemon = (name) => async (dispatch) => {
  try {
    const response = await pokemonService.get(`pokemon/${name}`);
    dispatch({ type: FETCH_POKEMON, payload: response.data });
  } catch (error) {
    dispatch({ type: ERROR_FETCH_POKEMON, payload: true });
  }
};
