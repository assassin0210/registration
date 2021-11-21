import styled, { css } from "styled-components";
import { ISCCResult } from "../types/common";
import google from "./../static/google.png";

type IButtonType = "primary" | "gold" | "cancel";

interface IButtonPropType {
  type?: IButtonType;
  children: JSX.Element | string;
  onClick?: () => void;
  disabled?: boolean;
}

export const GoogleButton = (props: any) => {
  return (
    <GoogleStyle {...props}>
      <img src={google} alt="google" /> <p>Login with Google</p>
    </GoogleStyle>
  );
};

const GoogleStyle = styled.div`
  font-size: 16px;
  padding: 6.5px 10px;
  box-shadow: 0 1px 4px rgba(103, 132, 162, 0.16), 0 4px 16px -2px rgba(103, 132, 162, 0.32);
  background: ${({ theme }) => theme.systemColors.grey100};
  border-radius: 5px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  gap: 5px;
  transition: box-shadow 0.2s linear;

  img {
    height: 22px;
  }
  &:hover {
    box-shadow: 6px 6px 4px rgba(103, 132, 162, 0.16), 0 4px 16px -2px rgba(103, 132, 162, 0.32);
  }
  &:active {
    box-shadow: 8px 8px 8px rgba(103, 132, 162, 0.26), 11px 11px 16px -2px rgba(103, 132, 162, 0.32);
  }
`;

export const Button = ({ children, type, onClick, disabled, ...rest }: IButtonPropType) => {
  return (
    <ButtonStyle disabled={disabled} {...rest} onClick={onClick} type={type}>
      {children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button<{ type?: any }>`
  padding: 10px 14px;
  color: ${({ theme }) => theme.systemColors.white};
  font-weight: 600;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0 0 4px rgb(0 0 0 / 20%);

  transition: all 0.2s ease-in-out;
  ${({ type = "primary" }) => ButtonTheme[type]}
`;

const ButtonTheme: Record<string, ISCCResult> = {
  gold: css`
    background: ${({ theme }) => theme.systemColors.gold400};
    color: ${({ theme }) => theme.systemColors.black};
    border-radius: 15px;
    padding: 6px 14px;

    &:hover,
    &:focus {
      background: ${({ theme }) => theme.systemColors.gold600};
      box-shadow: 0 0 8px rgb(0 0 0 / 20%);
    }

    &:active {
      background: ${({ theme }) => theme.systemColors.gold800};
      box-shadow: inset 0 0 12px rgb(0 0 0 / 20%) 0 0 4px rgb(0 0 0 / 20%);
    }

    &:disabled {
      background: ${({ theme }) => theme.systemColors.grey400};
      color: ${({ theme }) => theme.systemColors.grey600};
      cursor: default;
    }
  `,
  primary: css`
    background: ${({ theme }) => theme.systemColors.pink400};
    color: ${({ theme }) => theme.systemColors.white};
    font-weight: 600;
    border-radius: 8px;
    transition: box-shadow 0.2s ease-in-out;


    &:hover,
    &:focus {
      background: ${({ theme }) => theme.systemColors.pink600};
      box-shadow: 0 0 4px rgb(0 0 0 / 20%);
    }

    &:active {
      background: ${({ theme }) => theme.systemColors.pink800};
      box-shadow: inset 0 0 8px rgb(0 0 0 / 20%) 0 0 4px rgb(0 0 0 / 20%);
    }

    &:disabled {
      cursor: default;
      background: ${({ theme }) => theme.systemColors.grey300};
      color: ${({ theme }) => theme.systemColors.grey600};
  `,
  cancel: css`
    background: ${({ theme }) => theme.systemColors.grey200};
    color: ${({ theme }) => theme.systemColors.grey800};
    border-radius: 6px;
    transition: box-shadow 0.2s ease-in-out;

    &:hover,
    &:focus {
      background: ${({ theme }) => theme.systemColors.grey200};
      box-shadow: 0 0 10px  rgb(0 0 0 / 20%);
    }

    &:active {
      background: ${({ theme }) => theme.systemColors.grey300};
    }

    &:disabled {
      background: ${({ theme }) => theme.systemColors.grey400};
      color: ${({ theme }) => theme.systemColors.grey600};
      cursor: default;
  `,
};
