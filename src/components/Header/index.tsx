import { CartButton, CidadeContainer, HeaderContainer } from "./styles";

import logoCoffeeDelivery from '../../assets/images/Logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export function Header(){
  const { countCartItems } = useContext(CoffeeContext)

  return(
    <HeaderContainer>
      <Link to="/">
        <img src={logoCoffeeDelivery} alt="" />
      </Link>

      <div>
      <CidadeContainer>
        <MapPin size={22} weight="fill" />
        Poços de Caldas, MG
      </CidadeContainer>
      
      <Link to="/checkout">
        <CartButton>
          <ShoppingCart size={22} weight="fill" />
          <span>{countCartItems}</span>
        </CartButton>
      </Link>
      </div>

    </HeaderContainer>
  )
}