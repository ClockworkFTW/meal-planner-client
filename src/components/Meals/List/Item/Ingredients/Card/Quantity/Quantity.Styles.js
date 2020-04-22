import styled from "styled-components";

export const Container = styled.div``;

export const Input = styled.input`
  width: 50px;
  border: none;
  outline: none;
  background: none;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.color};
`;

export const Display = styled.h3`
  width: 50px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.color};
  &:hover {
    cursor: pointer;
  }
`;
