import React from "react";
import { connect } from "react-redux";
import { fetchPokemon } from "./../actions";

class SearchBar extends React.Component {
  componentDidMount() {
    this.props.fetchPokemon("bulbasaur");
  }
  
  renderPokemonList() {
    return this.props.pokemon.map((pokemon) => {
      return (
        <option key={pokemon.name} value={pokemon.name}>
          {pokemon.name}
        </option>
      );
    });
  }

  getPokemonInfo(name) {
    this.props.fetchPokemon(name);
  }

  render() {
    return (
      <div className="search-container">
        <select
          id="name-input"
          placeholder="Search Pokemon"
          onChange={(event) => this.getPokemonInfo(event.target.value)}
        >
          {this.renderPokemonList()}
        </select>
        <div id="search-btn" className="ball-container">
          <div className="upper-half-ball"></div>
          <div className="bottom-half-ball"></div>
          <div className="center-ball"></div>
          <div className="center-line"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon.pokemonList,
  };
};

export default connect(mapStateToProps, { fetchPokemon })(SearchBar);
