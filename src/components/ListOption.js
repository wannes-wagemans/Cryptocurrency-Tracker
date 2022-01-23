import { ArrowUpward, ArrowDownward, Favorite, AddOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { makeFavorite, addToCart } from '../actions';


function ListOption({ name, price, image, change, id }) {

  const dispatch = useDispatch()

  const color = change >= 0 ? '#16a34a' : '#dc2626'
  const arrow = change >= 0 ? <ArrowUpward sx={{ color: '#16a34a' }} /> : <ArrowDownward sx={{ color: '#dc2626' }} />

  return (
    <Crypto>
      <CryptoContainer>
        <img src={image} alt={name} />
        <CryptoBody>
          <h3>{name}</h3>
          <p>€ {price}</p>
          <CryptoChange>
            {arrow}
            <p style={{ color: color }}>{Math.round(Math.abs(change) * 100) / 100}%</p>
          </CryptoChange>
        </CryptoBody>
      </CryptoContainer>
      <CryptoAction>
        <button onClick={() => dispatch(makeFavorite(id))}>FAV</button>
        <button onClick={() => dispatch(addToCart(id))}>ADD</button>
      </CryptoAction>
    </Crypto>
  );
}

export default ListOption;

const Crypto = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: white;

  >div >img {
    height: 40px;
  }
`

const CryptoChange = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  >p {
    font-size: 14px;
  }

  > .MuiSvgIcon-root {
    font-size: 14px;
  }

`

const CryptoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #496661;
`

const CryptoBody = styled.div`
`

const CryptoAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > .MuiSvgIcon-root {
    padding: 5px;
    font-size: 36px;

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
  }
`