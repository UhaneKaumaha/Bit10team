import React from "react";
import "../css/style-sugg.css";

export const RecentSuggs = ({ recent, handleChange, handleClick }) => {
  
  const elements = recent.map((sugg) => (
    <div key={sugg.id}>
      <div className="suggsd-cont">
        <div className="sugg-text">{sugg.name}</div>
        <div className="list-icons">
          <label>
            <i class="bi bi-trash3"></i>
            <input
              id="micheckbox"
              type="checkbox"
              checked={sugg.completed}
              onChange={() => handleChange(sugg.id)}
            />
          </label>
          <span onClick={() => handleClick(sugg.id)}></span>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      {recent.length ? (
        <>
          <h2 className="subtitle text-center">Sugerencias destacadas.</h2>
          <div className="list-item">
            <div className="elemen">{elements}</div>
          </div>
        </>
      ) : (
        <h2 className="subtitle text-center">No hay sugerencias pendientes</h2>
      )}
    </>
  );
};
