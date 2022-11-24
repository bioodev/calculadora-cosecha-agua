import db from "./db_precipitaciones_chile_2012_2022.json";

const PrecipitacionesTable = ({ func }) => {

  const dataItems = (data) => {
    const precipitacionesRedondeado = Math.round(data.valn);
    return (
      <tr
        className="hover:bg-teal-700 hover:text-white"
        key={data.id}
        onClick={() => func(precipitacionesRedondeado)}
      >
        <th className="item-tabla">{data.fields.codigo_cuenca}</th>
        <th className="item-tabla">{data.fields.nombre_cuenca}</th>
        <th className="item-tabla">{data.fields.nombre_sub_cuenca}</th>
        <th className="item-tabla">{data.fields.nombre}</th>
        <th className="item-tabla text-xl font-black">
          {precipitacionesRedondeado}
        </th>
      </tr>
    );
  };

  const dataItemsList = db.points.map(dataItems);

  return (
    <table className="tabla-precipitaciones table-fixed cursor-pointer drop-shadow-md">
      <thead className="">
        <tr>
          <th className="titulo-tabla">ID Cuenca</th>
          <th className="titulo-tabla">Nombre Cuenca</th>
          <th className="titulo-tabla">Nombre Subcuenca</th>
          <th className="titulo-tabla">Nombre Estacion</th>
          <th className="titulo-tabla">
            Precipitaciones promedio anual mm (2012-2022)
          </th>
        </tr>
      </thead>
      <tbody className="cursor-pointer">{dataItemsList}</tbody>
    </table>
  );
};

export default PrecipitacionesTable;
