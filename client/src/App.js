import React, { Fragment, Lazy, suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// styles
import "./App.css";
import "./scss/App.scss";
import ContactState from "./context/contact/ContactState";
// components
import Navbar from "./components/Navbar";
// containers
import Aboutpage from "./containers/Aboutpage";
import Homepage from "./containers/Homepage";

// redux
import {
  store,
  // persistor
} from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <ContactState>
        <Router>
          <Fragment className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/about" component={Aboutpage} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </Provider>
  );
}

export default App;
