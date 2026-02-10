    
const Calculadora: React.FC = () => {  
    return (
    <div>
      <div className="max-w-2xl mx-auto mt-50">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 text-center mb-12 mt-3">
          Calculadora de Propinas
        </h1>
        <div>
          <div className="bg-white shadow-md rounded-lg p-6">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="billAmount">
              Valor de la cuenta
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="billAmount"
              type="number"
            />
          </div>
        </form>

        
      </div>
    </div>
  </div>
  </div>
  )
}



export default Calculadora