import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 8px;
  border-radius: 50px;
  background: #edf2f7;
`;

export const Input = styled.input`
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
  flex: 0 0 20px;
  padding: 0;
  outline: none;
  border: none;
  background: none;
  font-size: 16px;
  color: #718096;
  &:hover {
    cursor: pointer;
  }
`;
