import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 30px 20px 30px;
  padding: 10px;
  border: 1px solid #edf2f8;
  border-radius: 100px;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  background: none;
  color: #f6ad55;
  &:hover {
    cursor: pointer;
    color: #ed8936;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 16px;
`;

export const Now = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #2d3748;
`;
