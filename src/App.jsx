import { useEffect, useState } from "react"
import "./App.css"

function App() {
  const [porcentaje, setPorcentaje] = useState(0)
  const [monto, setMonto] = useState(0)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    
  }, [porcentaje, monto])
  

  const calculoDeVenta = (e) => {

    if (
      porcentaje >= 0 &&
      porcentaje <= 1000 &&
      porcentaje != "" &&
      monto >= 0 &&
      porcentaje != 0 &&
      monto != 0 && monto != ""
    ) {
      const resultado = ((monto * porcentaje) / 100) + monto
      setMonto(0)
      setTotal(resultado); // Ajusta la cantidad de decimales según tus necesidades.
    }
  }

  /*   const calculoDeVenta = (e) => {
    setPorcentaje(e.target.value)
    setMonto(e.target.value)
    if( 0 < porcentaje < 1000 && 0 < monto) {

    }
  } */

  return (
    <div className=" h-screen bg-slate-100">
      <nav className=" bg-blue-200 w-screen h-2/6 flex flex-col justify-center items-center md:flex md:flex-row md:justify-between md:items-center px-20">
        <img src="./images/logo-suterh.webp" alt="suterh logo" />
        <div className=" text-blue-800 font-bold text-3xl">Bienvenidos!!</div>
      </nav>
      <section className=" h-4/6 flex-col px-4">
        <div className=" flex items-center justify-center h-2/6">
          <p className=" font-semibold text-blue-950 text-2xl">
            Ingrese el porcentaje que quiere averiguar:{" "}
          </p>
          <input
            name="porcentaje"
            value={porcentaje}
            type="number"
            className=" h-8 w-24 bg-blue-100 rounded-lg px-3"
            onChange={(e) => setPorcentaje(Number(e.target.value))}
          />
        </div>
        <div className=" flex items-center justify-center h-2/6">
          <p className=" font-semibold text-blue-950 text-2xl">
            Ingrese el monto que quiere calcular:{" "}
          </p>
          <input
            name="monto"
            value={monto}
            type="number"
            className=" h-8 w-24 bg-blue-100 rounded-lg px-3"
            onChange={(e) => setMonto(Number(e.target.value))}
          />
        </div>
        {total ? 
          (<div className=" flex items-center justify-center h-1/6">
            <p className=" font-bold text-red-500 text-3xl">
              <span className=" text-red-800">Valor de venta: </span>${total}
            </p>
          </div>)
          : (porcentaje === 0 && monto === 0) 
            ? (
                <div className=" flex items-center justify-center h-1/6">
                <p className=" font-bold text-red-500 text-3xl text-center">
                    Tienes que poner ambos datos para poder calcular
                  </p>
                </div>
              )
          : (
          <div className=" flex items-center justify-center h-1/6">
            <p className=" font-bold text-red-500 text-3xl">
              Uno de los campos no coincide con lo requerido.
            </p>
          </div>
        )}

        <div className=" flex items-center justify-center h-1/6">
          <button
            onClick={calculoDeVenta}
            className=" bg-blue-950 hover:bg-blue-900 text-white font-bold text-xl py-2 px-3 rounded-lg"
          >
            Calcular
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;


    /* if (e.target.name === 'porcentaje') {
      setPorcentaje(parseInt(e.target.value));
    } else if (e.target.name === 'monto') {
      setMonto(parseFloat(e.target.value));
    } */
