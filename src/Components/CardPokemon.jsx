import React from "react";
import { Spinner } from "react-bootstrap";
import { ConsumigApi } from "./ConsumigApi";

export const CardPokemon = ({ url }) => {
  const estado = ConsumigApi(url);
  const { cargando, data } = estado;

  return (
    <div className="pokedex">
      {cargando ? (
        <Spinner animation="grow" variant="dark" />
      ) : (
        <div className="card shadow" style={{ width: "14rem" }}>
          <div className="card-header">
            <h5 className="card-title">{data.id}</h5>
          </div>
          <div className="card-body">
            <img src={data.sprites.front_default} alt="pokemon" />
          </div>
          <div className="card-footer">
            <p className="card-text text-capitalize">{data.forms[0].name}</p>
          </div>
        </div>
      )}
    </div>
  );
};
