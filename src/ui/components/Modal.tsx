import { Button } from "../../styled/buttons";
import { IconCancel } from "../common";
import { useDispatch } from "react-redux";
import { Form } from "../Form";
import { BG, ButtonWrapper, ModalStyle } from "../../styled/common";
import { memo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface IModalProp {
  modalType: "login" | "registration";
  handleClick?: () => void;
}

export const Modal = memo(({ modalType }: IModalProp) => {
  const outClickRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const outsideClick = (event: any) => {
      event?.stopPropagation();
      if (!outClickRef.current?.contains(event.path?.[0] || event.target)) {
        navigate("/");
      }
    };
    document.addEventListener("click", outsideClick);

    const keydown = (event: any) => {
      if (event.key === "Escape" || event.key === "Esc") {
        navigate("/");
      }
    };
    document.addEventListener("keydown", keydown);

    return () => {
      document.removeEventListener("keydown", keydown);
      document.removeEventListener("click", outsideClick);
    };
  }, [dispatch, modalType, navigate]);

  return (
    <>
      <BG />
      <ModalStyle onClick={(e) => {}} ref={outClickRef}>
        <ButtonWrapper>
          <Button onClick={() => navigate("/")} type="cancel">
            <IconCancel />
          </Button>
        </ButtonWrapper>
        <FormWrapper>
          <Form formType={modalType} />
        </FormWrapper>
      </ModalStyle>
    </>
  );
});

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  flex: 1;
`;
