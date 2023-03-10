import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import '../css/style-sugg.css'

export const Suggform = ({
  sugg,
  setSugg,
  suggs,
  setSuggs,
  rename,
  setRename,
  setMessage,
}) => {
  const [exists, setExists] = useState(null);

  useEffect(() => {
    const arr = suggs.filter((item) => item.id === rename);
    setExists(arr[0]);
  }, [rename]);

  const handleInputName = (e) => {
    setSugg({ ...sugg, name: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!sugg.name.trim())
      return setMessage("⚠️ Ingresa una sugerencia, nos ayudarias bastante!");
    const suggId = { ...sugg, id: uuidv4() };
    setSuggs([...suggs, suggId]);
    setSugg({ id: null, name: "", completed: false });
  };

  const handleInputRename = (e) => {
    setExists({ ...exists, name: e.target.value });
  };

  const handleClickRename = (e) => {
    e.preventDefault();
    const arr = [...suggs];
    const i = arr.findIndex((item) => item.id === exists.id);
    arr[i].name = exists.name;
    setSuggs(arr);
    setRename(null);
    setExists(null);
  };

  return (
    <>
      {rename && exists ? (
        <form className="cont-form">
          <input type="text" onInput={handleInputRename} value={exists.name} />
          <button type="button" class="btn btn-success" onClick={handleClickRename}>Editar</button>
        </form>
      ) : (
        <div className="cont-form">
          <form>
            <input
              type="text"
              placeholder="Ingresar sugerencia"
              onInput={handleInputName}
              value={sugg.name}
            />
            <img src="https://media.tenor.com/0WkmuOC_W00AAAAi/waving-pikachu.gif" alt="gif" />
            <button type="button" class="btn btn-danger" onClick={handleAdd}>Enviar</button>
          </form>
        </div>

      )}
    </>
  );
};
