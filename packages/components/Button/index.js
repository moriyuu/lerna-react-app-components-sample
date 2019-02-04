import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 14px;
  color: #fff;
  background-color: tomato;
  padding: 1em 1.5em;
  border-radius: 999px;
  cursor: pointer;
`;

export default function Button(props) {
  return <StyledButton>{props.children}</StyledButton>;
}
