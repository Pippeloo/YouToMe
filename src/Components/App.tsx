import { createRoot } from "react-dom/client";
import Main from "./Main";

const App = () => {
  return <Main />;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
