import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  margin-top: 1.25rem;
  padding: 1.25rem 1.5rem;
  padding-top: 0;

  background-color: ${(props) => props.theme["base-card"]};
  position: relative;

  display: inline-flex;
  flex-direction: column;
  align-items: center;
  
  border-radius: 6px 36px;

  width: 100%;
  max-width: 16rem;
`

export const CardHeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    width: 80%;
    max-width: 7.5rem;
    margin-top: -1.25rem;
  }

  .tags{    
    display: flex;
    gap: 0.1875rem;
    margin: 1rem 0;
    
    strong{
      background: ${(props) => props.theme["yellow-light"]};
      padding: 0.25rem 0.5rem;
  
      border-radius: 50px;
  
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 130%;
      
      color: ${(props) => props.theme["yellow-dark"]};
    }
  }

  h3{
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme["base-subtitle"]};
  }

  .description{
    margin-top: 0.5rem;

    font-size: 14px;
    line-height: 130%;
    color: ${(props) => props.theme["base-label"]};
    text-align: center;
  }
`

export const CardFooterContainer = styled.footer`
  position: relative;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 13rem;

  .price{
    span{
     font-size: 0.875rem;
    }
    strong{
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 130%;
      padding-left: 0.1875rem;
    }
  }

  .addToCartButton{
    background-color: ${(props) => props.theme["purple-dark"]};
    color:  ${(props) => props.theme.white};
    cursor: pointer;

    border: none;
    border-radius: 6px;
    
    height: 2.375rem;
    width: 2.375rem;
    
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus{
      outline: 0;
      box-shadow: none;
    }

    transition: all 0.2s;

    &:hover{
      background-color: ${(props) => props.theme["purple-500"]};
    }
  }
`