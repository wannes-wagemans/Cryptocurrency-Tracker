import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ListOption from './ListOption';

function Cart() {
  const list = useSelector(state => state.list)
  const cartItems = list.filter((item) => {
    return item.cart
  })

  console.log(cartItems)

  return (
    <div>
      {cartItems < 1 && "You don't have any Crypto's in your cart yet!"}
      <CartContainer>
        {cartItems.map((element) => {
          return (
            <ListOption key={element.id} name={element.name} price={element.current_price} image={element.image} change={element.price_change_percentage_24h} id={element.id} />
          )
        })}
      </CartContainer>
    </div>
  );
}

export default Cart;

const CartContainer = styled.div`
`