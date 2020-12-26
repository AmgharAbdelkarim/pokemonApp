import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ContentWrapper} from 'containers/HomePage/style';
import Pokemon from 'components/Box';
import Button from 'components/Button';
import LoadingState from 'components/Loading';
import Error from 'components/Error';
import EmptyState from 'components/EmptyState';

const Home = ({history}) => {
  const [pokemon, setPokemon] = useState([]);
  const [size, setSize] = useState(0);
  const [type, setType] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon',
  );
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [typeSelected, setTypeSelected] = useState([]);
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const {data: response} = await axios.get(currentUrl);
        const {data: responseType} = await axios.get(
          'https://pokeapi.co/api/v2/type',
        );
        setPokemon(
          (response?.results !== [] && response.results) ||
            (nextUrl || prevUrl
              ? response.pokemon
              : [...pokemon, ...response.pokemon]),
        );
        setNextUrl(response.next);
        setPrevUrl(response.previous);
        setType(responseType.results);
        setLoading(false);
      } catch {
        setHasError(true);
        setLoading(false);
      }
    };
    fetchPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUrl]);

  const nextHandler = () => {
    if (!nextUrl) return setSize(size + 20);
    setCurrentUrl(nextUrl);
    setLoading(true);
  };
  const prevHandler = () => {
    if (!nextUrl) return setSize(size - 20);
    setCurrentUrl(prevUrl);
    setLoading(true);
  };
  const filterByType = (currentUrl, index) => {
    setCurrentUrl(currentUrl);
    setTypeSelected([...typeSelected, index]);
    setLoading(false);
  };

  return (
    <ContentWrapper id="content">
      {loading ? (
        <LoadingState />
      ) : hasError ? (
        <Error />
      ) : pokemon.length > 0 ? (
        <React.Fragment>
          <div className="filter_box">
            <h5>filter Pokemon By Type</h5>
            {typeSelected.length > 0 && (
              <Button
                className="clear_button"
                clickHandler={() => {
                  setCurrentUrl('https://pokeapi.co/api/v2/pokemon');
                  setTypeSelected([]);
                }}
              >
                Clear
              </Button>
            )}
            <ul>
              {type.map((p, index) => (
                <li
                  onClick={() => filterByType(p.url, index)}
                  aria-hidden="true"
                  key={index}
                  className={typeSelected.indexOf(index) >= 0 ? 'selected' : ''}
                >
                  <span>{p.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="item_container">
            <div className="item_wrapper">
              {pokemon.slice(size, size + 20).map((p, index) => (
                <Pokemon
                  key={index}
                  name={p.name || p.pokemon.name}
                  clickHandler={() =>
                    history.push(`/pokemon/${p.name || p.pokemon.name}`)
                  }
                />
              ))}
            </div>
            <div className="button_wrapper">
              <Button
                disabled={prevUrl || size > 19 ? false : true}
                clickHandler={() => prevHandler()}
              >
                previous
              </Button>
              <Button
                disabled={nextUrl || size < pokemon.length - 19 ? false : true}
                clickHandler={() => nextHandler()}
              >
                next
              </Button>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <EmptyState />
      )}
    </ContentWrapper>
  );
};

export default Home;
