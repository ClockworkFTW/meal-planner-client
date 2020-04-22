import styled from "styled-components";
import Highlighter from "react-highlight-words";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 16px;
  background: ${props => (props.dragging ? "#4a5568" : "#f7fafc")};
`;

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled(Highlighter)`
  line-height: 20px;
  font-weight: 600;
  font-size: 16px;
  color: ${props => (props.dragging ? "#ffffff" : "#2d3748")};
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
