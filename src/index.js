import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ContextWrapper from "./context/ContextWrapper";

ReactDOM.render(
    <ContextWrapper>
      <App />
    </ContextWrapper>,
  document.getElementById("root")
);
