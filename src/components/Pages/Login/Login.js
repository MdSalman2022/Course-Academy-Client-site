import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { signIn, providerLogin, setLoading } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()


    const showToastMessage = () => {
        toast.error('Your email is not verified. Please verify email address.', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };

    const from = location?.state?.from.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('')
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    showToastMessage();
                }
                // navigate('/')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    const googleSignIn = event => {
        event.preventDefault();
        const Provider = new GoogleAuthProvider();
        providerLogin(Provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }
    const githubSignIn = event => {
        event.preventDefault();
        const Provider = new GithubAuthProvider();
        providerLogin(Provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='lg:my-32'>
            <h1 className='text-3xl font-bold mb-5'>Login</h1>
            <div className="flex justify-center">

                <form onSubmit={handleSubmit} className=" card w-96 bg-base-100 text-neutral-content dark:bg-slate-800 dark:text-white">
                    <div className="card-body items-center text-left">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text dark:text-white ">Your Email</span>
                            </label>
                            <input type="text" placeholder="Email" name="email" className="input input-bordered w-full max-w-xs text-slate-900" required />
                            <label className="label">
                                <span className="label-text dark:text-white">Your Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="password" className="input input-text-primary input-bordered w-full max-w-xs text-slate-900" required />

                            <p className='text-red-500 mt-2'>{error}</p>
                            <br />
                            <input type="submit" value="Login" class="btn" />
                            <p className=' mt-2'>Don't have an account? <Link className='text-success' to="/register">Register</Link> </p>

                        </div>
                        <div className="divider">OR</div>

                        <button onClick={googleSignIn} className="btn btn-white dark:btn-neutral dark:text-white w-full "> <FcGoogle className='mr-5' />  Continue with Google</button>
                        <button onClick={githubSignIn} className="btn btn-white dark:btn-neutral dark:text-white w-full "> <FaGithub className='mr-5' />  Continue with Github</button>

                        <ToastContainer />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;