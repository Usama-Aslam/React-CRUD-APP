import React, { Component } from "react";

import "./App.css";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Router from "./routes/Router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router />
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default App;
