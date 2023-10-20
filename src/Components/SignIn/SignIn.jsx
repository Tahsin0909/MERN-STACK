/* eslint-disable react/no-unescaped-entities */


import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../ContextApi/ContextApi';
import { ToastContainer, toast } from 'react-toastify';

const SignIn = () => {
    const navigate = useNavigate();


    const { PasswordSignIn, GoogleSignUp } = useContext(AuthContext)
    // state For Form value
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordVAlue] = useState('')
    //Error MAssage State for password
    const [passwordError, setPasswordError] = useState('')

    const location = useLocation()
    //Handle Email password Sign In
    const handleSignIn = (e) => {
        const email = e.target.email.value;
        const password = e.target.password.value

        // regx to check UpperCAse
        const UpperRegX = /(?=.*[A-Z])/;

        // regx to check special charecter
        const SpecialRegX = /(?=.*[@$!%*?&])/

        if (password.length >= 6) {

            // to check UpperCAse
            if (UpperRegX.test(password)) {

                // to check special charecter
                if (SpecialRegX.test(password)) {
                    PasswordSignIn(email, password)
                        .then(result => {

                            if (result.user) {
                                location?.search ? navigate(`${location?.search?.slice(1, location.search.length)}`) : navigate('/')
                                localStorage.setItem('ShowToast', JSON.stringify('false'))
                                setEmailValue('');
                                setPasswordVAlue('');
                            }

                        },
                        )
                        .catch(
                            () => {
                                toast.error('Please Check Your Email and Password')
                            }
                        )
                }
                else {
                    setPasswordError('Password must contain at least one special character.')
                }
            }
            else {
                setPasswordError('Password must contain at least one uppercase letter')
            }
        }
        else { setPasswordError('Password must be at least 6 characters long.') }

        //Handle Email password Sign In
    }
    //Handle Google Sign In
    const handleGoogleSignIn = async () => {
        await GoogleSignUp()
            .then(result => {
                if (result.user) {
                    localStorage.setItem('ShowToast', JSON.stringify('false'))
                    location?.search ? navigate(`${location?.search?.slice(1, location.search.length)}`) : navigate('/')

                }
            })
    }
    //Handle Google Sign In
    return (
        <div>
            <div className="hero min-h-screen glass" style={{ backgroundImage: 'url(https://wallpapers.com/images/high/black-car-4k-iu8eeti5yc8d9a8l.webp)' }}>
                <div className=" "></div>
                <div className="hero-content text-center text-neutral-content rounded-lg shadow-2xl py-4 bg-gray-600 bg-opacity-10 ">
                    <div className="px-16 ">
                        <div className=" flex justify-center items-center flex-col rounded-xl bg-transparent bg-clip-border text-white shadow-none">
                            <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-white antialiased">
                                Sign Up
                            </h4>
                            <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-white antialiased">
                                Enter your details to register.
                            </p>
                            <form onSubmit={e => { e.preventDefault(), handleSignIn(e) }}
                                className="mt-8 mb-2 w-72 md:w-[400px] max-w-screen-lg ">
                                <div className="mb-4 flex flex-col gap-6">
                                    <div className="relative h-11 w-full min-w-[200px]">
                                        <input required name="email" value={emailValue} onChange={e => setEmailValue(e.target.value)}
                                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"

                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Email
                                        </label>
                                    </div>
                                    <div className="relative h-11 w-full min-w-[200px]">
                                        <input name="password" value={passwordValue} onChange={e => setPasswordVAlue(e.target.value)}
                                            type="password"
                                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"

                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Password
                                        </label>
                                        {/* Error Message for Password Validation  */}
                                        <div className="">
                                            {
                                                passwordError !== '' && <p className="text-lg text-red-500">*{passwordError}</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <input className="mt-16 block w-full select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="submit" value="Sign In" />
                                <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-white antialiased">
                                    Don't Have A Account?
                                    <Link to={'/signUp'} className="font-medium text-blue-500 transition-colors hover:text-blue-700">
                                        Sign Up
                                    </Link>
                                </p>
                            </form>
                            <div className="py-2">
                                <p>Or</p>
                            </div>
                            <div className=" md:w-[400px] w-72 mt-2 rounded-xl ">
                                <div className="flex justify-center items-center w-full ">
                                    <h1 className="border-b">Sign Up With</h1>
                                </div>
                                <div className=" flex gap-8 md:gap-16 items-center justify-center py-4 ">
                                    <img onClick={() => handleGoogleSignIn()} className="w-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-300" src="https://cdn-icons-png.flaticon.com/128/281/281764.png" alt="Google Sign Up" />
                                    <img className="w-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-300" src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Facebook Sign Up" />
                                    <img className="w-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-300" src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="Instagram Sign up" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>

    );
};

export default SignIn;
