import React from 'react';
import '../css/style-sugg.css'


export const AllSuggest = ({
  all,
  handleChange,
  handleClick,
  setRename,
}) => {
  const elements = all.map((sugg) => (
    <div key={sugg.id}>
      <div className='suggs-cont'>
        <div className='sugg-text'>{sugg.name}</div>
        <div className='list-icons'>
          <label>
          <i class="bi bi-star"></i>
            <input
              id='micheckbox'
              type='checkbox'
              checked={sugg.completed}
              onChange={() => handleChange(sugg.id)}
            />
          </label>
          <span onClick={() => setRename(sugg.id)}>
          <i class="bi bi-pencil-square"></i>
          </span>
          <span onClick={() => handleClick(sugg.id)}>
          <i class="bi bi-trash3"></i>
          </span>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      {all.length ? (
        <>
          <div className="tittle-list">
            <h2 className='subtitle text-center'>Sugerencias por revisar.</h2>
          </div>
          <div className="list-elements">
            <div className='list-item'>
              <div className='element-list'>
                <span>{elements}</span>
              </div>  
            </div>
          </div>
        </>
      ) : (
        <h2 className='subtitle text-center'>Sin Sugerencias por revisar.</h2>
      )}
    </>
  );
};