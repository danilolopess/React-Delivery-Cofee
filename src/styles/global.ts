import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};

    padding-bottom: 400px;
  }

  body, input, button, textarea{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2{
    font-family: 'Baloo 2';
  }

  h1{
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
  }

  h2{
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
  }

`
export const Container = styled.div`
  width: 100%;
  padding: 0 1rem;
  max-width: 70rem;
  margin: 0 auto;
`