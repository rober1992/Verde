import { useContext, useState } from 'react'
import Container from '@mui/material/Container';
import CartContext from '../../Context/CartContext'
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import './CartPage.css'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Link } from 'react-router-dom';
import db from '../../firebase';
import ModalCustom from '../Modal/modal';
import { addDoc, collection } from 'firebase/firestore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ItemCount from '../ItemCount/ItemCount'

const CartPage = () => {
    const { cartProducts, deleteProduct, calculeTotalPrice } = useContext(CartContext)
    const [openModal, setOpenModal] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        direction: '',
    })
    const [order, setOrder] = useState(
        {
            buyer: formData,
            items: cartProducts.map((cartProduct) => {
                return {
                    id: cartProduct.id,
                    title: cartProduct.name,
                    price: cartProduct.price
                }
            }), 
            total: calculeTotalPrice
        }
    )
    const [successOrder, setSuccessOrder] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        let prevOrder = {
            ...order,
            buyer: formData
        }
        setOrder({
            ...order,
            buyer: formData
        })
        pushOrder(prevOrder)
    }

    const pushOrder = async (prevOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, prevOrder)
        setSuccessOrder(orderDoc.id)

    }

    const handleChange = (e) => {
        const { value, name } = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }


    if (cartProducts.length > 0) {
        return (
            <Container>
                <div className='woocomerce'>
                    <div className='row-divided'>
                        <div className='product-detai'>
                            <div className='product-detail__header'>
                                <h4>PRODUCTO</h4>
                                <h4>PRECIO</h4>
                                <h4>CANTIDAD</h4>
                                <h4>SUBTOTAL</h4>
                            </div>
                            {cartProducts.map((cartProduct) => {
                                const { price, image, name, id, stock } = cartProduct
                                return (
                                    <div className='product-detail__content' key={id}>
                                        <div className='product-detail__product'>
                                            <img src={`${image}`} alt={`${image}`} />
                                            <p className='name-product'>{name}</p>
                                        </div>
                                        <div className='product-detail__price'>
                                            <p className='priceText'>$ {price}</p>
                                        </div>
                                        <div className='product-detail__quantity'>
                                            <ItemCount initial={1}/>
                                        </div>
                                        <div className='product-detail__subtotal'>
                                            <span>$ {calculeTotalPrice}</span>
                                        </div>
                                        <div className='cart-table__content-price'>
                                            <button className='btn-delete' onClick={() => deleteProduct(cartProduct)}>
                                                <RemoveCircleRoundedIcon />
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='product-total'>
                            <div className='product-total__header'>
                                <h4>TOTAL DEL CARRITO</h4>
                            </div>
                            <div className='sub-total'>
                                <div className='calcule-subtotal'>
                                    <p className='subtotal'>Subtotal</p>
                                    <span className='calcule-subtotalPrice'>$ {calculeTotalPrice}</span>
                                </div>
                                <div className='calcule-subtotal'>
                                    <p className='total'>Total</p>
                                    <span className='calcule-subtotalPrice'>$ {calculeTotalPrice}</span>
                                </div>
                            </div>
                            <div className='proced-to-checkout'>
                                <button className='button-buy' onClick={() => setOpenModal(true)}>
                                    FINALIZAR COMPRA
                                </button>
                            </div>
                            <div className='discount'>
                                <LocalOfferIcon />
                                <p>¿Tenés un cupón de descuento?</p>
                            </div>
                            <div className='menuCoupon'>
                                <input className='inputText' type={Text} name={'couponCode'}></input>
                                <input className='sendCoupon' value={'Aplicar cupón'} type='submit' name={'applyCoupon'}></input>
                            </div>
                        </div>

                    </div>
                </div>
                <ModalCustom handleClose={() => setOpenModal(false)} open={openModal}>

                    {successOrder ? (
                        <div className='checkout'>
                            <p className='IconCheckout'><CheckCircleOutlineIcon /></p>
                            <h1>Recibimos tu pedido</h1>
                            <h2>Tu numero de orden es</h2>
                            <p className='IconCheckout'><ArrowCircleDownIcon /></p>
                            <h3>{successOrder}</h3>
                            <Link to={'/'}><button onClick='location.reload()' id='buttonCheckout'>Volver al inicio</button></Link>
                        </div>
                    ) : (
                        <>
                            <form className='form-temp-checkout' onSubmit={handleSubmit}>
                                <h2 className='formContact'>DATOS DE FACTURACION</h2>
                                <input type="text" name='name' placeholder='Nombre'
                                    onChange={handleChange}
                                    value={formData.name}
                                />
                                <input type="number" name='phone' placeholder='Telefono'
                                    onChange={handleChange}
                                    value={formData.phone}
                                />
                                <input type="mail" name='email' placeholder='Correo'
                                    onChange={handleChange}
                                    value={formData.email}
                                />
                                <input type="text" name='direction' placeholder='Dirección'
                                    onChange={handleChange}
                                    value={formData.direction}
                                />

                                <button type="submit" id='buttonForm-checkout'>ENVIAR</button>
                            </form>
                        </>
                    )}

                </ModalCustom>
            </Container>

        )
    } else {
        return (
            <div className='cart-empty'>
                <h1>
                    CARRITO DE COMPRAS
                </h1>
                <p className='cart-empty-p'>
                    No tenes ningún producto en tu carrito de compras
                </p>
                <p className='cart-empty-p'>
                    Hace click <Link to={"/"}>acá</Link> para seguir comprando
                </p>
            </div>
        )

    }

}

export default CartPage