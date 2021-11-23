import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 20px 10px;
`;

export const BG = styled.div`
  z-index: 9998;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalStyle = styled.div`
  padding-bottom: 40px;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(103, 132, 162, 0.16), 0 4px 16px -2px rgba(103, 132, 162, 0.32);
  z-index: 999999;
  width: 400px;
  background: #d7d7d7;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  color: white;
`;
