function Footer() {
  return (
    <footer className="bg-vet-oscuro text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row text-start g-4">
          <div className="col-md-4">
            <h5 className="font-serif-vet fw-bold mb-3">Veterinaria San Marcos</h5>
            <p className="small text-light opacity-75" style={{ maxWidth: '300px', lineHeight: '1.6' }}>
              Cuidamos la salud y el bienestar de tus mascotas con atención cercana y profesional.
            </p>
          </div>

          <div className="col-md-4 small">
            <h5 className="font-serif-vet fw-bold text-white mb-3">Horarios</h5>
            <p className="mb-2 text-light opacity-75">
              🕒 <strong className="text-white">Lunes a viernes:</strong> 09:00 – 19:00
            </p>
            <p className="mb-2 text-light opacity-75">
              🕒 <strong className="text-white">Sábado:</strong> 10:00 – 14:00
            </p>
            <p className="mb-2 text-light opacity-75">
              🕒 <strong className="text-white">Urgencias:</strong> Todos los días, 24 h
            </p>
          </div>

          <div className="col-md-4 small">
            <h5 className="font-serif-vet fw-bold text-white mb-3">Contacto</h5>
            <p className="mb-2 text-light opacity-75">📍 Av. Libertador Bernardo O'Higgins 123, Rancagua</p>
            <p className="mb-2 text-light opacity-75">📞 +56 72 234 5678</p>
            <p className="mb-2 text-light opacity-75">💬 +56 9 8765 4321</p>
            <p className="mb-2 text-light opacity-75">✉️ contacto@sanmarcos.cl</p>
          </div>
        </div>

        <hr style={{ borderColor: '#1b4a34' }} className="my-4" />
        <p className="text-center small text-light opacity-50 mb-0">
          © 2026 Veterinaria San Marcos. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;