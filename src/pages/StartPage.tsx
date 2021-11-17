import styled from "styled-components";
import { Button } from "../styled/buttons";
import { Logo } from "../ui/components/Logo";

export const StartPage = () => {
  return (
    <Container>
      <Logo />
      <Button type="primary">Sign In</Button>
      <Button type="gold">Registration</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;
