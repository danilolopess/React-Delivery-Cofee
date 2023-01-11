import styled from "styled-components";
import { Container } from "../../styles/global";

export const CheckoutContainer = styled.div`
  ${Container}{
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }

  h2{
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;

    padding-bottom: 1rem;
  }
`

export const CheckoutForm = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
  margin-bottom: 0.75rem;

  header{
    display: flex;
    
    .icon{
      &-map{
        color: ${(props) => props.theme["yellow-dark"]};
      }
      &-dollar{
        color: ${(props) => props.theme["purple-500"]};
      }
    }

    .text{
      padding-left: 0.5rem;
      line-height: 130%;
      
      h3{
        font-size: 1rem;
        font-weight: 400;
        color: ${(props) => props.theme["base-subtitle"]};
      }

      span{
        font-size: 0.875rem;
        font-weight: 400;
        color: ${(props) => props.theme["base-text"]};
      }
    }
  }

  main{
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const FormInputRow = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const FormInput = styled.input`

  padding: 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid ${(props) => props.theme["base-button"]};
  
  background-color: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-text"]};

  &::placeholder{
    color: ${(props) => props.theme["base-label"]};
  }

  &#cep{
    display: block ;
  }

  &#uf{
    width: 3.75rem;
  }

  &#rua, &#complemento, &#cidade{
    flex: 1;
  }

`

interface PaymentMethodProps {
  isActive?: boolean
}

export const PaymentMethod = styled.button<PaymentMethodProps>`

  padding: 1rem;
  flex: 1;
  min-width: 11.25rem;
  
  cursor: pointer;
  background-color: ${(props) => props.theme["purple-light"]};
  border-radius: 6px;
  border: 2px solid;
  border-color: ${ ({isActive}) => isActive ? '#8047F8' : 'transparent' };

  &:focus{
    box-shadow: none;
  }

  display: flex;
  align-items: center;
  gap: 0.75rem;

  transition: all 0.2s;

  svg{
    color: ${(props) => props.theme["purple-500"]};
  }

  span{
    font-size: 0.75rem;
    white-space: nowrap;
    text-transform: uppercase;
  }

  &:hover{
    background-color: ${(props) => props.theme["base-hover"]};
  }
`

export const SelectedCoffeeContainer = styled.div`
  flex: 1;
`

export const CartContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 0.375rem 2.75rem;
  padding: 2.5rem;

`

export const CartItemContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding: 1.5rem 0;

  .row{
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    span{
      font-size: 0.875rem;
    }
    strong{
      font-weight: 700;
      font-size: 1.25rem;
      color: ${(props)=>props.theme["base-subtitle"]};
    }
  }

  .confirm{
    background-color: ${(props)=>props.theme["yellow-500"]};
    border: none;
    border-radius: 6px;
    cursor: pointer;
    
    padding: 0.75rem 0.5rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 160%;
    color: ${(props)=>props.theme.white};
    text-transform: uppercase;

    transition: background-color 0.2s;

    &:hover{
      background-color: ${(props)=>props.theme["yellow-dark"]};
    }
    
    &:disabled{
      cursor: not-allowed;
      background-color: ${(props)=>props.theme["base-label"]};
    }
  }
`
