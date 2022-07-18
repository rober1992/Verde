import { useState, useContext } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import CartContext from '../../Context/CartContext';
import carrito from '../../Img/carrito.png'
import './CartWidget.css'

const CartWidget = () => {
    const { cartProducts, deleteProduct } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    if (cartProducts.length > 0) {
        return (
            <div className='cart-button'>
                <div className='cart-and-length'
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                >
                    <img src={carrito} alt="" className='carrito'/>
                    <p>{cartProducts.length}</p>
                </div> 
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    className='cart-modal'
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 2.5,
                        '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                        },
                        '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                        },
                        },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                    <p className='modalCartFooter'>Carrito de Compras</p>
                    <Divider />
                    {cartProducts.map( (cartProduct) => {
                        return(
                            <MenuItem className='item-cart-modal' key={cartProduct.id}>
                                <div className='item-cart-modal__img'>
                                    <img src={`${cartProduct.image}`} alt={`${cartProduct.image}`} /> 
                                </div>
                                <div className='item-cart-modal__info'>
                                    <p>{cartProduct.name}</p>
                                    <span>$ {cartProduct.price}</span>
                                </div>
                                <p>1</p>
                                <div className='item-cart-modal__action'>
                                    <button className='btn-delete' onClick={() => deleteProduct(cartProduct)}>
                                        <RemoveCircleRoundedIcon />
                                    </button>
                                </div>
                            </MenuItem>
                        )
                    })}
                    
                    <Divider />
                    <Link to="/cart"><div className='footer-modal-cart'>
                        <button className="button-buy">IR AL CARRITO</button>
                    </div></Link>
                </Menu>
            </div>
        )
    } else {
        return (
            <div className='cart-button'>
                <div className='cart-and-length'
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                >
                    <img src={carrito} alt="" className='carrito'/>
                    <p>{cartProducts.length}</p>
                </div> 
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    className='cart-modal'
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 2.5,
                        '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                        },
                        '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                        },
                        },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                    <p className='modalCartFooter'>No tenes productos en el carrito</p>
                    <Divider />
                    {cartProducts.map( (cartProduct) => {
                        return(
                            <MenuItem className='item-cart-modal' key={cartProduct.id}>
                                <div className='item-cart-modal__img'>
                                    <img src={`${cartProduct.image}`} alt={`${cartProduct.image}`} /> 
                                </div>
                                <div className='item-cart-modal__info'>
                                    <p>{cartProduct.name}</p>
                                    <span>$ {cartProduct.price}</span>
                                </div>
                                <div className='item-cart-modal__action'>
                                    <button className='btn-delete' onClick={() => deleteProduct(cartProduct)}>
                                        <RemoveCircleRoundedIcon />
                                    </button>
                                </div>
                            </MenuItem>
                        )
                    })}
                    
                    <Divider />
                    <div className='footer-modal-cart'>
                        <button className="button-buy"><Link to="/">Seguir comprando</Link></button>
                    </div>
                </Menu>
            </div>
        )
    }


}

export default CartWidget