import { Container } from "../../styles/global";
import { OrderInfo, SuccessContainer, SuccessListItem } from "./styles";
import SucessImg from "../../assets/images/delivery.svg"
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CartContext";

export function Success() {

  const { adress, city, paymentMethod } = useContext(CoffeeContext)
  
  return(
    <SuccessContainer>
      <Container>
        <OrderInfo>
          <header>
            <h2>Uhu! Pedido confirmado</h2>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </header>
          <main>
            <SuccessListItem>
              <div className="ico map">
                <MapPin size={16} weight="fill" />
              </div>
              <p>
                Entrega em <strong>{adress}</strong>
                <br />
                {city}
              </p>
            </SuccessListItem>
            <SuccessListItem>
              <div className="ico time">
                <Timer size={16} weight="fill" />
              </div>
              <p>Previsão de entrega<br /><strong>20 min - 30 min</strong></p>
            </SuccessListItem>
            <SuccessListItem>
              <div className="ico payment">
                <CurrencyDollar size={16}  />
              </div>
              <p>Pagamento na entrega<br /><strong>{paymentMethod}</strong></p>
            </SuccessListItem>
          </main>
        </OrderInfo>
        <div className="image">
          <img src={SucessImg} alt="" />
        </div>
      </Container>
    </SuccessContainer>
  )
}