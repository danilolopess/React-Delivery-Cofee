import { CartItemContainer } from "./styles";

import { Counter } from "../Counter";
import { Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CoffeeCardProps, CoffeeContext } from "../../contexts/CartContext";
import { formatPrice } from "../../util/format";

interface itemAmountProps {
  id: number
  amount: number
}

export function CartItem({id, amount}:itemAmountProps) {

  const { defaultList, updateCart, removeItemFromCart } = useContext(CoffeeContext)
  
  const coffeeCardInicialState = {id: id, amount: amount }  
  
  const productItem = defaultList.find(product => product.id === id) as CoffeeCardProps;
  const subtotal = productItem.price * amount;
  const subtotalFormatted = formatPrice(subtotal);
  
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

  function handleRemoveItem() {
    removeItemFromCart(id)
  }

  useEffect(() => {
    updateCart(itemAmount)
  }, [itemAmount])

  return(
    
        <CartItemContainer>
          <div className="img">
            <img src={`/src/assets/images/${productItem.image}`} alt="" />
          </div>
          <div className="infos">
            <h3>{productItem.title}</h3>
            <Counter
              itemAmount={itemAmount.amount}
              handleIncrementAmount={handleIncrementAmount}
              handleDecreaseAmount={handleDecreaseAmount}
            />
            <button 
              className="remove"
              onClick={handleRemoveItem}
            >
              <Trash size={16} />
              <span>Remover</span>
            </button>
          </div>
          <span className="price">
          {subtotalFormatted}
          </span>
        </CartItemContainer>
      
  )
}