import React from "react";

const Footer = () => {
  return (
    <div className="flex h-64 flex-col items-center justify-center">
      <a className="text-lg p-4" href="https://explorador.cr2.cl/">
        Datos de precipitaciones disponibles explorador climatico de CR2{" "}
      </a>

      <div>
        <a className="text-lg" href="https://github.com/bioodev">Desarrollado por <b>Bioodev</b></a>
      </div>
    </div>
  );
};

export default Footer;
