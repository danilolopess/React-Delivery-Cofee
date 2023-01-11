import styled from "styled-components";
import bgHero from '../../assets/images/bg-hero.svg'
import { Container } from "../../styles/global";

export const HeroContainer = styled.div`
  background: url(${bgHero}) no-repeat;
  background-size: contain;
  background-position: center;
  
  width: 100%;
  height: auto;
  min-height: 34rem;

  padding: 5rem 0;

  ${Container}{
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 3.125rem;
  }

`

export const HeroText = styled.div`
  width: 100%;
  max-width: 36.75rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  .title{
    h1{
      color: ${(props) => props.theme["base-title"]};
    }
   p{
    font-weight: 400;
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
    line-height: 130%;
    margin-top: 1rem;
   } 
  }
`

export const HeroList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  height: 6rem;

  li{
    display: flex;
    align-items: center;
    gap: 0.75rem;

    height: 50%;

    font-size: 1rem;

    .ico{
      color: ${(props) => props.theme.white};
      
      width: 2rem;
      height: 2rem;
      
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      
      &.yellow-dark{
        background-color: ${(props) => props.theme["yellow-dark"]};
      }
      
      &.yellow{
        background-color: ${(props) => props.theme["yellow-500"]};
      }
      
      &.gray{
        background-color: ${(props) => props.theme["base-text"]};
      }
      
      &.purple{
        background-color: ${(props) => props.theme["purple-500"]};
      }
    }
  }
`

export const HeroImg = styled.img`
  width: auto;
  flex: 1;
`

export const CoffeeListContainer = styled.div`
  h2{
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 3.125rem;
  }
`

export const CoffeeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;
`