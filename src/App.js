import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import MainNav from "./components/MainNav";
import MainPage from "./components/MainPage";
import UsersPage from "./components/UsersPage";

function App() {
  return (
    <div className="App">
      <MainNav />

      <Route path="/" exact>
        <Redirect to="/main-page" />
      </Route>
      <Route path="/main-page">
        <MainPage />
      </Route>
      <Route path="/user/:id">
        <UsersPage />
      </Route>
    </div>
  );
}

export default App;
