import React from 'react';
import styled from "styled-components"

// HTML 요소 스타일링(고정 스타일링)
// styled Components 만들기: const 컴포넌트명 = styled.태그명 ``
const ButtonOne = styled.button `
    padding: 6px 12px;
    margin: 10px;
    border: 2px solid orange;
    color: orange;
    font-size: 1rem;
`;

// React 컴포넌트 스타일링(가변형 스타일링)
// const 컴포넌트명 = styled(StyledButton)`스타일 문법`
// 특정 컴포넌트를 인수로 전달받아 해당 컴포넌트의 CSS 스타일을 확장할 수 있다.
const ButtonTwo = styled(ButtonOne)`
    border: 4px solid green;
    color: green;
    background: #f9f9f9;
`


export { ButtonOne, ButtonTwo };