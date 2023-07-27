import { ShoppingCart } from "phosphor-react";
import { Header, Link, Nav } from "./NavBar.styled";

const NavBar = () => {
  return (
    <Header>
      <Nav>
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </Nav>
    </Header>
  );
};

export default NavBar;
