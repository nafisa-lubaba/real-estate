
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../FirebaseProvider/FirebaseProvider';

const UserProfile = () => {
    const {user} = useContext(AuthContext)
    
    return (
        <div>
            <Helmet>
                <title>PropHaven | User Profile</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 animate__animated animate__backInUp">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={user.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className=''>
                        <h1 className="text-2xl lg:text-5xl font-bold pt-4"> Name:{user.displayName}</h1>
                        <h1 className=" pr-4 text-xl lg:text-3xl font-bold">Email:{user.email}</h1>
                      
                      
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserProfile;