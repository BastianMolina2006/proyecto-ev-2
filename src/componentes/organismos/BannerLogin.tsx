export const BannerLogin = () => {
  return (
    <div 
      className="p-4 rounded-4 shadow text-start text-white position-absolute"
      style={{
        bottom: '2.5rem',
        left: '2.5rem',
        right: '2.5rem',
        backgroundColor: 'rgba(24, 78, 54, 0.92)',
        backdropFilter: 'blur(6px)',
        border: '1px solid rgba(255, 255, 255, 0.15)'
      }}
    >
      <div className="d-flex align-items-center gap-3 mb-2">
        <div 
          className="rounded-circle d-flex align-items-center justify-content-center bg-white text-success fw-bold fs-5 shadow-sm"
          style={{ width: '42px', height: '42px' }}
        >
          V
        </div>
        <div>
          <h5 className="fw-bold m-0 font-serif-vet">Veterinaria San Marcos</h5>
          <small className="text-white-50">Rancagua, Chile · Desde 2009</small>
        </div>
      </div>

      <p className="small text-white-50 mb-3" style={{ fontSize: '0.82rem', lineHeight: '1.4' }}>
        Bienvenido a nuestro sistema de gestión. Aquí podrás agendar citas, revisar el historial de tu mascota y acceder a nuestros servicios.
      </p>

      <div className="row g-2">
        <div className="col-6">
          <div className="p-2 rounded-3 text-center small" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}>
            Atención canina
          </div>
        </div>
        <div className="col-6">
          <div className="p-2 rounded-3 text-center small" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}>
            Atención felina
          </div>
        </div>
        <div className="col-6">
          <div className="p-2 rounded-3 text-center small" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}>
            Vacunación
          </div>
        </div>
        <div className="col-6">
          <div className="p-2 rounded-3 text-center small" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}>
            Urgencias 24 h
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerLogin;