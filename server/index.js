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
// GET - OBTENCIÓN DE DATOS (RESERVACIONES)
// localhost:3005/
app.get("/", (req, res) => {
  res.json({
    msg: "Este es un mensaje",
    data: data,
  });
});

// POST - CREAR UNA RESERVACIÓN
app.post("/", (req, res) => {
  data.push({
    id: 2,
    title: "Reservación 2",
    description: "Quiero una reservación a Sidney, Australia",
  });

  res.json({
    msg: "Reservación agregada",
    data: data,
  });
});

// 4. LISTENERS
app.listen(3005, () => console.log("servidor encendido"));
