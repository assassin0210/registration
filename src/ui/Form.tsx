import { useForm } from "react-hook-form";
import { Button, GoogleButton } from "../styled/buttons";
import { ErrorMessage } from "./common";
import { loginThunk, loginWithGoogle } from "../core/store/thunks/authThunk";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";

interface IPropType {
  formType: "login" | "registration";
}

export interface InputsSingUp {
  Name?: string;
  Email: string;
  Pass: string;
  DoublePass?: string;
  Policy?: boolean;
}

export const Form = ({ formType }: IPropType) => {
  const dispatch = useDispatch();
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<InputsSingUp>({ mode: "onChange" });

  const onSubmit = (data: InputsSingUp) => {
    dispatch(loginThunk(data));
  };

  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      {formType === "registration" && (
        <>
          <label>Name</label>
          <InputWrapper>
            <Input placeholder="Your name" type="text" {...register("Name", { required: true })} />
            {errors.Name && <ErrorMessage> Name field cannot be empty </ErrorMessage>}
          </InputWrapper>
        </>
      )}
      <label>Email</label>
      <InputWrapper>
        <Input placeholder="Your email" type="email" {...register("Email", { required: true })} />
        {errors.Email && <ErrorMessage> Email field cannot be empty </ErrorMessage>}
      </InputWrapper>
      <label>Password</label>
      <InputWrapper>
        <Input
          placeholder="Password"
          type="password"
          {...register("Pass", { required: true, minLength: 5 })}
        />
        {errors.Pass?.type === "minLength" && (
          <ErrorMessage> Password cannot be shorter than 5 characters </ErrorMessage>
        )}
        {errors.Pass?.type === "required" && (
          <ErrorMessage> Password field cannot be empty </ErrorMessage>
        )}
      </InputWrapper>

      {formType === "registration" && (
        <>
          <label>Please repeat your password</label>
          <InputWrapper>
            <Input
              placeholder="Repeated password"
              type="password"
              {...register("DoublePass", {
                required: true,
                validate: (v) => v === getValues("Pass"),
              })}
            />
            {errors.DoublePass?.type === "required" && (
              <ErrorMessage>Password repeat field must not be empty</ErrorMessage>
            )}
            {errors.DoublePass?.type === "validate" && (
              <ErrorMessage>Incorrect repeated password</ErrorMessage>
            )}
          </InputWrapper>
          <CheckboxWrapper>
            <Policy>
              <input type="checkbox" {...register("Policy", { required: true })} />
              {errors.Policy && <ErrorMessage>Field is required</ErrorMessage>}

              <label>Consent to site policy</label>
            </Policy>
          </CheckboxWrapper>
        </>
      )}

      <ButtonWrapper>
        <Button disabled={!isValid}>{formType === "registration" ? "Sign Up" : "Sign In"}</Button>
        {formType !== "registration" && (
          <GoogleButton onClick={() => dispatch(loginWithGoogle())} />
        )}
      </ButtonWrapper>
    </FormStyle>
  );
};
const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  width: 100%;
`;

const CheckboxWrapper = styled(InputWrapper)`
  input {
    width: 14px;
    height: 14px;
  }

  padding-bottom: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Policy = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Input = styled.input`
  padding-left: 5px;
  border-radius: 5px;
  width: 100%;
  height: 30px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.systemColors.grey200};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
  gap: 7px;
  margin: 0 auto;
  label {
    color: ${({ theme }) => theme.systemColors.grey800};
  }
`;
