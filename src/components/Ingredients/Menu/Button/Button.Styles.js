import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.button`
  flex: 0 0 34px;
  height: 34px;
  padding: 0;
  outline: none;
  border: none;
  border-radius: 12px;
  background: #f7fafc;
  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 16px;
  color: #718096;
`;
