import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Index } from "../Pages/Index";
import { Team } from "../Pages/Team";
import { AboutPokemon } from "../Pages/AboutPokemon";
import { Suggestions } from "../Pages/Suggestions";

export const Nav = () => {
  return (
    <BrowserRouter >

      <nav className="navbar navbar-expand-lg navbar-dark bg-danger shadow">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
            aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ms-auto me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Pokedex
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Historia">Historia</Link>
              </li>
                <img className="img-pokeball" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/64px-Pok%C3%A9_Ball_icon.svg.png" alt="" />
              <li className="nav-item">
                <Link className="nav-link" to="/Equipo">Equipo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Sugerencias">Sugerencias</Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>



      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/Historia" element={<AboutPokemon />}></Route>
        <Route path="/Equipo" element={<Team />}></Route>
        <Route path="/Sugerencias" element={<Suggestions />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
