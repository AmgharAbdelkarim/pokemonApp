import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ContentWrapper } from "containers/HomePage/style";
import Pokemon from "components/Box";
import Button from "components/Button";
import LoadingState from "components/Loading";
import Error from "components/Error";
import EmptyState from "components/EmptyState";

import {
  getPokemonSelector,
  getSizeSelector,
  getTypesSelector,
  getLoadingSelector,
  getHasErrorSelector,
  getCurrentUrlSelector,
  getNextUrlSelector,
  getPrevUrlSelector,
  getSelectSelectedTypes,
} from "store/selectors";
import {
  getPokemon,
  setTypeSelected,
  setCurrentUrl,
  setSize,
  getTypes,
  clearTypeSelected,
} from "store/action";

const Home = ({
  pokemon,
  size,
  types,
  loading,
  hasError,
  currentUrl,
  nextUrl,
  prevUrl,
  getPokemon,
  selectedTypes,
  setTypeSelected,
  setCurrentUrl,
  setSize,
  getTypes,
  clearTypeSelected,
  history,
}) => {
  useEffect(() => {
    getPokemon();
  }, [currentUrl]);

  useEffect(() => {
    getTypes();
  }, []);

  const nextHandler = () => {
    if (!nextUrl) return setSize(size + 20);
    setCurrentUrl(nextUrl);
  };

  const prevHandler = () => {
    if (!nextUrl) return setSize(size - 20);
    setCurrentUrl(prevUrl);
  };

  const filterByType = (currentUrl, name) => {
    setCurrentUrl(currentUrl);
    setTypeSelected(name);
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
            {selectedTypes.length > 0 && (
              <Button
                className="clear_button"
                clickHandler={() => {
                  setCurrentUrl("https://pokeapi.co/api/v2/pokemon");
                  clearTypeSelected();
                }}
              >
                Clear
              </Button>
            )}
            <ul>
              {types.map(({ name, url }) => (
                <li
                  onClick={() => filterByType(url, name)}
                  aria-hidden="true"
                  key={name}
                  className={selectedTypes.indexOf(name) >= 0 ? "selected" : ""}
                >
                  <span>{name}</span>
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

const mapStateToProps = createStructuredSelector({
  pokemon: getPokemonSelector,
  size: getSizeSelector,
  types: getTypesSelector,
  loading: getLoadingSelector,
  hasError: getHasErrorSelector,
  currentUrl: getCurrentUrlSelector,
  nextUrl: getNextUrlSelector,
  prevUrl: getPrevUrlSelector,
  selectedTypes: getSelectSelectedTypes,
});

const mapDispatchToProps = {
  getPokemon,
  setTypeSelected,
  setCurrentUrl,
  setSize,
  getTypes,
  clearTypeSelected,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

export { Home };
