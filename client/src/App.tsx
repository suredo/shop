import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";
import Products from "./pages/products";

const usersFake = [
  { login: "sled", password: "test" },
  { login: "dev", password: "dev" },
];

function App() {
  const [users, setUsers] = useState(usersFake);
  const addNewUser = (login: string, password: string) => {
    setUsers([...users, { login: login, password: password }]);
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
