import styled from "styled-components/macro";
import { useNavigate } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();
  return <LogoStyle onClick={() => navigate("/")}>Best Movies</LogoStyle>;
};

const LogoStyle = styled.h2`
  font-family: "Lobster", sans-serif;
  font-weight: normal;
  cursor: pointer;
  //border: 2px solid white;
  //padding: 5px;
  color: ${({ theme }) => theme.systemColors.white};
`;
