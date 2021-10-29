import './register.css';
import huella from '../../assets/images/huella-white.png'
import logo from '../../assets/images/img-logo.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
    return (
        <div className="log">
        
        <div className="container-lg" id="cardizqui">
            <div className="iconhuella">
                <img src={huella} alt="icon-huella" id="imagehuella"/>
            </div>
            <div className="title">
                <h1>Crea una cuenta</h1>
            </div>

            <div className="line"></div>

            <form className="formulario">

                <div className="row g-3">
                    <div className="col" id="name">
                        <label for="Nombre" className="form-label">Nombre </label>
                        <input type="text" className="form-control" aria-label="First name"/>
                    </div>
                    <div className="col" id="apellido">
                        <label for="Apellido" className="form-label">Apellido </label>
                        <input type="text" className="form-control" aria-label="Last name"/>
                    </div>
                </div>

                <div className="row g-3">
                    <div className="col" id="identificacion">
                        <label for="Identificacion" className="form-label">Identificacion </label>
                        <input type="text" className="form-control" aria-label="First name"/>
                    </div>
                    <div className="col" id="celular">
                        <label for="Celular" className="form-label">Celular </label>
                        <input type="text" className="form-control" aria-label="Last name"/>
                    </div>
                </div>

                <div className="row g-3">
                    <div className="col" id="email">
                        <label for="Email" className="form-label">Email </label>
                        <input type="email" className="form-control" aria-label="Last name"/>
                    </div>

                    <div className="col" id="direccion">
                        <label for="Direccion" className="form-label">Direccion </label>
                        <input type="text" className="form-control" aria-label="First name"/>
                    </div>

                </div>
                <div className="row g-3">
                    <div className="col" id="password">
                        <label for="Password" className="form-label">Password </label>
                        <input type="password" className="form-control" aria-label="First name"/>
                    </div>
                    
                    <div className="col" id="password">
                        <label for="Password" className="form-label">Verify password </label>
                        <input type="password" className="form-control" aria-label="First name"/>
                    </div>

                    <div className="mb-3 form-check" id="cajacheck">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Acepta los terminos & condiciones</label>
                    </div>

                    <button type="submit" className="btn btn-primary" id="btn-login">Registrar</button>
                    <p className="text-center"><a href="../register/confirmation.html"> regsiter prueba</a></p>



                </div>

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
                    <h1>Crea una cuenta</h1>
                </div>
                <div id="imgcenter">
                    <img src={logo} className="rounded" alt="image-logo" id="image-logo"/>
                </div>

                <div className="description">
                    <p className="text-center" id="textod">Crea una cuenta y mira en tiempo real las vacunas de tu mascota!
                    </p>
                </div>
            </div>



        </div>
    </div>
    )
}

export default Register;