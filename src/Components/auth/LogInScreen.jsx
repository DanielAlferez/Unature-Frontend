import Logo from "../../assets/LOGO.png";
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CgDanger } from 'react-icons/cg';
import Layout from "../../HomeLayout/HomeLayout";

function LogInScreen() {
    const userRef = useRef();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [errEmail, setErrEmail] = useState('');
    const [errPass, setErrPass] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setErrMsg('');
    }, [email, pass]);

    // const handleSubmit = async (e) => {
    //     e.preventDefault(); // Evita la recarga de la página por defecto del formulario

    //     if (!errPass && !errEmail) {
    //         try {
    //             const formData = {
    //                 email: email,
    //                 password: pass
    //             };
    //             const userData = await login(formData).unwrap();
    //             dispatch(setCredentials({ user: userData.email, accessToken: userData.tokens.accessToken }));
    //             setEmail('');
    //             setPass('');
    //             navigate('/admin/panel');
    //         } catch (err) {
    //             // Handle specific error statuses
    //             if (err.status === 400) {
    //                 setErrMsg('Falló el inicio de sesión, faltan datos');
    //             } else if (err.status === 401) {
    //                 setErrMsg('Contraseña o email Incorrecto');
    //             } else {
    //                 setErrMsg('Falló el inicio de sesión');
    //             }
    //             console.log(err);
    //         }
    //     }
    // };

    const handleUserInput = (e) => {
        setEmail(e.target.value);
        if (!e.target.value) {
            setErrEmail('Email no puede estar vacío');
        } else if (!isValidEmail(e.target.value)) {
            setErrEmail('Email inválido');
        } else {
            setErrEmail('');
        }
    };

    const handlePwdInput = (e) => {
        setPass(e.target.value);
        if (!e.target.value) {
            setErrPass('Contraseña no puede estar vacía');
        } else {
            setErrPass('');
        }
    };

    const isValidEmail = (email) => {
        const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailPattern.test(email);
    };

    return (
        <Layout>
            <div className="background2-image">
                <div className="bg-black/60 h-screen -mt-8 relative grid place-content-center">
                    <div className=" bg-white p-10 rounded-lg flex flex-col  items-center w-[23rem] relative">
                        <img src={Logo} alt="" className="max-h-32" />
                        <form >
                            <input id="username" onChange={handleUserInput} ref={userRef} value={email} required type="text" className={`${errEmail ? 'border border-red-600 placeholder-red-600 focus:outline-none' : 'border border-gray-400'} mt-5 p-2 w-full rounded-lg`} placeholder="Email" />
                            {errEmail && (
                                <div className="text-red-600 flex flex-wrap items-center gap-1 justify-start w-full">
                                    <CgDanger />
                                    <p>{errEmail}</p>
                                </div>
                            )}
                            <input id="password" onChange={handlePwdInput} value={pass} required type="password" className={`${errPass ? 'border border-red-600 placeholder-red-600 focus:outline-none' : 'border border-gray-400 mb-5'} mt-5 p-2 w-full rounded-lg`} placeholder="Contraseña" />
                            {errPass && (
                                <div className="text-red-600 flex flex-wrap items-center gap-1 justify-start w-full mb-5">
                                    <CgDanger />
                                    <p>{errPass}</p>
                                </div>
                            )}
                            {errMsg && (
                                <div className="text-red-600 flex flex-wrap items-center gap-1 justify-start">
                                    <CgDanger />
                                    <p>{errMsg}</p>
                                </div>
                            )}
                            <button  className={`mt-5 text-white w-full hover:shadow-2xl rounded-lg p-2 transition duration-500 ease-in-out ${(errEmail || errPass) ? 'cursor-not-allowed bg-gray-400' : 'bg-darkGreen'}`}>Iniciar Sesión</button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default LogInScreen;
