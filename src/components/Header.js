import styled from "styled-components";
import pau from "../img/pau.svg"

function Header() {
  return (
    <Head>
      <img src={pau} alt="Pàu Logo" />
      <p>Crypto</p>
    </Head>
  );
}

export default Header;

const Head = styled.div`
  background-color: #013229;
  font-size: 20px;
  font-weight: 500;
  color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  >img {
    width: 50px;
  }

  >p {
    font-size: 16px;
    font-weight: 400;
  }

`