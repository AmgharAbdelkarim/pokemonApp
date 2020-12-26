import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Pokemon from 'components/Box';
import Button from 'components/Button';
import {TypeWrapper} from 'containers/TypesPage/style';
import LoadingState from 'components/Loading';
import Error from 'components/Error';
import EmptyState from 'components/EmptyState';

const Types = ({match, history}) => {
  const {params} = match;
  const [pokemon, setPokemon] = useState([]);
  const [size, setSize] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchPokemonType = async () => {
      try {
        const {data: response} = await axios.get(
          `https://pokeapi.co/api/v2/type/${params.type}`,
        );
        setPokemon(response.pokemon);
        setLoading(false);
      } catch {
        setHasError(true);
        setLoading(false);
      }
    };
    fetchPokemonType();
  }, [params]);
  const nextHandler = () => {
    setSize(size + 20);
    setLoading(false);
  };
  const prevHandler = () => {
    setSize(size - 20);
    setLoading(false);
  };
  return (
    <TypeWrapper id="content">
      {loading ? (
        <LoadingState />
      ) : hasError ? (
        <Error />
      ) : pokemon.length > 0 ? (
        <React.Fragment>
          <div className="item_wrapper">
            {pokemon.slice(size, size + 20).map(({pokemon}, index) => (
              <Pokemon
                clickHandler={() => history.push(`/pokemon/${pokemon.name}`)}
                name={pokemon.name}
                key={index}
              />
            ))}
          </div>
          <div className="button_wrapper">
            <Button
              disabled={size > 19 ? false : true}
              clickHandler={() => prevHandler()}
            >
              previous
            </Button>
            <Button
              disabled={size < pokemon.length - 19 ? false : true}
              clickHandler={() => nextHandler()}
            >
              next
            </Button>
          </div>
        </React.Fragment>
      ) : (
        <EmptyState />
      )}
    </TypeWrapper>
  );
};

export default Types;
