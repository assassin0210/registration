import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

interface IPropType {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

interface InputsSingUp {
  Name: string;
  Email: string;
  Pass: string;
  DoublePass: string;
  Policy: boolean;
}

export const Form = ({ title, handleClick }: IPropType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsSingUp>({ mode: "onSubmit" });
  const onSubmit = (data: any) => {};

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <Input
        placeholder="Your name"
        type="text"
        {...register("Name", { required: true })}
      />
      <label>Email</label>
      <Input
        placeholder="Your email"
        type="email"
        {...register("Email", { required: true })}
      />
      <label>Password</label>
      <Input
        placeholder="Password"
        type="password"
        {...register("Pass", { required: true })}
      />
      <label>Please repeat your password</label>
      <Input
        placeholder="Repeated password"
        type="password"
        {...register("DoublePass", { required: true })}
      />
      <Policy>
        <input type="checkbox" {...register("Policy", { required: true })} />
        <label>Consent to site policy</label>
      </Policy>
      {/*<Input*/}
      {/*  type="email"*/}
      {/*  onChange={(e) => setEmail(e.target.value)}*/}
      {/*  value={email}*/}
      {/*  placeholder="email"*/}
      {/*/>*/}
      {/*<Input*/}
      {/*  type="password"*/}
      {/*  onChange={(e) => setPass(e.target.value)}*/}
      {/*  value={pass}*/}
      {/*  placeholder="password"*/}
      {/*/>*/}
      <button onClick={() => handleClick(email, pass)}>{title}</button>
    </FormStyle>
  );
};
const Policy = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Input = styled.input`
  padding-left: 5px;
  border-radius: 5px;
  height: 30px;
  outline: none;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 5px;
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  min-width: auto;
  max-width: 400px;
  gap: 7px;
  margin: 0 auto;
  padding-top: 50px;
`;
