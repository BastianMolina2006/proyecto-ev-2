import CampoFormulario from "../moleculas/CampoFormulario";
import { useState } from "react";

function FormularioContacto (){

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje]= useState("");

    const manejarEnvio =(e: React.SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault();

    if (nombre.trim() === ""){
        alert("Debe ingresar su nombre");
        return;
    }

    if (correo.trim() === ""){
        alert("Debe ingresar su correo");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        alert("Ingrese un correo válido");
        return;
    }
    if (mensaje.trim() === "") {
        alert("Debe ingresar un mensaje");
        return;
    }
    
        alert("Formulario enviado correctamente");
    };

    return (
        <form onSubmit={manejarEnvio} noValidate>

        <CampoFormulario
        etiqueta="Nombre completo"
        tipo="test"
        nombre="nombre"
        valor={nombre}
        alCambiar={setNombre}
        />

        <CampoFormulario
        etiqueta="Correo electronico"
        tipo="email"
        nombre="correo"
        valor={correo}
        alCambiar={setCorreo}
        />

        <CampoFormulario
        etiqueta="Mensaje"
        tipo="test"
        nombre="mensaje"
        valor={mensaje}
        alCambiar={setMensaje}
        />

        <button type="submit" className="btn btn-primary">
            Enviar Mensaje
            </button>

        </form>
    )
}
export default FormularioContacto;