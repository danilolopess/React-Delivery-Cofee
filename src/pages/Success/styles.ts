import styled from "styled-components";
import { Container } from "../../styles/global";

export const SuccessContainer = styled.div`
  padding: 5rem 0;
   
  ${Container}{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
  }

`

export const OrderInfo = styled.div`
  header{
    h2{
      color: ${(props) => props.theme["yellow-dark"]};
    }
    p{
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 1.25rem;
      line-height: 130%;
    }
  }

  main{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 2rem;

    margin-top: 2.5rem;
    border: 1px solid ${(props) => props.theme["purple-500"]};
    border-radius: 6px 36px;

  }
`

export const SuccessListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  .ico{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    color:  ${(props) => props.theme.white};

    &.map{
      background-color: ${(props) => props.theme["purple-500"]};
    }

    &.time{
      background-color: ${(props) => props.theme["yellow-500"]};
    }

    &.payment{
      background-color: ${(props) => props.theme["yellow-dark"]};
    }
  }

  p{
    font-size: 1rem;
    line-height: 130%;
  }
`