import { useEffect, useState } from "react";
import styled from "styled-components";
import ListOption from "./ListOption";
import media from "styled-media-query";

function List() {

  const [value, setValue] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => res.json())
      .then((data) => {
        setValue(data)
        console.log(data)
      })
  }, []);

  const last_update = value[0] == null ? "" : Date(value[0].last_updated)

  return (
    <Body>
      <BodyContainer>
        {value.map((element) => {
          return (
            <ListOption key={element.id} name={element.name} price={element.current_price} image={element.image} change={element.price_change_percentage_24h} />
          )
        })}
      </BodyContainer>
      <p>Last update: {last_update}</p>
    </Body>
  );
}

export default List;

const Body = styled.div`

  >p {
    margin-top: 10px;
    font-size: 12px;
    color: #496661;
  }

`
const BodyContainer = styled.div`
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