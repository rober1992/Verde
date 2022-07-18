import React from 'react';
import ItemAdd from '../../../../ItemCount/ItemAdd';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ItemDetail.css';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import db from '../../../../../firebase';

const ItemDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState({})
  const getProduct = async () => {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let product = docSnap.data()
      product.id = docSnap.id
      setProduct(product)
    } else {
      navigate('/error')
    }
  }
  const onAdd = (cant) => {
    Swal.fire(`Agregaste ${product.name} al carrito`, '', 'success');
  };

  useEffect(() => {
    getProduct()
  }, [id])

  return (
    <article className="product-detail">

        <img src={product.image} alt="" className="product-detail__img" />

      <div className="product-detail__info">
        <h2 className="name">{product.name}</h2>
        <p className="description">{product.description}</p>
        <ul className="info-grid">
          <li>Precio:</li>
          <li>${product.price}</li>
        </ul>
        <ItemAdd stock={product.stock} initial={1} onAdd={onAdd} />
      </div>
    </article>
  );
}





export default ItemDetail;