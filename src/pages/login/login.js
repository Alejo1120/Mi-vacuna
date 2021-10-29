import './login.css';
import huella from '../../assets/images/huella-white.png'
import logo from '../../assets/images/img-logo.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


import Input from '../components/input/input'



const Loginscreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const  handleChange = (e) => {
        if(e.target.name === 'email'){
            setEmail(e.target.value)
            console.log(e.target.value)
        }else if(e.target.name === 'password'){
            setPassword(e.target.value)
            console.log(e.target.value)
        }else {
            console.log(e.target.value)
        }
    }

    const Login = async () =>  {
        if(email.length > 0 && password.length >  0){
            const data = {
                'email': email,
                'password': password
            }
           const response = await  axios.post('http://127.0.0.1:8000/api/user-login/', data);
           console.log(response)
        }else {
            alert('campos vacios')
        }
    }
    return (

        <div className="body">
            <div className="log">
                <div className="container-lg container" id="cardizqui">
                    <div className="iconhuella">
                        <img src={huella} alt="icon-huella" id="imagehuella" />
                    </div>
                    <div className="title">
                        <h1>Login</h1>
                    </div>

                    <div className="line"></div>

                    <form className="formulario">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email </label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="mail@web.site.com" name="email" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="********" onChange={handleChange}  />
                        </div>

                        <Input placeholder={'login'} type={'password'} name={'contrasena'} onChange={handleChange} />
                        <div className="recover_password">


                            <div className="mb-3 form-check" id="cajacheck">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Recordarme</label>

                            </div>
                            <Link to="/register" >
                                Crear cuenta
                            </Link>
                        </div>

                        <button type="button" className="btn btn-primary" id="btn-login" onClick={Login}  >Login</button>
                    </form>


                    <div className="ir">

                    </div>
                </div>

                <div className="container-lg" id="cardere">



                    <div className="container-sm" id="colordarkpurple-arriba">

                        <div className="contai"></div>

                        <div className="contai1"></div>
                        <div className="contai2"></div>
                        
                        <div className="titleinitsection">
                            <h1>Inicia sesion</h1>
                        </div>
                        <div id="imgcenter">
                            <img src={logo} className="rounded" alt="logo" id="image-logo" />
                        </div>

                        <div className="description">
                            <p className="text-center" id="textod">Consulta aqui las vacunas de tu mascota!</p>
                        </div>
                    </div>



                </div>
            </div>
        </div>


    );
}

export default Loginscreen;