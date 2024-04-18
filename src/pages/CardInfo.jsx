import { useLoaderData, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const CardInfo = () => {
    useEffect(() =>{
        Aos.init();

    },[])
    const carts = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const cart = carts.find(cart => cart.id === idInt)
    console.log(cart)
    return (

        <div className='mx-auto w-[90%] gap-5'>
              <Helmet>
                <title>PropHaven | CardInfo</title>
            </Helmet>

            <div className="hero min-h-screen bg-lime-100">
                <div data-aos="zoom-in-right" className="hero-content gap-10  flex flex-col lg:flex-row lg:justify-center">
                    <img src={cart.image} className="lg:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className=" text-3xl font-bold lg:text-5xl lg:font-bold">{cart.estate_title}</h1>
                        <p className='font-bold text-2xl px-3 text-orange-400 mt-3'>   {cart.segment_name}</p>
                        {/* <p className="py-6">{cart.estate_title}</p> */}
                        <p className="py-6"><span className='font-bold'>Description:</span>{cart.description}</p>
                       
                        {/* <div className='flex justify-between mb-3'>
                            {Array.isArray(book.tags) && (
                                <>

                                    <div className="flex gap-10"> <span className='font-semibold'>Tags:</span>
                                        {book.tags.map((tag, idx) => (
                                            <p className="text-green-500" key={idx}>#{tag}</p>
                                        ))}

                                    </div>
                                </>
                            )}


                        </div> */}

                        <hr className='border-dotted my-2' />
                        <div className='mb-3'>
                            <p className='font-bold'>Price:  <span className='font-semibold ml-3'>  {cart.price}</span></p>
                           
                            <p className='font-bold'>Area:   <span className='font-semibold ml-3'>{cart.area}</span></p>
                            <p className='font-bold'>Location:  <span className='font-semibold ml-3'> {cart.location}</span></p>
                        </div>
                        <p className='font-bold text-xl'>Facilities:</p>

                    
                        { 
                    
                    cart.facilities.map((facilities, idx) => (
                        <li className='ml-5 text-black' key={idx}>{facilities}</li>
                    ))}
                     <p className='font-bold'>Status:  <span className='font-semibold ml-3 text-orange-500'> {cart.status}</span></p>

                       
                    </div>
                </div>
            </div>


        </div>


    );
};

export default CardInfo;