import { BrowserRouter, Route, Routes } from "react-router-dom";
import Regi from "./routes/Regi";
import Worknote from "./routes/Worknote";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Regi />} />
        <Route path="/worknote" element={<Worknote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
