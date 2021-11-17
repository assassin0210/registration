import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();
  return <LogoStyle onClick={() => navigate("/")}>Best Movies</LogoStyle>;
};

const LogoStyle = styled.h2`
  font-family: "Lobster", cursive;
  cursor: pointer;
`;
