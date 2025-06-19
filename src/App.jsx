import { Routes, Route } from "react-router-dom";
import OnePage from "./pages/OnePage";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OnePage />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="*" element={<ErrorPage />} />

      {/* Acá podés agregar más rutas dinámicas en el futuro */}
    </Routes>
  );
}

export default App;
