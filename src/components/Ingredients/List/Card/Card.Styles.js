import styled from "styled-components";
import Highlighter from "react-highlight-words";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 16px;
  background: #f7fafc;
`;

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled(Highlighter)`
  line-height: 20px;
  font-weight: 600;
  font-size: 16px;
  color: #2d3748;
  & > mark {
    background: none;
    color: ${props => props.color};
  }
`;

export const Meta = styled.div`
  margin-left: 20px;
  font-weight: 600;
  font-size: 14px;
  color: #718096;
`;
