import { useState } from 'react';

export const useCalculadora = () => {
  const [valorCuenta, setValorCuenta] = useState(0);
  const [porcentajePropina, setPorcentajePropina] = useState(0);
  const [totalPropina, setTotalPropina] = useState(0);
  const [error, setError] = useState("");

  const calcularPropina = () => {
    if (valorCuenta <= 0) {
      setError("Ingrese un valor válido de la cuenta.");
      return;
    }

    if (porcentajePropina === 0) {
      setError("Seleccione un porcentaje de propina.");
      return;
    }

    const propina = (valorCuenta * porcentajePropina) / 100;
    setTotalPropina(propina);
    setError("");
  };

  const reiniciarCalculadora = () => {
    setValorCuenta(0);
    setPorcentajePropina(0);
    setTotalPropina(0);
    setError("");
  };

  return {
    valorCuenta,
    setValorCuenta,
    porcentajePropina,
    setPorcentajePropina,
    totalPropina,
    calcularPropina,
    reiniciarCalculadora,
    error
  };
};
