import { useState } from "react";
import { useHistory } from "react-router";
import { Container, Input, Button, Div } from "./style";

interface IProps {
  addNewUser: (login: string, password: string) => void;
}

const Register = ({ addNewUser }: IProps) => {
  const [login, setLogin] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [cpass, setCPass] = useState<string>("");
  const history = useHistory();
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewUser(login, pass);
    history.push("/");
  };
  return (
    <Div>
      <Container onSubmit={handleRegister}>
        <h3>Register</h3>
        <label>Login</label>
        <Input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />
        <label>Password</label>
        <Input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <Button>Register</Button>
      </Container>
    </Div>
  );
};

export default Register;
