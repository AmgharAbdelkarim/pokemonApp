import React, { useEffect } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Card from "components/Card";
import { PokemonContainer } from "containers/ViewPokemonPage/styles";
import Box from "components/Box";
import LoadingState from "components/Loading";
import Error from "components/Error";
import EmptyState from "components/EmptyState";

import {
  getPokemonDetailsSelector,
  getLoadingSelector,
  getHasErrorSelector,
  getPokemonEvolutionSelector,
} from "store/selectors";
import { getPokemonDetails, getPokemonEvolutions } from "store/action";

const ViewPokemon = ({
  match,
  history,
  pokemon,
  getPokemonDetails,
  getPokemonEvolutions,
  evolution,
  loading,
  hasError,
}) => {
  const { params } = match;

  useEffect(() => {
    getPokemonDetails(params.name);
  }, [params.name]);
  useEffect(() => {
    getPokemonEvolutions(pokemon.id);
  }, [pokemon]);
  return (
    <PokemonContainer id="content">
      {loading ? (
        <LoadingState />
      ) : hasError ? (
        <Error />
      ) : pokemon.name ? (
        <React.Fragment>
          <Card pokemon={pokemon} clickHandler={(url) => history.push(url)} />
          {evolution.length > 0 && (
            <React.Fragment>
              <h3>pokemon evolutions</h3>
              {evolution.map(({ species }, index) => (
                <Box
                  key={index}
                  name={species.name}
                  clickHandler={() => history.push(`/pokemon/${species.name}`)}
                />
              ))}
            </React.Fragment>
          )}
        </React.Fragment>
      ) : (
        <EmptyState />
      )}
    </PokemonContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  pokemon: getPokemonDetailsSelector,
  loading: getLoadingSelector,
  hasError: getHasErrorSelector,
  evolution: getPokemonEvolutionSelector,
});

const mapDispatchToProps = {
  getPokemonDetails,
  getPokemonEvolutions,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewPokemon);
export { ViewPokemon };
