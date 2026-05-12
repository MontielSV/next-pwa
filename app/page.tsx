"use client";
import React, { useState } from 'react';

const LICORES = [
  // --- CERVEZAS (Nacionales e Importadas) ---
  { nombre: "Cerveza Águila (Lata)", precio: 3900, ml: 330, grados: 4.0, tipo: "Suave" },
  { nombre: "Cerveza Poker (Lata)", precio: 3500, ml: 330, grados: 4.0, tipo: "Suave" },
  { nombre: "Cerveza Águila Light (Lata)", precio: 3900, ml: 330, grados: 3.4, tipo: "Suave" },
  { nombre: "Cerveza Corona (Botella)", precio: 5500, ml: 355, grados: 4.5, tipo: "Premium" },
  { nombre: "Cerveza Budweiser (Lata)", precio: 3800, ml: 269, grados: 5.0, tipo: "Suave" },
  { nombre: "Cerveza Club Colombia (Lata)", precio: 4200, ml: 330, grados: 4.7, tipo: "Premium" },
  { nombre: "Cerveza Central (Lata)", precio: 3000, ml: 330, grados: 4.0, tipo: "Económica" },

  // --- AGUARDIENTES ---
  { nombre: "Aguardiente Amarillo de Manzanares", precio: 72000, ml: 750, grados: 24, tipo: "Tendencia" },
  { nombre: "Aguardiente Antioqueño (Tapa Verde - Sin Azúcar)", precio: 43000, ml: 750, grados: 29, tipo: "Fuerte" },
  { nombre: "Aguardiente Antioqueño (Tapa Roja - Tradicional)", precio: 41000, ml: 750, grados: 29, tipo: "Fuerte" },
  { nombre: "Aguardiente Antioqueño (Tapa Azul - 24 Grados)", precio: 54100, ml: 750, grados: 24, tipo: "Intermedio" },
  { nombre: "Aguardiente Antioqueño Real (Botella Negra)", precio: 60000, ml: 750, grados: 29, tipo: "Premium" },
  { nombre: "Aguardiente Rosado del Tolima", precio: 85000, ml: 750, grados: 24, tipo: "Premium" },
  { nombre: "Aguardiente Néctar (Tapa Roja)", precio: 38000, ml: 750, grados: 29, tipo: "Fuerte" },
  { nombre: "Aguardiente Antioqueño (Media Botella)", precio: 22000, ml: 375, grados: 29, tipo: "Fuerte" },

  // --- VODKA, TEQUILA Y READY TO DRINK ---
  { nombre: "Smirnoff Ice (Original/Green Apple)", precio: 8500, ml: 355, grados: 4.5, tipo: "RTD" },
  { nombre: "Vodka Absolut (Original)", precio: 110000, ml: 700, grados: 40, tipo: "Fuerte" },
  { nombre: "Vodka Smirnoff (Botella)", precio: 115000, ml: 700, grados: 37.5, tipo: "Fuerte" },
  { nombre: "Tequila José Cuervo Especial", precio: 125000, ml: 750, grados: 35, tipo: "Fuerte" },
  { nombre: "Tequila Don Julio 70", precio: 380000, ml: 750, grados: 35, tipo: "Ultra Premium" },

  // --- WHISKY (Labels y Buchanans) ---
  { nombre: "Johnnie Walker Red Label", precio: 95000, ml: 750, grados: 40, tipo: "Clásico" },
  { nombre: "Johnnie Walker Black Label", precio: 160000, ml: 750, grados: 40, tipo: "Premium" },
  { nombre: "Johnnie Walker Double Black", precio: 190000, ml: 750, grados: 40, tipo: "Premium" },
  { nombre: "Chivas Regal 12 Años", precio: 180000, ml: 750, grados: 40, tipo: "Premium" },
  { nombre: "Old Parr 12 Años", precio: 175000, ml: 750, grados: 40, tipo: "Premium" },
  { nombre: "Buchanan's Deluxe 12 Años", precio: 190000, ml: 750, grados: 40, tipo: "Premium" },
  { nombre: "Buchanan's Master", precio: 210000, ml: 750, grados: 40, tipo: "Premium" },
  { nombre: "Buchanan's Special Reserve 18 Años", precio: 350000, ml: 750, grados: 40, tipo: "Ultra Premium" },

  // --- RONES ---
  { nombre: "Ron Medellín Añejo 3 Años", precio: 65000, ml: 750, grados: 35, tipo: "Clásico" },
  { nombre: "Ron Medellín Añejo 8 Años", precio: 95000, ml: 750, grados: 35, tipo: "Premium" },
  { nombre: "Ron Havana Club 7 Años", precio: 120000, ml: 750, grados: 40, tipo: "Premium" },

  // --- GINEBRAS ---
  { nombre: "Ginebra Beefeater", precio: 115000, ml: 750, grados: 40, tipo: "Clásico" },
  { nombre: "Ginebra Tanqueray", precio: 125000, ml: 750, grados: 40, tipo: "Premium" },

  // --- VINOS ---
  { nombre: "Vino Tinto Concha y Toro", precio: 55000, ml: 750, grados: 13, tipo: "Clásico" },
  { nombre: "Vino Blanco Gato Negro", precio: 50000, ml: 750, grados: 12, tipo: "Clásico" },

  // --- COCTELES PREPARADOS ---
  { nombre: "Margarita Ready to Drink", precio: 12000, ml: 355, grados: 5, tipo: "RTD" },
  { nombre: "Piña Colada Ready to Drink", precio: 12000, ml: 355, grados: 5, tipo: "RTD" },

  // --- PRESENTACIONES GRANDES / CAJAS ---
  { nombre: "Aguardiente Antioqueño (Caja/Tetra)", precio: 65000, ml: 1050, grados: 29, tipo: "Fuerte" },
  { nombre: "Cerveza Litro (Poker/Águila)", precio: 8500, ml: 1000, grados: 4.0, tipo: "Familiar" }
];


export default function AlcoholOptimizer() {
  const [presupuesto, setPresupuesto] = useState<number>(0);
  const [resultados, setResultados] = useState<any[]>([]);

  const optimizar = () => {
    if (presupuesto < 3000) return;

    const calculos = LICORES.map(l => {
      const cant = Math.floor(presupuesto / l.precio);
      const alcoholPuroTotal = (l.ml * (l.grados / 100)) * cant;
      const ratioEficiencia = (l.ml * (l.grados / 100)) / l.precio;

      return { ...l, cant, alcoholPuroTotal, ratioEficiencia };
    })
    .filter(l => l.cant > 0)
    .sort((a, b) => b.ratioEficiencia - a.ratioEficiencia);

    setResultados(calculos);
  };

  return (
    <main className="main-container">
      <div className="content-wrapper">
        <header className="header">
          <h1 className="logo">PARCHIS-STAR</h1>
          <p className="subtitle">BEBER SIN DEBER 🍸</p>
        </header>

        <div className="input-card">
          <label className="label">¿CUÁNTA PLATA HAY EN EL BOLSILLO?(COP)</label>
          <label className= "label">     (Se puede sin puntos ni comas)</label>
          <div className="input-group">
            <input 
              type="number" 
              onChange={(e) => setPresupuesto(Number(e.target.value))}
              placeholder="Ej: 100000"
            />
            <button onClick={optimizar}>CALCULAR</button>
          </div>
        </div>

        <div className="results-grid">
          {resultados.length > 0 ? (
            resultados.map((item, i) => (
              <div key={i} className={`result-item ${i === 0 ? 'best-choice' : ''}`}>
                <div className="item-info">
                  <span className="badge">{item.tipo}</span>
                  <h3>{item.nombre}</h3>
                  <p>Te alcanzan: <strong>{item.cant} unidades</strong></p>
                </div>
                <div className="item-stats">
                  <span className="stats-label">ALCOHOL NETO</span>
                  <span className="stats-value">{item.alcoholPuroTotal.toFixed(0)}ml</span>
                </div>
              </div>
            ))
          ) : presupuesto > 0 ? (
            <div className="no-results">
              <p>Ni para un Bon Bon Bum alcanza...</p>
            </div>
          ) : null}
        </div>

        <footer className="footer-notes">
          <p>
            Esta app es informativa. El consumo de alcohol en mayores de edad aumenta el riesgo de caídas, interacciones medicamentosas y deterioro cognitivo.
          </p>
        </footer>
      </div>
    </main>
  );
}