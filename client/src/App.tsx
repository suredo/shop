import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";
import Products from "./pages/products";

interface IUsers {
  login: string;
  password: string;
}

function App() {
  const [users, setUsers] = useState<IUsers[]>([]);
  const addNewUser = (login: string, password: string) => {
    if (users) {
      if (users.find((user) => user.login === login)) {
        alert("User already registered");
      } else {
        setUsers([...users, { login: login, password: password }]);
      }
    }
  };
  console.log(users);
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login users={users} />
        </Route>
        <Route path="/register">
          <Register addNewUser={addNewUser} />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
