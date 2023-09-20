import React from "react";
import styled, {css} from "styled-components";
// polished 패키지: lighten() 또는 darken()과 같은 유틸 함수를 사용할 수 있도록 해줌
import {lighten, darken} from "polished";






// props를 가변형 스타일링1
const StyledButton1 = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;

  color: ${(props) => props.color || "gray"};
  background: ${(props) => props.background || "white"};
  backgroung: #228be6;
  &:hover {
    background: ${lighten(0.1, '#228be6')};
  }
  &:active {

  }
`;

const Button1 = ({ children, color, background }) => {
  return (
    <StyledButton1 color={color} background={background} Î>
      {children}
    </StyledButton1>
  );
}


// props를 가변형 스타일링2
const StyledButton2 = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;

  ${(props) => {
    const selected = props.theme.palette.blue;
    return css`
        background: ${selected};
        &:hover {
            blackground: ${lighten(0.1, selected)};
        }
        &:active {
            blackground: ${darken(0.1, selected)};
        }
  `}}

`;

const Button2 = ({ children, ...props }) => {
    return (
      <StyledButton2 {...props}>
        {children}
      </StyledButton2>
    );
  }

export {Button1, Button2};