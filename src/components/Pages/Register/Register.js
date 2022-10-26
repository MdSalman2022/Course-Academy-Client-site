import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext)

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
                toast.success('Please verify your email address before login')
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

    return (
        <div >
            <h1 className='text-3xl font-bold mb-5'>Register</h1>
            <div className="flex justify-center">

                <form onSubmit={handleSubmit} className=" card w-96 bg-base-100 text-neutral-content dark:bg-slate-800 dark:text-white">
                    <div className="card-body items-center text-left">
                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text text-white">Full name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-text-primary input-bordered w-full max-w-xs text-slate-900" />

                            <label className="label">
                                <span className="label-text text-white">Photo Url</span>
                            </label>
                            <input type="ext" placeholder="Photo Url" name="photoURL" className="input input-text-primary input-bordered w-full max-w-xs text-slate-900" />


                            <label className="label">
                                <span className="label-text text-white">Your Email</span>
                            </label>
                            <input type="text" placeholder="Email" name="email" className="input input-bordered w-full max-w-xs text-slate-900" />

                            <label className="label">
                                <span className="label-text text-white">Your Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="password" className="input input-text-primary input-bordered w-full max-w-xs text-slate-900" />



                            <br />
                            <input type="submit" value="Sign Up" class="btn" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;