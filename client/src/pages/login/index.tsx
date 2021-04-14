import { useState } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { Button, Container, Div, Input } from "./style";

interface IUsers {
  users: { login: string; password: string }[];
}

const Login = ({ users }: IUsers) => {
  const [login, setLogin] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const history = useHistory();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const exists = users.find((user) => (user.login = login));
    if (exists?.password === pass) {
      history.push("/products");
    } else {
      history.push("/register");
    }
  };

  return (
    <Div>
      <Container onSubmit={(e) => handleLogin(e)}>
        <h3>Login</h3>
        <label>Login</label>
        <br />
        <Input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />
        <br />
        <label>Password</label>
        <br />
        <Input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <br />
        <Button>LOGIN</Button>
        <Link to="/register">Register</Link>
      </Container>
    </Div>
  );
};

export default Login;
