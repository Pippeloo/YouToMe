import { createRoot } from "react-dom/client";

const App = () => {
  return <h2 className="text-center">YouToMe</h2>;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
