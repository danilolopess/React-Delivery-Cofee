import { Minus, Plus } from "phosphor-react";
import { CounterContainer } from "./style";

interface CounterProps {
  itemAmount: number;
  handleIncrementAmount: () => void;
  handleDecreaseAmount: () => void;
}

export function Counter({itemAmount, handleIncrementAmount, handleDecreaseAmount}:CounterProps){
  return(
    <CounterContainer>
      <div className="counterBtn" onClick={handleDecreaseAmount}>
        <Minus size={14} weight="bold" />
      </div>
      <span>{itemAmount}</span>
      <div className="counterBtn" onClick={handleIncrementAmount}>
        <Plus size={14} weight="bold" />
      </div>
    </CounterContainer>
  )
}