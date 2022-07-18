import { createContext, useState } from "react";

const CartContext = createContext();


const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [calculeTotalPrice , setCalculeTotalPrice] = useState(0)

    const addProductToCart = (product) => {
        let exist = cartProducts.find(cartProduct => cartProduct.id === product.id)
        if (!exist){
            setCalculeTotalPrice(calculeTotalPrice + product.price)
            setCartProducts(cartProducts => [...cartProducts, product])
        }
    }


    const deleteProduct = (product) => {
        setCartProducts(cartProducts.filter( cartProduct => cartProduct.id !== product.id))
        setCalculeTotalPrice(calculeTotalPrice - product.price)
    }

    const data = {
        cartProducts,
        addProductToCart,
        calculeTotalPrice,
        deleteProduct
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext