import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  flex: 0 0 30px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  border-radius: 50%;
  background: ${props => props.background};
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 18px;
  color: #ffffff;
`;
