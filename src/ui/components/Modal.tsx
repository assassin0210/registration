import { useModal } from "../../hooks/modals";
import { Button } from "../../styled/buttons";
import { IconCancel } from "../common";
import { useDispatch } from "react-redux";
import { setLoginModal, setRegistrationModal } from "../../core/store/slices/modalsSlice";
import { Form } from "../Form";
import { BG, ButtonWrapper, ModalStyle } from "../../styled/common";
import { useEffect } from "react";
import styled from "styled-components";

interface IModalProp {
  modalType: "login" | "registration";
  handleClick?: () => void;
}

export const Modal = ({ modalType }: IModalProp) => {
  const { registrationModal, loginModal } = useModal();
  const dispatch = useDispatch();

  useEffect(() => {
    document.onkeydown = function (evt) {
      if (evt.key === "Escape") {
        dispatch(setLoginModal(false));
        dispatch(setRegistrationModal(false));
      }
    };
  }, [dispatch, modalType]);

  return (
    <>
      <BG
        onClick={(e) =>
          e.currentTarget === e.target &&
          dispatch(modalType === "login" ? setLoginModal(false) : setRegistrationModal(false))
        }
        $loginModal={modalType === "login" ? loginModal : registrationModal}
      />
      <ModalStyle $loginModal={modalType === "login" ? loginModal : registrationModal}>
        <ButtonWrapper>
          <Button
            onClick={() =>
              dispatch(modalType === "login" ? setLoginModal(false) : setRegistrationModal(false))
            }
            type="cancel"
          >
            <IconCancel />
          </Button>
        </ButtonWrapper>
        <FormWrapper>
          <Form handleClick={() => {}} formType={modalType} />
        </FormWrapper>
      </ModalStyle>
    </>
  );
};

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  flex: 1;
`;
