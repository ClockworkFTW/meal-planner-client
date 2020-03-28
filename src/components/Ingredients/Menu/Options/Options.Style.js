import styled from "styled-components";

export const Container = styled.div`
  height: ${props => `calc(100% - ${props.menuHeight}px)`};
  padding: 0 10px;
`;

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const SortButton = styled.button`
  outline: none;
  border: none;
  background: ${props => (props.active ? "red" : "none")};
`;

export const FilterButton = styled.button`
  outline: none;
  border: none;
  background: ${props => (props.active ? "red" : "none")};
`;
