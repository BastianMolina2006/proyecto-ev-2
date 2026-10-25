interface BotonProps {
  texto: string;
  clase?: string;
}

function Boton({ texto, clase = "btn btn-success" }: BotonProps) {
  return (
    <button className={clase}>
      {texto}
    </button>
  );
}

export default Boton;