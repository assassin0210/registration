import styled, { css } from "styled-components";
import { ISCCResult } from "../types/common";

type IButtonType = "primary" | "gold" | "cancel";

interface IButtonPropType {
  type?: IButtonType;
  children: any;
  onClick?: () => void;
}

export const Button = ({ children, type, onClick, ...rest }: IButtonPropType) => {
  return (
    <ButtonStyle {...rest} onClick={onClick} type={type}>
      {children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button<{ type?: any }>`
  padding: 6px 10px;
  background: ${({ theme }) => theme.systemColors.gold400};
  color: ${({ theme }) => theme.systemColors.black};
  font-weight: 600;
  border: none;
  outline: none;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  box-shadow: 0 0 4px rgb(0 0 0 / 20%);
  ${({ type = "primary" }) => ButtonTheme[type]}
`;

const ButtonTheme: Record<string, ISCCResult> = {
  gold: css`
    background: ${({ theme }) => theme.systemColors.gold400};
    color: ${({ theme }) => theme.systemColors.grey800};
    border-radius: 15px;
    padding: 6px 14px;

    &:hover,
    &:focus {
      background: ${({ theme }) => theme.systemColors.gold600};
      color: ${({ theme }) => theme.systemColors.black};
      box-shadow: 0 0 8px rgb(0 0 0 / 20%);
    }

    &:active {
      background: ${({ theme }) => theme.systemColors.gold800};
      color: ${({ theme }) => theme.systemColors.black};
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
    color: ${({ theme }) => theme.systemColors.black};
    font-weight: 600;

    &:hover,
    &:focus {
      background: ${({ theme }) => theme.systemColors.pink600};
      color: ${({ theme }) => theme.systemColors.black};
      box-shadow: 0 0 4px rgb(0 0 0 / 20%);
    }

    &:active {
      background: ${({ theme }) => theme.systemColors.pink800};
      color: ${({ theme }) => theme.systemColors.black};
      box-shadow: inset 0 0 8px rgb(0 0 0 / 20%) 0 0 4px rgb(0 0 0 / 20%);
    }

    &:disabled {
      cursor: default;
      background: ${({ theme }) => theme.systemColors.grey400};
      color: ${({ theme }) => theme.systemColors.grey600};
  `,
  cancel: css`
    background: ${({ theme }) => theme.systemColors.gold400};
    color: ${({ theme }) => theme.systemColors.grey800};

    &:hover,
    &:focus {
      background: ${({ theme }) => theme.systemColors.gold600};
      color: ${({ theme }) => theme.systemColors.black};
      box-shadow: 0 0 14px rgb(0 0 0 / 30%);
    }

    &:active {
      background: ${({ theme }) => theme.systemColors.gold800};
      color: ${({ theme }) => theme.systemColors.black};
    }

    &:disabled {
      background: ${({ theme }) => theme.systemColors.grey400};
      color: ${({ theme }) => theme.systemColors.grey600};
      cursor: default;
  `,
};
