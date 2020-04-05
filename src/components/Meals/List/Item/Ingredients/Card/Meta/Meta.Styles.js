import styled from "styled-components";

export const Container = styled.div`
  margin-left: 20px;
  font-weight: 600;
  font-size: 14px;
  color: ${props => (props.dragging ? "#e2e8f0" : "#718096")};
  &:hover {
    cursor: pointer;
  }
`;
