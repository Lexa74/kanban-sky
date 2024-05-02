import styled, {createGlobalStyle, css} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *:before,
  *:after {
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button,
  ._btn {
    cursor: pointer;
    outline: none;
  }

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  ul li {
    list-style: none;
  }

  @keyframes card-animation {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: auto;
      opacity: 1;
    }
  }
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: #000000;
    margin: 0;
  }
`

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.body};
  color: ${({theme}) => theme.text};
`

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`

export const Hover1 = css`
  &:hover {
    background-color: #33399b;
  }
`

export const Hover2 = css`
  &:hover {
    color: #33399b;
  }
`

const orange = css`
  background-color: #FFE4C2;
  color: #FF6D00;
`

const green = css`
  background-color: #B4FDD1;
  color: #06B16E;
`

const purple = css`
  background-color: #E9D4FF;
  color: #9A48F1;
`

export const colorTheme = (color) => css`
    ${color === 'orange' && orange}
    ${color === 'green' && green}
    ${color === 'purple' && purple}
`