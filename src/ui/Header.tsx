import styled from "styled-components";
import { Logo } from "./components/Logo";
import { Button } from "../styled/buttons";
import { NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderStyle>
      <Logo />
      <div>
        <NavLink to="">1</NavLink>
        <NavLink to="">2</NavLink>
        <NavLink to="">3</NavLink>
        <NavLink to="">4</NavLink>
        <NavLink to="">5</NavLink>
        <NavLink to="">6</NavLink>
      </div>

      <ButtonWrapper>
        <Button onClick={() => navigate("login")} type="primary">
          Login
        </Button>

        <Button onClick={() => navigate("registration")} type="gold">
          Registration
        </Button>
      </ButtonWrapper>
    </HeaderStyle>
  );
};
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;
const HeaderStyle = styled.header`
  background: transparent;
  margin-top: 20px;
  z-index: 10;
  top: 0;
  width: 100%;
  left: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
