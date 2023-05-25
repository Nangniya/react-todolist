import user from "./components/user";

export const loginChecker = (id: string, pwd: string): void => {
  if (id === user.id && pwd === user.pwd) {
    localStorage.setItem("token", "로그인");
    window.location.href = "/";
  } else if (id !== user.id && pwd === user.pwd) {
    alert("아이디가 틀렸습니다.");
  } else if (id === user.id && pwd !== user.pwd) {
    alert("비밀번호가 틀렸습니다.");
  } else alert("아이디와 비밀번호가 일치하지 않습니다.");
};
