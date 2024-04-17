import { Link } from "react-router-dom"
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";




const Card = ({ cart }) => {
    useEffect(() =>{
        Aos.init();

    },[])
    const { id, estate_title, image, facilities, location } = cart;
    return (
        <div  className="">
            <div className='card bg-base-100 shadow-xl rounded-lg border border-gray-200'data-aos='fade-right'>

                <figure className=''>
                    <img className='rounded-xl px-5 pt-5' src={image} alt={`image for the estate_title
${estate_title}`} />
                </figure>
                <div className='card-body'data-aos='fade-left'>
                <h1 className='text-xl font-bold'>{estate_title}</h1>
                    <p className="gap-3">{location}</p>
                    <div className='flex justify-between mb-3'>
                        
                        {Array.isArray(facilities) && (
                            <>

                                <div className="flex gap-10">
                                    {facilities.map((facilitie, idx) => (
                                        <p className="text-orange-500" key={idx}>#{facilitie}</p>
                                    ))}
                                </div>
                            </>
                        )}

                    </div>
                    

                    <hr className='border-dotted my-2' />

                    <div className='flex justify-between mb-3'>
                        <Link  to ={`/cart/${id}`}
                        className="btn bg-black text-white">
                      
                        View Property</Link>


                        {/* <p className='ml-2'>{category}</p>

        <button className='text-xl'><FaRegStar /></button>
        <p className='ml-2'>{rating}</p> */}

                    </div>


                </div>


            </div>


        </div>
    );
};

export default Card;