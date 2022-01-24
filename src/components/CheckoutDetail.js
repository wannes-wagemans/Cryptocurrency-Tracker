import React from 'react';
import styled from 'styled-components';
import { formatNumber } from '../utils/format';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { addToCart, removeCart } from '../actions';
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import media from "styled-media-query";

function CheckoutDetail({ name, price, cart, image, id }) {

  const dispatch = useDispatch()

  return (
    <Container>
      <ContainerLeft>
        <IconButton onClick={() => dispatch(addToCart(id))}><AddCircleOutlineIcon /></IconButton>
        <IconButton onClick={() => dispatch(removeCart(id))}><RemoveCircleOutlineIcon /></IconButton>
        <img src={image} alt={name} />
        <p>{name} x {cart}</p>
      </ContainerLeft>
      <ContainerRight>
        <p>€ {formatNumber(price)}</p>
        <p>€ {formatNumber(price * cart)}</p>
      </ContainerRight>
    </Container>
  );
}

export default CheckoutDetail;

const Container = styled.div`
  padding: 10px 10px 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

`
const ContainerLeft = styled.p`
  display: flex;
  align-items: center;

  >img {
    height: 30px;
    margin: 0 10px 0 0;
  }

  ${media.lessThan("medium")`
    > button:first-child {
      display: none;
    }
    >img {
    height: 30px;
    margin: 0 5px 0 0;
  }
  `}
`
const ContainerRight = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: right;
  margin-left: 10px;

  > p {
    min-width: 120px;
  }

  ${media.lessThan("small")`
    > p:first-child {
      display: none;
    }
  `}
`