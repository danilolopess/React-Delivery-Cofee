import { CardFooterContainer, CardHeaderContainer, CoffeeCardContainer } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { formatPrice } from '../../util/format';
import { useContext, useState } from "react";

import { CoffeeCardProps, CoffeeContext } from '../../contexts/CartContext'
import { Counter } from "../Counter";

interface itemAmountProps {
  id: number
  amount: number
}


export function CoffeeCard({ id, image, tags, title, description, price } : CoffeeCardProps){

  const coffeeCardInicialState = {id: id, amount: 1 }
  
  const { addToCart } = useContext(CoffeeContext)

  const [itemAmount, setItemAmount] = useState<itemAmountProps>(coffeeCardInicialState);

  function handleIncrementAmount() {

    setItemAmount({
      id: id,
      amount: itemAmount.amount + 1
    })
    
  }

  function handleDecreaseAmount() {
    
    if (itemAmount.amount > 1){
      setItemAmount({
        id: id,
        amount: itemAmount.amount - 1
      })
    }
    
  }

  function handleAddToCart() {
    addToCart(itemAmount)
    setItemAmount(coffeeCardInicialState)
  }

  const priceFormatted = formatPrice(price);

  return(
    <CoffeeCardContainer>
          <CardHeaderContainer>
            <img src={`/src/assets/images/${image}`} alt="" />
            <div className="tags">
              {
                tags.map((tag) => (
                  <strong key={tag}>{tag}</strong>
                ))
              }
            </div>
            <h3>{title}</h3>
            <span className="description">{description}</span>
          </CardHeaderContainer>

          <CardFooterContainer>
            <div className="price">
              <strong>{priceFormatted}</strong>
            </div>
            <Counter
              itemAmount={itemAmount.amount}
              handleIncrementAmount={handleIncrementAmount}
              handleDecreaseAmount={handleDecreaseAmount}
            />
            <button className="addToCartButton" onClick={handleAddToCart}>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </CardFooterContainer>

    </CoffeeCardContainer>
  )
}