import { FETCH_POKEMONS } from "../actions/types";

const INITIAL_STATE = {
  pokemonList: [],
  selectedPokemon: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POKEMONS:
      return { ...state, pokemonList: action.payload };
    default:
      return state;
  }
};
