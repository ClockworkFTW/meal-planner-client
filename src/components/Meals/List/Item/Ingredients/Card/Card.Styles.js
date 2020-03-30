import styled from "styled-components";
import Highlighter from "react-highlight-words";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 16px;
  background: #f7fafc;
`;

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Quantity = styled.input`
  width: 50px;
  border: none;
  outline: none;
  background: none;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.color};
`;

export const Name = styled(Highlighter)`
  line-height: 20px;
  font-weight: 600;
  font-size: 16px;
  color: #2d3748;
  & > mark {
    background: none;
    color: ${props => props.color};
  }
`;

export const Button = styled.button`
  margin-left: 8px;
  border: none;
  outline: none;
  background: none;
  font-size: 16px;
  color: #a0aec0;
  &:hover {
    cursor: pointer;
    color: #718096;
  }
`;

export const Icon = styled(FontAwesomeIcon)``;
