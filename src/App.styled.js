import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const MainBox = styled.div`
  width: 90%;
  max-width: 360px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 30px 0;
  text-align: center;
  border-radius: 5px;
`;

export const ListBox = styled.div`
font-weight: "600", 
font-size: "24px",
h3 {
  display: "flex",
 justifyContent: "start",
  marginLeft: "35px",
}
`;
