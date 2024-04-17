
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../FirebaseProvider/FirebaseProvider';
import { useForm } from "react-hook-form"
import SocialLogin from './SocialLogin';
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const SignIn = () => {

    const {signInUser} = useContext(AuthContext)
    const Navigate = useNavigate()
	const location= useLocation()
	const from = location?.state || '/'
    

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = data => {
        const {email, password}= data
        signInUser(email, password)
        .then(result => {
			if (result.user){
				Navigate(from)
			}
		
		})
        
    
        .catch(error =>{
            console.log(error)
        })
      }
    return (
        
        <div className="w-full px-10 py-8  rounded-xl
        bg-emerald-100">
            <Helmet>
                <title>PropHaven | LogIn</title>
            </Helmet>

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
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" 
            {...register("password", { required: true })}/>
             {errors.password && <span className="text-red-600">This field is required</span>}
			<div className="flex justify-end text-xs dark:text-gray-600" >
           

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
		<Link to ='/signup' rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Sign up</Link>
	</p>
</div>
        
       
            
        
    );
};

export default SignIn;