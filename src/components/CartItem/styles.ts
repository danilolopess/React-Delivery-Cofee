import styled from "styled-components"
import { CounterContainer } from "../Counter/style"

export const CartItemContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  padding: 1.5rem 0;
 
  border-bottom: 1px solid ${(props)=>props.theme["base-button"]};

  .img{
    height: 4rem;
    width: 4rem;

    img{
      height: 100%;
    }
  }

  .infos{
    flex: 1;
    display: flex;
    flex-wrap: wrap;

    padding: 0 0.5rem;

    h3{
      width: 100%;
      display: block;
      
      font-size: 1rem;
      font-weight: 400;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    .remove{

      padding: 0 0.5rem;
      margin-left: 0.5rem;
      cursor: pointer;
      border: none;
      border-radius: 0.375rem;

      height: 2rem;
      
      background-color: ${(props) => props.theme["base-button"]};

      display: flex;
      align-items: center;
      gap: 0.25rem;

      opacity: 0.8;

      svg{
        color: ${(props) => props.theme["purple-500"]}
      }

      span{
        text-transform: uppercase;
        font-weight: 400;
        font-size: 0.75rem;
      }

      &:hover{
        opacity: 1;
      }
    }
  }

  .price{
    font-weight: 700;
    font-size: 1rem;
  }

  ${CounterContainer}{
    height: 2rem;
    span{
    width: 1.5rem;
    }
  }
`