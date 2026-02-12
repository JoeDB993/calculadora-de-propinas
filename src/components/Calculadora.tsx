import { useCalculadora } from "../hooks/useCalculadora";


const Calculadora: React.FC = () => {
  const {
    valorCuenta,
    setValorCuenta,
    porcentajePropina,
    setPorcentajePropina,
    totalPropina,
    calcularPropina,
    reiniciarCalculadora,
    error
  } = useCalculadora();

  return (
    <div className="min-h-screen bg-[#FAFBEA] flex flex-col items-center pt-4">

      {/* Título */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-8 text-center">
        Calculadora de Propinas
      </h1>
      

      {/* Tarjeta */}
      <div className="bg-[#161B2E] w-full max-w-3xl rounded-3xl p-10 text-white shadow-xl mb-4">

        {/* Valor de la cuenta */}
        <div className="mb-8 text-center">
          <label className="block mb-4 font-semibold tracking-widest">
            VALOR DE LA CUENTA:
          </label>

          <div className="flex items-center bg-white rounded-full px-6 py-3 w-80 mx-auto">
            <span className="text-gray-700 font-bold mr-3">L.</span>
            <input
              type="number"
              value={valorCuenta}
              onFocus={() => {
                if (valorCuenta === 0) {
                  setValorCuenta(0);
                  setValorCuenta(NaN);
                }
              }}
              onChange={(e) => setValorCuenta(Number(e.target.value))}
              className="w-full outline-none text-gray-900 text-lg bg-transparent"
              placeholder="0.00"
            />
          </div>

        </div>


        {/* Porcentaje */}
        <div className="mb-10 text-center">
          <p className="mb-4 font-semibold tracking-widest">
            SELECCIONAR PORCENTAJE DE PROPINA:
          </p>

          <div className="flex justify-center gap-10">
            <label className="flex items-center gap-2">
              <input type="radio" name="tip" value="10" checked={porcentajePropina === 10} onChange={(e) => setPorcentajePropina(Number(e.target.value))} />
              10%
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="tip" value="15" checked={porcentajePropina === 15} onChange={(e) => setPorcentajePropina(Number(e.target.value))} />
              15%
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="tip" value="20" checked={porcentajePropina === 20} onChange={(e) => setPorcentajePropina(Number(e.target.value))} />
              20%
            </label>
          </div>
        </div>
        

        {/* Botones */}
        <div className="flex justify-center gap-8 mb-10">
          <button onClick={calcularPropina} className="bg-green-500 hover:bg-green-600 text-black font-bold px-10 py-3 rounded-full transition">
            CALCULAR
          </button>

          <button onClick={reiniciarCalculadora} className="bg-red-500 hover:bg-red-600 text-black font-bold px-10 py-3 rounded-full transition">
            REINICIAR
          </button>
        </div>

        {/* Resultado */}
        <div className="text-center">
          <p className="mb-4 font-semibold tracking-widest">
            TOTAL A PAGAR DE PROPINA:
          </p>

          <div className="flex items-center bg-white rounded-full px-6 py-3 w-80 mx-auto">
            <span className="text-gray-700 font-bold mr-3">L.</span>
            <input
              type="text"
              value={totalPropina}
              disabled
              className="w-full outline-none text-gray-900 text-lg bg-transparent"
              placeholder="0.00"
            />
          </div>
        </div>
        


      </div>
      {/* Error */}
        {error && (
          <div className="bg-red-500 text-white p-3 rounded mb-6 text-center">
            {error}
          </div>
        )}
    </div>
  )
  
}

export default Calculadora
