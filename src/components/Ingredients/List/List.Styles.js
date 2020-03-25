import styled from "styled-components";

export const Container = styled.div`
  height: ${props => `calc(100% - ${props.menuHeight}px)`};
  padding: 0 10px;
  overflow: scroll;
`;
