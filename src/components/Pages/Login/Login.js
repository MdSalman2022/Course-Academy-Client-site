import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const { signIn, setLoading } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

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
                    console.log("you are verified");
                    // navigate(from, { replace: true })
                }
                else {
                    console.error('Your email is not verified. Please verify email address.')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
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
                            <input type="text" placeholder="Email" name="email" className="input input-bordered w-full max-w-xs text-slate-900" />
                            <label className="label">
                                <span className="label-text dark:text-white">Your Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="password" className="input input-text-primary input-bordered w-full max-w-xs text-slate-900" />

                            <p className='text-red-500 mt-2'>{error}</p>
                            <br />
                            <input type="submit" value="Login" class="btn" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;