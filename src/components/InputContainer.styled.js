import styled from "styled-components";

export const MainTitle = styled.div`
  h3 {
    font-weight: 600;
    font-size: 28px;
    display: flex;
    justify-content: start;
    margin-left: 35px;
  }
`;
export const ErrorText = styled.p`
  color: red;
  margin-bottom: 2px;
  font-size: 10px;
`;

export const AddButtonBox = styled.div`
  margin-bottom: 8px;
  
  display: flex;
  margin-right: 35px;
  justify-content: flex-end;
  button {
    border: 0;
    outline: 0;
    background: greenyellow;
    border-radius: 5px;
    padding: 3px 5px;
    font-size: 12px;
    cursor: pointer;
    width: 96px;
    height: 36px;
    font-weight: 600;
  }
`;