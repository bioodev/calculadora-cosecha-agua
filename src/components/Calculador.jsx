import { useState } from "react";

const Calculador = ({ prec }) => {
  const [potencial, setPotencial] = useState(0);
  const [calculo, setCalcular] = useState(0);
  const calculoRedondeado = Math.round(calculo);
  const escorrentiaDefault = [0.9];

  function handleChange(event) {
    console.log(event.target.value);
    setPotencial({
      ...potencial,
      [event.target.name]: event.target.value,
    });
  }

  function manejarCalculo(e) {
    e.preventDefault();
    console.log(potencial.a * potencial.b * potencial.c);
    potencial.a > 0 && potencial.b > 0 && potencial.c > 0
      ? setCalcular(potencial.a * potencial.b * potencial.c)
      : alert(
          "Ingresa correctamente los datos. El tamaño del techo en m2, EL promedio de precipitacion anual en mm de acuerdo a la tabla de datos, y el coeficiente de escorrentia, generalmente 0.9 en el caso del techo de zinc, no utilizar un valor mayor a 1. El potencial de captacion calculado corresponde al de 1 año en promedio."
        );
  }

  return (
    <div id="Calculador" className="border-solid border-black text-sm text-black drop-shadow-lg">
      <div className="pb-5 w-full h-full">
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center lg:grid-cols-5 content-end p-3">
            <label className="grid content-end text-lg sd:gap-4 ">
              Techo (m2)
              <input
                onChange={handleChange}
                className="m-3 w-24 rounded-md p-3 focus:bg-teal-100"
                name="a"
                placeholder="100"
                type="number"
              />
            </label>
            <label className="grid place-items-center content-end text-lg">
              Precipitaciones (mm)
              <input
                onChange={handleChange}
                className="m-3 w-24 rounded-md p-3 focus:bg-teal-100"
                name="b"
                placeholder={prec}
                type="number"
              />
            </label>
            <label className="grid place-items-center content-end text-lg ">
              Coef. Escorrentia
              <input
                onChange={handleChange}
                className="m-3 w-24 rounded-md p-3 focus:bg-teal-100"
                name="c"
                placeholder={escorrentiaDefault}
                type="text"
              />
            </label>
            <div className="grid content-end sm:col-span-1 md:col-span-1">
              <button
                onClick={manejarCalculo}
                className="active:bg-teal-300 rounded-md border border-solid border-gray-300 p-5 drop-shadow-lg hover:bg-teal-100 "
              >
                CALCULAR
              </button>
            </div>
            <div className="grid content-end sm:col-span-2 md:col-span-2 lg:col-span-1">
              <h1 className="px-5 py-2 text-6xl">{calculoRedondeado}</h1>
              <h2 className="">Potencial de captación</h2>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Calculador;
