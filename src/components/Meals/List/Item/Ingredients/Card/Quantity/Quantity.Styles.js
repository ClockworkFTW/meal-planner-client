import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  margin-right: 6px;
`;

export const Input = styled.input`
  width: 50px;
  border: none;
  outline: none;
  background: none;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.color};
  &::selection {
    background: ${props => props.color};
    color: #ffffff;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background: none;
  color: #a0aec0;
  &:hover {
    cursor: pointer;
    color: #667eea;
  }
`;

export const Icon = styled(FontAwesomeIcon)``;

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
