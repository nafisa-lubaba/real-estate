import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import design from '../assets/imageslogin.png'
import { useContext } from 'react';
import 'animate.css';
import { AuthContext } from '../FirebaseProvider/FirebaseProvider';
const UpdateProfile = () => {
    const {   updateUser } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = data => {
        console.log(data)
        const { username, PhotoUrl} = data
        updateUser(username, PhotoUrl)
    }
    return (
        <div>
            <Helmet>
                <title>PropHaven | Update Profile</title>
            </Helmet>
            <div className='hero min-h-screen animate__animated animate__zoomInDown' style={{ backgroundImage: `url(${design})` }}>
                <div className="w-full px-10 max-w-md py-8  rounded-xl
        ">
                    <div className="hero-overlay bg-opacity-60"></div>

                    <div className="w-full max-w-md p-8 space-y-3  bg-white bg-opacity-100 backdrop-blur-base rounded-lg">
                        <h1 className="text-2xl font-bold text-center">Update Profile</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-1 text-sm">
                                <label htmlFor="username" className="block">User Name</label>
                                <input type="username" name="username" id="username" placeholder="username" className="w-full px-4 py-3 rounded-md"
                                    {...register("username")} />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="PhotoUrl" className="block ">Photo Url</label>

                                <input type='PhotoUrl' name="PhotoUrl" id="PhotoUrl" placeholder="PhotoUrl" className="w-full px-4 py-3 rounded-md"
                                    {...register("PhotoUrl")} />
                                {/* Show/hide password toggle */}
                            </div>

                            <button className="block w-full p-3 text-center rounded-sm btn bg-black text-white">Update Profile</button>
                        </form>


                        {/* <p className="text-xs text-center sm:px-6 dark:text-gray-600">Dont have an account?
                            <Link to='/signup' rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Sign up</Link>
                        </p> */}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default UpdateProfile;