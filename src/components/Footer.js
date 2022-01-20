import { Favorite, Home, ShoppingCart } from '@mui/icons-material';
import { BottomNavigation, Paper } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          icon={<Home />}
        />
        <BottomNavigationAction
          component={Link}
          to="/favorites"
          label="Favorites"
          icon={<Favorite />}
        />
        <BottomNavigationAction
          component={Link}
          to="/checkout"
          label="Cart"
          icon={<ShoppingCart />}
        />
      </BottomNavigation>
    </Paper>
  );
}

export default Footer;
