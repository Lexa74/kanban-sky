import styled from "styled-components";
import {colorTheme} from "../../globalStyle.styled.js";

export const CardContainer = styled.div`
  width: 220px;
  background-color: ${({theme}) => theme.primary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`

export const CardTheme = styled.div`
  width: auto;
  padding: 5px 14px;
  border-radius: 18px;
  ${(props) => colorTheme(props.$color)}
  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
`

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({theme}) => theme.text};
  margin-bottom: 10px;
`