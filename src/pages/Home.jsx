import Cards from "../components/Cards";
import Slider from "../components/Slider";

import { Helmet } from 'react-helmet-async';





const Home = () => {


    return (

        <div className="overflow-x-hidden">
            <Helmet>
                <title>PropHaven | Home</title>
            </Helmet>
         <div className="rounded-2xl ">
         <Slider></Slider>
         <Cards></Cards>
         </div>



        </div>

    );
};



export default Home