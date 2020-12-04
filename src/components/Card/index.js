import React from 'react';
import {CardContainer} from 'components/Card/styles';
const Card = ({pokemon, clickHandler}) => {
  return (
    <CardContainer>
      <div className="Card_img">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <div className="Card_name">{pokemon.name}</div>
      <div className="Card_types">
        {pokemon.types.map((type) => {
          return (
            <div
              aria-hidden="true"
              className="Card_type"
              onClick={() => clickHandler(`/type/${type.type.name}`)}
            >
              {type.type.name}
            </div>
          );
        })}
      </div>
      <div className="Card_info">
        <div className="Card_data Card_data-weight">
          <p className="title">Weight</p>
          <p>{pokemon.weight}</p>
        </div>
        <div className="Card_data Card_data-weight">
          <p className="title">Height</p>
          <p>{pokemon.height}</p>
        </div>
        <div className="Card_data Card_data-ability">
          <p className="title">Ability</p>
          <p>{pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
