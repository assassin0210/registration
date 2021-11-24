import { Button } from "../../styled/buttons";
import { IconCancel } from "../common";
import { useDispatch } from "react-redux";
import { Form } from "../Form";
import { BG, ButtonWrapper, ModalStyle } from "../../styled/common";
import { memo, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Transition } from "react-transition-group";

interface IModalProp {
  modalType: "login" | "registration";
  handleClick?: () => void;
}

export const Modal = memo(({ modalType }: IModalProp) => {
  const outClickRef = useRef<HTMLDivElement | null>(null);
  const [test, setTest] = useState<boolean>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleExit = () => {
    setTest(false);
    setTimeout(() => navigate("/"), 300);
  };

  useEffect(() => {
    setTest(true);
    const outsideClick = (event: any) => {
      event?.stopPropagation();
      if (!outClickRef.current?.contains(event.path?.[0] || event.target)) {
        setTest(false);

        setTimeout(() => navigate("/"), 300);
      }
    };
    document.addEventListener("click", outsideClick);

    const keydown = (event: any) => {
      if (event.key === "Escape" || event.key === "Esc") {
        setTest(false);

        setTimeout(() => navigate("/"), 300);
      }
    };
    document.addEventListener("keydown", keydown);

    return () => {
      document.removeEventListener("keydown", keydown);
      document.removeEventListener("click", outsideClick);
    };
  }, [dispatch, modalType, navigate]);

  return (
    <Transition in={test} timeout={300} unmountOnExit mountOnEnter>
      {(state) => (
        <StyledTest>
          <BG className={state} />

          <ModalStyle className={state} ref={outClickRef}>
            <ButtonWrapper>
              <Button onClick={handleExit} type="cancel">
                <IconCancel />
              </Button>
            </ButtonWrapper>
            <FormWrapper>
              <Form formType={modalType} />
            </FormWrapper>
          </ModalStyle>
        </StyledTest>
      )}
    </Transition>
  );
});

const show = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledTest = styled.div`
  .entering {
    animation: ${show} 300ms forwards;
  }

  .exiting {
    animation: ${show} 300ms reverse;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  flex: 1;
`;
