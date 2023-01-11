import styled from "styled-components";

export const HeaderContainer = styled.header`

  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CidadeContainer = styled.div`
  background-color: ${(props) => props.theme["purple-light"]};
  padding: 0 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  height: 2.375rem;

  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  
  color: ${(props) => props.theme["purple-500"]};

  transition: filter 0.2s;
  
  &:hover{
    filter: brightness(0.95);
  }
`

export const CartButton = styled.button`
  background-color: ${(props) => props.theme["yellow-light"]};
  margin-left: 0.75rem;
  cursor: pointer;
  position: relative;

  width: 2.375rem;
  height: 2.375rem;
  
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 6px;
  color: ${(props) => props.theme["yellow-dark"]};

  transition: filter 0.2s;

  span{
    background-color: ${(props) => props.theme["yellow-dark"]};
    
    width: 1.25rem;
    height: 1.25rem;
    
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -0.375rem;
    right: -0.375rem;

    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-size: 0.75rem;

    border-radius: 50%;
  }

  &:hover{
    filter: brightness(0.95);
  }
`