import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Pokemon from "components/Box";
import Button from "components/Button";
import { TypeWrapper } from "containers/TypesPage/style";
import LoadingState from "components/Loading";
import Error from "components/Error";
import EmptyState from "components/EmptyState";

import {
  getPokemonTypesSelector,
  getSizeSelector,
  getLoadingSelector,
  getHasErrorSelector,
} from "store/selectors";
import { getPokemonTypes, setSize } from "store/action";

const Types = ({
  match,
  pokemon,
  size,
  loading,
  hasError,
  getPokemonTypes,
  setSize,
  history,
}) => {
  const { params } = match;

  useEffect(() => {
    getPokemonTypes(params.type);
  }, []);
  const nextHandler = () => {
    setSize(size + 20);
  };
  const prevHandler = () => {
    setSize(size - 20);
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
            {pokemon.slice(size, size + 20).map(({ pokemon }, index) => (
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

const mapStateToProps = createStructuredSelector({
  pokemon: getPokemonTypesSelector,
  size: getSizeSelector,
  loading: getLoadingSelector,
  hasError: getHasErrorSelector,
});

const mapDispatchToProps = {
  getPokemonTypes,
  setSize,
};

export default connect(mapStateToProps, mapDispatchToProps)(Types);

export { Types };
