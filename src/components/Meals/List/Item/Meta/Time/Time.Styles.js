import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #ffffff;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
`;

export const Group = styled.div`
  width: 40px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  margin: 4px 0;
  padding: 4px;
  border: none;
  outline: none;
  border-radius: 4px;
  background: #edf2f7;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  color: #2d3748;
`;

export const Span = styled.span`
  margin: 0 8px;
`;

export const Buttons = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
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

export const Display = styled.h1`
  font-weight: 600;
  color: #a0aec0;
  transition: 0.2s all ease-in-out;
  &:hover {
    cursor: pointer;
    color: #5a67d8;
  }
`;
