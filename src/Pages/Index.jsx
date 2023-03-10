import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { ConsumigApi } from "../Components/ConsumigApi";
import { Cards } from "../Components/Cards";
import { Footer } from '../Components/Footer'

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="mb-4 mt-4">
      <div className="container">
        <form className="form-inline my-2 my-lg-0 shadow">
          <input className="form-control mr-sm-2 me-5" type="Buscar" value={value}
            onChange={onChange}
            placeholder="Buscar" />
        </form>
      </div>
    </div>

  );
};

const Pagination = ({ previousUrl, nextUrl, onPreviousClick, onNextClick }) => {
  return (
    <div className="container m-auto text-center mt-4 mb-4">
      <button onClick={onPreviousClick} className="m-2 btn btn-dark">
        Anterior
      </button>
      <button onClick={onNextClick} className="btn btn-dark">
        Siguiente
      </button>
    </div>
  );
};

const PokemonList = ({ data, search, onPokemonSelected }) => {
  const filteredData = data.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return <Cards results={filteredData} onPokemonSelected={onPokemonSelected} />;
};

export const Index = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=151");
  const { cargando, data } = ConsumigApi(url);
  const [search, setSearch] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    setSelectedPokemon(null);
  }, [search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePreviousClick = () => {
    setUrl(data.previous);
  };

  const handleNextClick = () => {
    setUrl(data.next);
  };

  const handlePokemonSelected = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const searchPokemon = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    setSelectedPokemon(data);
  };

  return (
    <div>
      <SearchBar value={search} onChange={handleSearchChange} />
      {cargando ? (
        <Spinner animation="grow" variant="dark" />
      ) : (
        <>
          {selectedPokemon ? (
            <Cards results={[selectedPokemon]} />
          ) : (
            <PokemonList
              data={data.results}
              search={search}
              onPokemonSelected={handlePokemonSelected}
            />
          )}
          <Pagination
            previousUrl={data.previous}
            nextUrl={data.next}
            onPreviousClick={handlePreviousClick}
            onNextClick={handleNextClick}
          />
          <Footer/>
        </>
      )}
    </div>
  );
};
