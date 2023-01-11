import styled from "styled-components";

export const CounterContainer = styled.div`
  background-color: ${(props) => props.theme["purple-light"]};
  border-radius: 6px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  height: 2.375rem; 
  .counterBtn{
    cursor: pointer;
    border: none;
    background-color: transparent;  
    &:focus{
      outline: 0;
      box-shadow: none;
    } 
    padding: 0 0.1875rem;
    height: 100%; 
    width: calc(50% - 1rem);
    display: inline-flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme["purple-500"]}; 
    transition: all 0.2s; 
    &:hover{
      background-color: ${(props) => props.theme["purple-500"]};
      color: ${(props) => props.theme.white};
    }
  } 
  span{
    display: inline-block;
    width: 2rem;
    text-align: center;
    color: ${(props) => props.theme["base-title"]};
  }`