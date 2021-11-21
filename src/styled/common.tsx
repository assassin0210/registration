import styled, { keyframes } from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 20px 10px;
`;

export const BG = styled.div<{ $loginModal: boolean }>`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  visibility: ${({ $loginModal }) => ($loginModal ? "visible" : "hidden")};
  animation: ${({ $loginModal }) => ($loginModal ? fadeIn : fadeOut)} 0.25s linear;
  transition: visibility 0.25s linear;
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const ModalStyle = styled.div<{ $loginModal: boolean }>`
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
  visibility: ${({ $loginModal }) => ($loginModal ? "visible" : "hidden")};
  animation: ${({ $loginModal }) => ($loginModal ? fadeIn : fadeOut)} 0.35s linear;
  display: ${({ $loginModal }) => ($loginModal ? "" : "")};
  transition: visibility 0.35s linear;
`;
