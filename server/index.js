// 1. IMPORTACIONES
import express from "express";

// 2. INICIALIZADORES
const app = express();

const data = [
  {
    id: 0,
    title: "reservación 1",
    description: "Quiero una reservación a Cancún, México",
  },
  {
    id: 1,
    title: "reservación 2",
    description: "Quiero una reservación a Veracruz, México",
  },
];

// 3. RUTAS
// localhost:3005/
app.get("/", (req, res) => {
  res.json({
    msg: "Este es un mensaje",
    data: data,
  });
});

// 4. LISTENERS
app.listen(3005, () => console.log("servidor encendido"));
