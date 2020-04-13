import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  flex: 0 0 20%;
`;

export const Time = styled.h3`
  font-weight: 600;
  color: #a0aec0;
`;

export const NameDisplay = styled.h1`
  text-transform: capitalize;
  font-size: 36px;
  font-weight: 700;
  color: #2d3748;
  &:hover {
    cursor: pointer;
    color: #5a67d8;
  }
`;

export const NameInput = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  outline: none;
  border: none;
  background: none;
  text-transform: capitalize;
  font-size: 36px;
  font-weight: 700;
  color: #2d3748;
  &::placeholder {
    color: #a0aec0;
  }
`;
