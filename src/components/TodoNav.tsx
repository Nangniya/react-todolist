import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TodoNav = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
        backgroundColor: "pink",
        width: "100%",
        height: "50px",
      }}
    >
      <LogOut onClick={logOut}>로그아웃</LogOut>
    </div>
  );
};

const LogOut = styled.button`
  height: 40px;
  background-color: lightcoral;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  margin-right: 20px;
  :hover {
    background-color: coral;
  }
`;
export default TodoNav;
