import { useState } from "react";

interface IPropType {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

export const Form = ({ title, handleClick }: IPropType) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="email"
      />
      <input
        type="password"
        onChange={(e) => setPass(e.target.value)}
        value={pass}
        placeholder="password"
      />
      <button onClick={() => handleClick(email, pass)}>{title}</button>
    </div>
  );
};
