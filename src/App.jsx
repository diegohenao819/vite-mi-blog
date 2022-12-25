import { useState } from "react";
import { Inicio } from "./components/layout/pages/Inicio";

import { Articulos } from "./components/layout/pages/Articulos";

import { Crear } from "./components/layout/pages/Crear";
import { Rutas } from "./routing/rutas";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="layout">
      <Rutas />
    </div>
  );
}

export default App;
