
import styled from "styled-components";
import ListOption from "./ListOption";
import media from "styled-media-query";
import { useSelector } from 'react-redux'


function List() {

  const list = useSelector(state => state.list)
  const last_update = list[0] == null ? "" : Date(list[0].last_updated)

  return (
    <Body>
      <BodyContainer>
        {list.map((element) => {
          return (
            <ListOption key={element.id} name={element.name} price={element.current_price} image={element.image} change={element.price_change_percentage_24h} id={element.id} />
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