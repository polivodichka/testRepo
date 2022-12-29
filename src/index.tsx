import "./index.css";
import { store } from "./store/store";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </>
);
