import styled from "styled-components";
import { useRef } from "react";
import user, { UserType } from "./user";
import { loginChecker } from "../utils";

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 480px;
    height: 300px;
    background-color: pink;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
`;

const Login = () => {
  const idRef = useRef(null);
  const pwdRef = useRef(null);
  const onSubmit = (e: any) => {
    e.preventDefault();
    const idInput = idRef.current.value;
    const pwdInput = pwdRef.current.value;
    loginChecker(idInput, pwdInput);
  };

  return (
    <Form>
      <form onSubmit={onSubmit}>
        <div>Member Login</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          ID
          <input ref={idRef} type="id" placeholder="Id" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          PASSWORD
          <input ref={pwdRef} type="password" placeholder="********" />
        </div>
        <button type="submit">LOGIN</button>
      </form>
    </Form>
  );
};

export default Login;
