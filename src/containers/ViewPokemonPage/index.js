import React, {useState, useEffect} from 'react';
import Card from 'components/Card';
import axios from 'axios';
import {PokemonContainer} from 'containers/ViewPokemonPage/styles';
import Box from 'components/Box';
import LoadingState from 'components/Loading';
import Error from 'components/Error';
import EmptyState from 'components/EmptyState';
const ViewPokemon = ({match, history}) => {
  const {params} = match;
  const [pokemon, setPokemon] = useState([]);
  const [evolution, setEvolution] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const {data: response} = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${params.name}`,
        );
        setPokemon(response);
        setLoading(false);
      } catch {
        setHasError(true);
        setLoading(false);
      }
    };
    fetchPokemonDetails();
  }, [params.name]);
  useEffect(() => {
    const fn = async () => {
      try {
        setLoading(true);
        if (pokemon?.id) {
          var {data} = await axios.get(
            `https://pokeapi.co/api/v2/evolution-chain/${pokemon.id}`,
          );
          setEvolution(data.chain.evolves_to);
          setLoading(false);
        }
      } catch {
        setHasError(true);
        setLoading(false);
      }
    };
    fn();
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
              {evolution.map(({species}, index) => (
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

export default ViewPokemon;
