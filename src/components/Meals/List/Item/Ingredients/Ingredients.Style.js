import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
  border: ${props =>
    props.dropping ? "2px dashed #CBD5E0" : "2px solid #FFFFFF"};
  border-radius: 8px;
`;

export const Message = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #a0aec0;
`;
