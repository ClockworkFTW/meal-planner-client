import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-right: 8px;
  padding-right: 8px;
  border-radius: 12px;
  background: #f7fafc;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background: none;
  font-family: inherit;
  font-size: 16px;
  color: #2d3748;
  &::placeholder {
    color: #718096;
  }
`;

export const Button = styled.button`
  flex: 0 0 34px;
  height: 34px;
  padding: 0;
  outline: none;
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 16px;
  color: #718096;
`;
