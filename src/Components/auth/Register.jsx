import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CgDanger } from 'react-icons/cg';
import Layout from '../../HomeLayout/HomeLayout';
import { useRegisterMutation } from '../../features/Api/authSlice';
import Logo from "../../assets/LOGO.png";

function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [program, setProgram] = useState('');
  const [semester, setSemester] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [errEmail, setErrEmail] = useState('');
  const [errPass, setErrPass] = useState('');
  const [errName, setErrName] = useState('');
  const [errProgram, setErrProgram] = useState('');
  const [errSemester, setErrSemester] = useState('');
  const navigate = useNavigate();
  const userRef = useRef();

  const [register, { data, isSuccess }] = useRegisterMutation();
  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!errPass && !errEmail && !errName && !errProgram && !errSemester) {
      try {
        const formData = {
          "correo_usuario": email,
          "contraseña": password,
          "nombre_usuario": name,
          "programa": program,
          "semestre": parseInt(semester),
          "id_rol": 2,
        };
        
        const userData = await register(formData).unwrap();
        // Puedes redirigir al usuario a la página de inicio de sesión o a donde desees después del registro exitoso.
        navigate('/comunidad/ingresar');
      } catch (err) {
        // Manejar errores específicos si es necesario
        console.log(err);
        setErrMsg('Error en el registro');
      }
    }
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setErrEmail('Correo electrónico no puede estar vacío');
    } else if (!isValidEmail(e.target.value)) {
      setErrEmail('Correo electrónico inválido');
    } else {
      setErrEmail('');
    }
  };
  
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setErrPass('Contraseña no puede estar vacía');
    } else {
      setErrPass('');
    }
  };
  
  const handleNameInput = (e) => {
    setName(e.target.value);
    if (!e.target.value) {
      setErrName('Nombre no puede estar vacío');
    } else {
      setErrName('');
    }
  };
  
  const handleProgramInput = (e) => {
    setProgram(e.target.value);
    if (!e.target.value) {
      setErrProgram('Programa no puede estar vacío');
    } else {
      setErrProgram('');
    }
  };
  
  const handleSemesterInput = (e) => {
    setSemester(e.target.value);
    if (!e.target.value) {
      setErrSemester('Semestre no puede estar vacío');
    } else {
      setErrSemester('');
    }
  };
  
  // Función para validar un correo electrónico
  const isValidEmail = (email) => {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(email);
  };
  
  // Resto del código para manejar cambios en los campos del formulario y validaciones
  return (
    <Layout>
      <div className="background2-image">
        <div className="bg-black/60 py-20 -mt-8 relative grid place-content-center">
          <div className=" bg-white p-10 rounded-lg flex flex-col items-center w-[23rem] relative">
          <img src={Logo} alt="" className="max-h-32" />
            <form>
              
  
              <input
                id="name"
                onChange={handleNameInput}
                value={name}
                required
                type="text"
                className={`${errName ? 'border border-red-600 placeholder-red-600 focus:outline-none' : 'border border-gray-400'} mt-5 p-2 w-full rounded-lg`}
                placeholder="Nombre"
              />
              {errName && (
                <div className="text-red-600 flex flex-wrap items-center gap-1 justify-start w-full">
                  <CgDanger />
                  <p>{errName}</p>
                </div>
              )}
  
              <input
                id="program"
                onChange={handleProgramInput}
                value={program}
                required
                type="text"
                className={`${errProgram ? 'border border-red-600 placeholder-red-600 focus:outline-none' : 'border border-gray-400'} mt-5 p-2 w-full rounded-lg`}
                placeholder="Programa"
              />
              {errProgram && (
                <div className="text-red-600 flex flex-wrap items-center gap-1 justify-start w-full">
                  <CgDanger />
                  <p>{errProgram}</p>
                </div>
              )}
  
              <input
                id="semester"
                onChange={handleSemesterInput}
                value={semester}
                required
                type="number"
                className={`${errSemester ? 'border border-red-600 placeholder-red-600 focus:outline-none' : 'border border-gray-400 mb-5'} mt-5 p-2 w-full rounded-lg`}
                placeholder="Semestre"
              />
              {errSemester && (
                <div className="text-red-600 flex flex-wrap items-center gap-1 justify-start w-full mb-5">
                  <CgDanger />
                  <p>{errSemester}</p>
                </div>
              )}
              <input
                id="email"
                onChange={handleEmailInput}
                ref={userRef}
                value={email}
                required
                type="text"
                className={`${errEmail ? 'border border-red-600 placeholder-red-600 focus:outline-none' : 'border border-gray-400'} mt-5 p-2 w-full rounded-lg`}
                placeholder="Correo Electrónico"
              />
              {errEmail && (
                <div className="text-red-600 flex flex-wrap items-center gap-1 justify-start w-full">
                  <CgDanger />
                  <p>{errEmail}</p>
                </div>
              )}
  
              <input
                id="password"
                onChange={handlePasswordInput}
                value={password}
                required
                type="password"
                className={`${errPass ? 'border border-red-600 placeholder-red-600 focus:outline-none' : 'border border-gray-400 mb-5'} mt-5 p-2 w-full rounded-lg`}
                placeholder="Contraseña"
              />
              {errPass && (
                <div className="text-red-600 flex flex-wrap items-center gap-1 justify-start w-full mb-5">
                  <CgDanger />
                  <p>{errPass}</p>
                </div>
              )}
  
              <button
                onClick={(e) => handleSubmit(e)}
                className={`mt-5 text-white w-full hover:shadow-2xl rounded-lg p-2 transition duration-500 ease-in-out ${
                  errEmail || errPass || errName || errProgram || errSemester
                    ? 'cursor-not-allowed bg-gray-400'
                    : 'bg-darkGreen'
                }`}
              >
                Registrarse
              </button>
            </form>
            <Link to={'/comunidad/ingresar'} className="text-sm mt-5 text-darkGreen hover:underline">
              ¿Ya tienes cuenta? Inicia sesión aquí.
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
  
}

export default RegisterScreen;
