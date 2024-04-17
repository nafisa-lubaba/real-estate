
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../FirebaseProvider/FirebaseProvider';
import { useForm } from "react-hook-form"
import SocialLogin from './SocialLogin';
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { FaEyeSlash } from "react-icons/fa";
import design from '../assets/imageslogin.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignIn = () => {

    const { signInUser } = useContext(AuthContext)
    const Navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/';
    const [showPassword, setShowPassword] = useState(false);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = data => {
        const { email, password } = data
        if (password.length < 6) {
            toast('Password should be 6 character or more')
        }
        else if (!/[A-Z]/.test(password)) {
            toast('Password should have at lease one Uppercase letter')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast('Password should have at lease one Lowercase letter')
            return;
        }
        signInUser(email, password)
            .then(result => {
                if (result.user) {
                    Navigate(from)
                }

            })


            .catch(error => {
                console.log(error)
            })
    }

    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };




    return (

       <div className='hero min-h-screen' style={{ backgroundImage: `url(${design})` }}>
         <div className="w-full px-10 max-w-md py-8  rounded-xl
        ">
            <div className="hero-overlay bg-opacity-60"></div>
            <Helmet>
                <title>PropHaven | LogIn</title>
            </Helmet>

           <div className="w-full max-w-md p-8 space-y-3  bg-white bg-opacity-100 backdrop-blur-base rounded-lg">
           <h1 className="text-2xl font-bold text-center">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block dark:text-gray-600">Email</label>
                    <input type="text" name="username" id="username" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                        {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-600">This field is required</span>}

                </div>
                <div className="space-y-1 text-sm">
						<label htmlFor="password" className="block dark:text-gray-600">Password</label>
						<div className="relative">
							<input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
								{...register("password", { required: true})} />
							{/* Show/hide password toggle */}
							<button type="button" className="absolute inset-y-0 right-0 px-3 flex items-center" onClick={togglePasswordVisibility}>
								{showPassword ? (
									<FaEyeSlash className="w-6 h-6" />
								) : (
									<FaEyeSlash className="w-6 h-6" />
								)}
							</button>
						</div>
						{errors.password && <span className="text-red-600">{errors.password.message}</span>}
						<div className="flex justify-end text-xs dark:text-gray-600">
							<a rel="noopener noreferrer" href="#">Forgot Password?</a>
						</div>
					</div>
               
                <button className="block w-full p-3 text-center rounded-sm btn bg-black text-white">Log In</button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            </div>
            <div>
                <SocialLogin></SocialLogin>
            </div>

            <p className="text-xs text-center sm:px-6 dark:text-gray-600">Dont have an account?
                <Link to='/signup' rel="noopener noreferrer" href="#" className="underline text-black font-semibold ">Sign up</Link>
            </p>
           </div>
        </div>
        <ToastContainer />
       </div>




    );
};

export default SignIn;