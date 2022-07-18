import React from 'react';
import { useState } from 'react';
import './ItemCount.css';



const ItemCount = ({ initial, stock, onAdd }) => {

  const [cant, setCant] = useState(initial);


  const addProduct = (num) => {
    setCant(cant + num);
  };


  return (
    <div className="count-container">
      <div className="count-container__contador">
        <button
          className="count-container__button"
          onClick={() => addProduct(-1)}
          disabled={cant === initial ? true : null}
        >
          -
        </button>
        <span className="count-container__cant">{cant}</span>
        <button
          className="count-container__button"
          onClick={() => addProduct(+1)}
          disabled={cant === stock ? true : null}
        >
          +
        </button>

      </div>


    </div>
  );
};

export default ItemCount;