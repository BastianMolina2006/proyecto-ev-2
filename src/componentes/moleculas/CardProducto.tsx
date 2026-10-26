import React from 'react';

interface CardProductoProps {
  titulo: string;
  subtitulo: string;
  precio: string;
  icono: React.ReactNode;
}

export const CardProducto: React.FC<CardProductoProps> = ({
  titulo,
  subtitulo,
  precio,
  icono
}) => {
  return (
    <div className="border border-gray-400 bg-white flex flex-col text-left">
      <div className="h-28 bg-[#edf3ef] flex items-center justify-center border-b border-gray-300">
        {icono}
      </div>
      <div className="p-3 flex justify-between items-end">
        <div>
          <h4 className="font-bold text-[#1b5038] text-xs">{titulo}</h4>
          <p className="text-[11px] text-gray-500 mt-0.5">{subtitulo}</p>
        </div>
        <div className="font-bold text-xs text-gray-800 tracking-tight">
          {precio}
        </div>
      </div>
    </div>
  );
};

export default CardProducto;