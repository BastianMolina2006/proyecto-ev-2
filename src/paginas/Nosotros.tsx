interface Nosotros {
  icono: string;
  titulo: string;
  descripcion: string;
}

export default function Nosotros() {
  return (
    <div className="container py-5">
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 text-lg-start text-center mb-4 mb-lg-0">
          <h1 className="fw-bold text-vet-verde mb-3 font-serif-vet">
            Sobre Veterinaria San Marcos
          </h1>
          <p className="text-secondary lead mb-3">
            Somos un centro médico veterinario comprometido con la salud y el bienestar integral de tus fieles compañeros. Combinamos vocación, experiencia y tecnología avanzada.
          </p>
          <p className="text-muted">
            Fundada con el propósito de brindar una atención clínica humanizada y de excelencia, nuestra clínica se ha consolidado como un espacio seguro donde cada mascota recibe el trato amoroso y profesional que se merece.
          </p>
        </div>
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 rounded-4 overflow-hidden bg-vet-claro p-4">
            <div className="card-body text-center">
              <span className="display-4 mb-3 d-block">🐾</span>
              <h3 className="fw-bold text-vet-verde mb-2">Comprometidos con su salud</h3>
              <p className="text-muted mb-0">
                "Cuidamos de ellos con la misma dedicación con la que tú lo haces en casa."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center g-4 mb-5">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 bg-white rounded-4 border-vet">
            <div className="fs-1 mb-3">🏥</div>
            <h4 className="fw-bold text-vet-verde mb-2">Instalaciones Modernas</h4>
            <p className="text-muted small">
              Áreas de consulta, farmacia y hospitalización diseñadas para el máximo confort y seguridad sanitaria.
            </p>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 bg-white rounded-4 border-vet">
            <div className="fs-1 mb-3">🩺</div>
            <h4 className="fw-bold text-vet-verde mb-2">Medicina Preventiva</h4>
            <p className="text-muted small">
              Programas completos de vacunación, desparasitación y chequeos de rutina para una vida longeva.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 bg-white rounded-4 border-vet">
            <div className="fs-1 mb-3">❤️</div>
            <h4 className="fw-bold text-vet-verde mb-2">Amor y Vocación</h4>
            <p className="text-muted small">
              Un equipo humano altamente calificado que prioriza el bienestar emocional y físico de cada animal.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-vet-verde text-white rounded-4 p-5 text-center shadow-sm">
        <div className="row g-4">
          <div className="col-md-4">
            <h2 className="display-5 fw-bold text-white mb-1">+10</h2>
            <p className="mb-0 text-white-50">Años de experiencia</p>
          </div>
          <div className="col-md-4">
            <h2 className="display-5 fw-bold text-white mb-1">+5,000</h2>
            <p className="mb-0 text-white-50">Pacientes atendidos</p>
          </div>
          <div className="col-md-4">
            <h2 className="display-5 fw-bold text-white mb-1">24/7</h2>
            <p className="mb-0 text-white-50">Amor por su bienestar</p>
          </div>
        </div>
      </div>
    </div>
  );
}