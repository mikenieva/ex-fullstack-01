import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [reservations, setReservations] = useState([]);

  const serverUrl = import.meta.env.VITE_SERVER_URL;

  // HOOK
  // Manejar efectos laterales (procesos asíncronso)
  useEffect(() => {
    const fetchReservations = async () => {
      const response = await fetch(serverUrl);
      const allReservations = await response.json();

      setReservations(allReservations.data);

      return;
    };

    fetchReservations();
  }, []);

  return (
    <>
      {reservations.length === 0 ? (
        <p>No hay reservaciones...</p>
      ) : (
        reservations.map((e) => {
          return (
            <div key={e.id}>
              <h1>{e.title}</h1>
              <p>Descripción: {e.description}</p>
            </div>
          );
        })
      )}
    </>
  );
}

export default App;
