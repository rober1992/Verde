import React ,{ useContext }from 'react';
import ItemAdd from '../../../ItemCount/ItemAdd';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'
import CartContext from '../../../../Context/CartContext';


export default function Item({ name, image, price, id, stock }) {
  const navigate = useNavigate();
  const { addProductToCart } = useContext(CartContext)

  const changePage = () => {
    navigate(`/productos/${id}`)
}

  const onAdd = () => {
    Swal.fire(`Agregaste ${name} al carrito`,'', 'success');
    addProductToCart({ name, image, price, id, stock  })
     
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      
        <CardMedia onClick={changePage}
          component="img"
          height="200"
          image= {image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {name}
          <Typography gutterBottom variant="h6" component="div">
          ${price}  
          </Typography>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
          <ItemAdd stock={stock} onAdd={onAdd} initial={1} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
