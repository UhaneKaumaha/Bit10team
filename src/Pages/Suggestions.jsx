import React from 'react'
import {useState, useEffect} from 'react'
import {Suggform} from '../Components/Suggform'
import {AllSuggs} from '../Components/AllSuggs'
import {Footer} from '../Components/Footer'
import '../css/style-sugg.css'

export const Suggestions = () => {

  const [sugg, setSugg] = useState({ id: null, name: '', completed: false });
  const [suggs, setSuggs] = useState([]);
  const [rename, setRename] = useState(null);
  const [message, setMessage] = useState(
    'Ingresa una sugerencia, ayudanos a mejorar.'
  );

  useEffect(() => {
    if (localStorage.getItem('suggs')) {
      setSuggs(JSON.parse(localStorage.getItem('suggs')));
    }
  }, []);

  return (
    <>
      <div className="container-sugg">
        <div className="cont-tittle">
          <h1 className='text-center' >Sugerencias</h1>
          <p className='text-center'>{message}</p>
        </div>
        <div className='sugg-form'>
          <Suggform
            sugg={sugg}
            setSugg={setSugg}
            suggs={suggs}
            setSuggs={setSuggs}
            rename={rename}
            setRename={setRename}
            setMessage={setMessage}
          />
        </div>
        <div className='list-sugg'>
          <AllSuggs suggs={suggs} setSuggs={setSuggs} setRename={setRename} />
        </div>
      </div>
      <Footer />
    </>
  );
}

