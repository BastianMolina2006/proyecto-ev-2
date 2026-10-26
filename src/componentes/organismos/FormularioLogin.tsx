import CampoFormulario from "../moleculas/CampoFormulario";
import { useState } from "react";

function FormularioLogin (){

    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña]= useState("");

    const manejarEnvio =(e: React.SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault();

    if (correo.trim() === ""){
        alert("Debe ingresar su correo");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        alert("Ingrese un correo válido");
        return;
    }
    if (contraseña.trim() === "") {
        alert("Debe ingresar una contraseña");
        return;
    }
    
        alert("Datos ingresados correctamente");
    };

    return (
        <form onSubmit={manejarEnvio} noValidate>

        <CampoFormulario
        etiqueta="Correo electronico"
        tipo="email"
        nombre="correo"
        valor={correo}
        alCambiar={setCorreo}
        />

        <CampoFormulario
        etiqueta="Contraseña"
        tipo="password"
        nombre="contraseña"
        valor={contraseña}
        alCambiar={setContraseña}
        />

        <button type="submit" className="btn btn-primary">
            Enviar Mensaje
            </button>

        </form>
    )
}
export default FormularioLogin;