import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Login.css';

const Login = () => {
    const { error, signInWithGoogle } = useAuth();
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }

    return (
        <div>
            <Header></Header>
            <h1 className="my-5">Please Login</h1>
            <section className="vh-100 mt-5 pt-5">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" className="img-fluid"alt=""/>
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                <button onClick={handleGoogleLogin} type="button" className="btn btn-primary btn-floating mx-1">
                                    Google
                                </button>
                                <span className="error">{error}</span>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>      
        </div>
    );
};

export default Login;