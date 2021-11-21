import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const IconCancel = styled(FontAwesomeIcon).attrs({ icon: faTimes })`
  font-size: 16px;
`;

export const ErrorMessage = ({ children }: any) => {
  return <ErrorText>{children}</ErrorText>;
};

const ErrorText = styled.div`
  position: absolute;
  font-size: 12px;
  left: 3%;
  bottom: 0;
  color: ${({ theme }) => theme.systemColors.pink600};
`;
