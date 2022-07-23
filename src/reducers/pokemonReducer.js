import {
  FETCH_POKEMONS,
  FETCH_POKEMON,
  ERROR_FETCH_POKEMON,
  ERROR_FETCH_POKEMONS,
} from "../actions/types";

const INITIAL_STATE = {
  pokemonList: [],
  selectedPokemon: null,
  errorFetchPokemonList: false,
  errorFetchPokemon: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POKEMONS:
      return { ...state, pokemonList: action.payload };
    case FETCH_POKEMON:
      return { ...state, selectedPokemon: action.payload };
    case ERROR_FETCH_POKEMONS:
      return { ...state, errorFetchPokemonList: action.payload };
    case ERROR_FETCH_POKEMON:
      return { ...state, errorFetchPokemon: action.payload };
    default:
      return state;
  }
};
