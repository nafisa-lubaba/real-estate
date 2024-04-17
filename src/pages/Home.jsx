import Cards from "../components/Cards";
import Swiper from "../components/Swiper";
import { Helmet } from 'react-helmet-async';





const Home = () => {


    return (

        <div>
            <Helmet>
                <title>PropHaven | Home</title>
            </Helmet>
         <div className="rounded-2xl ">
         <Swiper></Swiper>
         <Cards></Cards>
         </div>



        </div>

    );
};



export default Home