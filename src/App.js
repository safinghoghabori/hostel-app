import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";
import NavigationBar from "./components/NavigationBar";
import "../src/index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import ViewBookedRoom from "./components/ViewBookedRoom";

//react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//react router
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import ControlPanel from "./components/ControlPanel";
import AddRoom from "./components/AddRoom";
import Update from "./components/Update";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <NavigationBar />
              <Login />
            </Route>
            <Route path="/signup">
              <NavigationBar />
              <SignUp />
            </Route>
            <Route path="/cart">
              <NavigationBar />
              <Cart />
            </Route>
            <Route path="/admin">
              <NavigationBar />
              <AdminLogin />
            </Route>
            <Route exact path="/controlpanel">
              <NavigationBar />
              <ControlPanel />
            </Route>
            <Route exact path="/controlpanel/viewbookedroom">
              <NavigationBar />
              <ViewBookedRoom />
            </Route>
            <Route path="/controlpanel/addroom">
              <NavigationBar />
              <AddRoom />
            </Route>
            <Route path="/controlpanel/viewbookedroom/update/:id">
              <NavigationBar />
              <Update />
            </Route>
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
