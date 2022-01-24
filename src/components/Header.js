import styled from "styled-components";
import pau from "../img/pau.svg"
import media from "styled-media-query";
import { Favorite, Home, ShoppingCart } from '@mui/icons-material';
import { Badge, BottomNavigation, Button, Paper } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {

  const list = useSelector(state => state.list)

  const listOfFavorites = list.filter((item) => {
    return item.favorite
  })
  const numberOfFavorites = listOfFavorites.length

  const cartItems = list.filter((item) => {
    return item.cart
  })

  let numberOfCartItems = 0
  for (let i = 0; i < cartItems.length; i++) {
    numberOfCartItems += cartItems[i].cart
  }

  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");

  const [page, setPage] = useState('home');

  const handleChange = (event, newPage) => {
    setPage(newPage);
  };


  return (
    <div>
      <Nav>
        <NavContainer>
          <Head >
            <img src={pau} alt="Pàu Logo" />
            <p>Crypto</p>
          </Head>
          <NavDiv value={page} onChange={handleChange}>
            <Button sx={{ color: splitLocation[1] === "" ? "#FFC714" : "white" }} component={NavLink} to="/" startIcon={<Home />}>HOME</Button>
            <Button sx={{ color: splitLocation[1] === "favorites" ? "#FFC714" : "white" }} component={NavLink} to="/favorites" startIcon={<Badge badgeContent={numberOfFavorites} color="secondary"><Favorite /></Badge>}>Favorites</Button>
            <Button sx={{ color: splitLocation[1] === "checkout" ? "#FFC714" : "white" }} component={NavLink} to="/checkout" startIcon={<Badge badgeContent={numberOfCartItems} color="secondary"><ShoppingCart /></Badge>}>Cart</Button>
          </NavDiv>
          <FootDiv elevation={3}>
            <BottomNavigation value={page} onChange={handleChange}>
              <BottomNavigationAction
                component={Link}
                to="/"
                label="Home"
                value="home"
                icon={<Home />}
              />
              <BottomNavigationAction
                component={Link}
                to="/favorites"
                label="Favorites"
                value="favorites"
                icon={<Badge badgeContent={numberOfFavorites} color="secondary"><Favorite /></Badge>}
              />
              <BottomNavigationAction
                component={Link}
                to="/checkout"
                label="Cart"
                value="cart"
                icon={<Badge badgeContent={numberOfCartItems} color="secondary"><ShoppingCart /></Badge>}
              />
            </BottomNavigation>
          </FootDiv>
        </NavContainer>
      </Nav>
    </div >
  );
}

export default Header;

const Nav = styled.nav`
  ${media.greaterThan("medium")`
      position: fixed;
      padding: 0 40px;
      top: 0;
      left: 0;
      right: 0;
      background-color: #013229;
      z-index: 1000;
    `}
`
const NavContainer = styled.nav`
  ${media.greaterThan("medium")`
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      max-width: 1200px
    `}
`


const Head = styled.div`
${media.lessThan("medium")`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  `}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #013229;
  font-size: 20px;
  font-weight: 500;
  color: white;
  padding: 10px;

  >p {
    font-size: 16px;
    font-weight: 400;
  }
  >img {
    width: 50px;
  }
  
    `

const FootDiv = styled(Paper)`
  ${media.lessThan("medium")`
    z-index: 1000;
    position: fixed;
    bottom: 0; 
    left: 0;
    right: 0;
  `}

  ${media.greaterThan("medium")`
    display: none;
  `}
`

const NavDiv = styled.div`
  ${media.greaterThan("medium")`
    display: flex;
    gap: 20px;
  `}
  ${media.lessThan("medium")`
    display: none;
  `}
`