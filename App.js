import React from "react";
import AppNavigater from "./navigation/AppNavigator";

export default function App() {
  return <AppNavigater />;
}
import React from "react";
import AppNavigater from "./navigation/AppNavigator";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigater />;
    </Provider>
  );
}
