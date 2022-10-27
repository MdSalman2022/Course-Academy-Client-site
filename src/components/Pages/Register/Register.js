import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {

    const [error, setError] = useState('')
    const { createUser, updateUserProfile, verifyEmail, providerLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const showToastMessage = () => {
        toast.error('Email verification sent to your email. [Check Spam folder]', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };

    const from = location?.state?.from.pathname || '/'


    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setError('')
                form.reset();
                handleUpdateUserProfile(name, photoURL)
                handleEmailVerification();
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    showToastMessage();
                }
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })


    }


    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const googleSignIn = event => {
        event.preventDefault();
        const Provider = new GoogleAuthProvider();
        providerLogin(Provider)
            .then(result => {
                const user = result.user;
                console.log(user);
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
            })
            .catch(error => console.error(error))
    }

    return (
        <div >
            <h1 className='text-3xl font-bold mb-5'>Register</h1>
            <div className="flex justify-center">

                <form onSubmit={handleSubmit} className=" card w-96 bg-base-100 text-neutral-content     ">
                    <div className="card-body items-center text-left">
                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text   ">Full name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-text-primary input-bordered w-full max-w-xs text-slate-900" required />

                            <label className="label">
                                <span className="label-text   ">Photo Url</span>
                            </label>
                            <input type="ext" placeholder="Photo Url" name="photoURL" className="input input-text-primary input-bordered w-full max-w-xs text-slate-900" required />


                            <label className="label">
                                <span className="label-text   ">Your Email</span>
                            </label>
                            <input type="text" placeholder="Email" name="email" className="input input-bordered w-full max-w-xs text-slate-900" required />

                            <label className="label">
                                <span className="label-text   ">Your Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="password" className="input input-text-primary input-bordered w-full max-w-xs text-slate-900" required />

                            <p className='text-red-500 mt-2'>{error}</p>


                            <br />
                            <input type="submit" value="Sign Up" class="btn" />
                            <p className=' mt-2  '>Already have an account? <Link className='text-success' to="/login">Login</Link> </p>


                        </div>
                        <div className="divider ">OR</div>
                        <button onClick={googleSignIn} className="btn btn-white dark:btn-neutral    w-full "> <FcGoogle className='mr-5' />  Continue with Google</button>
                        <button onClick={githubSignIn} className="btn btn-white dark:btn-neutral    w-full "> <FaGithub className='mr-5' />  Continue with Github</button>
                        <ToastContainer />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;