import React, { useEffect, useState } from 'react';
import { getProductById } from '../../../../Products/delay';
import ItemDetail from '../ItemDetailContainer/ItemDetail/ItemDetail';

const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(Number(id), setProduct);
  }, [id]);
  return (
    <section className="item-detail-container">
      {product ? <ItemDetail item={product} /> : <p>Cargando producto...</p>}
    </section>
  );
};

export default ItemDetailContainer;