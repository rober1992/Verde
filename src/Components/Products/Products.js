import React, { useEffect, useState } from 'react';
import Item from '../ItemListContainer/ItemList/item/Item';
import spinner from '../../Img/spinner-planta.gif'
import { useParams } from 'react-router-dom'
import '../ItemListContainer/ItemList/itemList.css'
import db from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';


const ProductPage = () => {

  const [loading, setLoading] = useState(true)

  const { category } = useParams()
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const itemsCollection = collection(db, 'productos')
    const productosSnapshot = await getDocs(itemsCollection)
    const productList = productosSnapshot.docs.map((doc) => {
      let product = doc.data()
      product.id = doc.id
      return product
    }
    )
    return productList

  }


  useEffect(() => {
    setProducts([])
    setLoading(true)
    getProducts().then((productos) => {
      setLoading(false)
      category ? filterProductByCategory(productos, category) : setProducts(productos)
    })
  }, [category])


  const filterProductByCategory = (array, category) => {
    return array.map((product, i) => {
      if (product.category === category) {
        return setProducts(products => [...products, product]);
      }
    })
  }


  return (
    <div >
      <h1 className='productos-destacados'>NUESTROS PRODUCTOS</h1>
      {loading ?

        (<div className='spinnerDiv'>
          <img className="spinner" src={spinner} alt='loader'></img>
        </div>)

        : <div className="cards">
          <> {products.map((product) =>

            <div className='cardsProducts' key={product.id}>

              <Item
                name={product.name}
                price={product.price}
                image={product.image}
                stock={product.stock}
                id={product.id}
              />

            </div>)} </>
        </div>

      }
    </div>
  )

};

export default ProductPage;