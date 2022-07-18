import React from 'react';
import './ItemCount.css';



const ItemAdd = ({ stock, onAdd }) => {



  return (
    <div className="count-container">
      <div className="count-container__contador">

        <button
        className="button-addToCart"
        onClick={() => onAdd()}
        disabled={stock === 0 ? true : null}
        
      >
        Añadir al carrito
      </button>

      </div>


    </div>
  );
};

export default ItemAdd;