"use client";
import React, { useState } from 'react';

export default function AlcoholimetroTeorico() {
  const [peso, setPeso] = useState<number>(0);
  const [mlConsumidos, setMlConsumidos] = useState<number>(0);
  const [gradosLicor, setGradosLicor] = useState<number>(0);
  const [resultado, setResultado] = useState<number | null>(null);

  const calcularBAC = () => {
    if (peso <= 0 || mlConsumidos <= 0) return;
    const gramosAlcohol = mlConsumidos * (gradosLicor / 100) * 0.8;
    const bac = gramosAlcohol / (peso * 0.68); // Promedio hombres/mujeres
    setResultado(bac);
  };

  return (
    <main className="sobriedad-container">
      <div className="content-wrapper">
        <header className="header">
          <h1 className="logo" style={{color: '#00f2ff', textShadow: '0 0 20px #00f2ff'}}>TEST DE SOBRIEDAD</h1>
          <p className="subtitle">¿CÓMO VA EL JUEZ? ⚖️</p>
        </header>

        <div className="sobriedad-card">
          <div className="input-field">
            <label className="label">TU PESO (KG)</label>
            <input type="number" onChange={(e) => setPeso(Number(e.target.value))} placeholder="Ej: 75" />
          </div>

          <div className="input-field">
            <label className="label">¿CUÁNTO HAS TOMADO? (ML)</label>
            <input type="number" onChange={(e) => setMlConsumidos(Number(e.target.value))} placeholder="Ej: 330" />
          </div>

          <div className="input-field">
            <label className="label">GRADOS DE ALCOHOL (%)</label>
            <input type="number" onChange={(e) => setGradosLicor(Number(e.target.value))} placeholder="Ej: 4.0 o 29" />
          </div>

          <button className="btn-juez" onClick={calcularBAC}>¿CÓMO VOY, JUEZ?</button>
        </div>

        {resultado !== null && (
          <div className={`resultado-bac ${resultado > 0.5 ? 'bac-peligro' : 'bac-ok'}`}>
            <p className="label" style={{color: 'inherit'}}>NIVEL DE ALCOHOL (G/L)</p>
            <h2 className="bac-value">{resultado.toFixed(2)}</h2>
            <p style={{fontWeight: 'bold'}}>
              {resultado > 0.5 ? "❌ ¡ENTREGA LAS LLAVES!" : "✅ DENTRO DEL LÍMITE"}
            </p>
          </div>
        )}

        <a href="/" className="btn-volver">← VOLVER AL OPTIMIZADOR</a>
      </div>
    </main>
  );
}