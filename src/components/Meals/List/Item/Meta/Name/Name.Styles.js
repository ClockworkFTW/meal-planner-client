import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 20px);
  margin-top: 4px;
`;

export const Input = styled.textarea`
  width: 100%;
  height: calc(100% - 20px);
  padding: 0;
  resize: none;
  outline: none;
  border: none;
  background: none;
  text-transform: capitalize;
  line-height: 40px;
  font-family: inherit;
  font-size: 36px;
  font-weight: 700;
  color: #2d3748;
  &::placeholder {
    color: #a0aec0;
  }
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
  margin-top: 4px;
  text-transform: capitalize;
  line-height: 40px;
  font-size: 36px;
  font-weight: 700;
  color: #2d3748;
  transition: 0.2s all ease-in-out;
  &:hover {
    cursor: pointer;
    color: #5a67d8;
  }
`;
