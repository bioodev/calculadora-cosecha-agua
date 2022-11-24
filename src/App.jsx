import React, { useState } from "react";
import PrecipitacionesTable from "./components/PrecipitacionesTable";
import Calculador from "./components/Calculador";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/* import ReactJson from 'react-json-view';
 */

function App() {
  /*   console.log(db.points[0].fields);
   */

  const [precipitaciones, setPrecipitaciones] = useState([]);
 
  const up = () => {Calculador.current?.scrollIntoView({behavior: 'smooth'})}
  const manejadorPrecipitaciones = (e) => {
    setPrecipitaciones(e);
    alert("Precipitaciones copiadas al calculador")
    return console.log(precipitaciones) ;
  };

  return (
    <div className="min-h-screen p-4 text-center">
      <Navbar />
      <Calculador prec={precipitaciones} />
      <PrecipitacionesTable func={manejadorPrecipitaciones} />
      <Footer />
    </div>
  );
}

export default App;
