import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeAll } from '../actions';
import { Alert, AlertTitle, Button, CircularProgress } from '@mui/material';
import CheckoutDetail from './CheckoutDetail';
import { formatNumber } from '../utils/format';
import { ShoppingCart } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Cart() {

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const list = useSelector(state => state.list)
  const cartItems = list.filter((item) => {
    return item.cart
  })
  let totalPrice = 0

  for (let i = 0; i < cartItems.length; i++) {
    totalPrice += (cartItems[i].cart * cartItems[i].current_price)
  }

  const handleCheckout = () => {
    dispatch(removeAll())
    setLoading(true)
    setTimeout(openAlert, 4000)
    setTimeout(closeAlert, 7000);
  }

  const openAlert = () => {
    setLoading(false)
    setOpen(true)
  }

  const closeAlert = () => {
    setOpen(false)
    navigate("/");
  }

  return (
    <CartDiv>
      {open && <Alert sx={{ position: "fixed", top: "100px", left: "15%", right: "15%" }} severity="success"><AlertTitle>Purchase Successfull</AlertTitle>Thanks you for your purchase!</Alert>}
      {cartItems < 1 ? loading ? <CircularProgress color='secondary' sx={{ margin: '20% 48%' }} /> : <h3>You don't have any items in your Cart</h3> :
        <Checkout>
          {cartItems.map((item) => {
            return <CheckoutDetail image={item.image} price={item.current_price} name={item.name} cart={item.cart} id={item.id} />
          })}
          <CheckoutContainer>
            <h3><span>Total: </span>€ {formatNumber(totalPrice)}</h3>
            <Button color='secondary' variant="contained" startIcon={<ShoppingCart />} onClick={handleCheckout}>BUY</Button>
          </CheckoutContainer>
        </Checkout>
      }
    </CartDiv>
  );
}

export default Cart;

const Checkout = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  border: 1px solid lightgrey;
  padding: 16px;
  background: white;
`

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  margin: 20px 0 0 0;

  >h3 {
    margin-bottom: 10px;
  }

  >h3 >span {
    font-weight: 400;
  }
`

const CartDiv = styled.div`
  > h3 {
    display: flex;
    justify-content: center;
    height: 80vh;
    align-items: center;
  }
`