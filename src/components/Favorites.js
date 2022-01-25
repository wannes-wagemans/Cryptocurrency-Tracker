import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ListOption from './ListOption';
import media from "styled-media-query";

function Favorites() {

  const list = useSelector(state => state.list)
  const listOfFavorites = list.filter((item) => {
    return item.favorite
  })

  return (
    <FavDiv>
      {listOfFavorites < 1 && <h3>You don't have any favorite Crypto's yet!</h3>}
      <FavContainer>
        {listOfFavorites.map((element) => {
          return (
            <ListOption key={element.id} cart={element.cart} favorite={element.favorite} name={element.name} price={element.current_price} image={element.image} change={element.price_change_percentage_24h} id={element.id} />
          )
        })}
      </FavContainer>
    </FavDiv>
  );
}

export default Favorites;

const FavContainer = styled.div`
  display: grid;
  gap: 10px;

  ${media.lessThan("small")`
    grid-template-columns: repeat(1, 1fr);
  `}

  ${media.between("small", "medium")`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.between("medium", "large")`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    grid-template-columns: repeat(4, 1fr);
  `}
`;

const FavDiv = styled.div`
    height: 78vh;
  > h3 {
    padding: 0 20px;
    position: fixed;
    top: 40%;
    text-align: center;
  }
`