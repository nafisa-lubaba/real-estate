import { useLoaderData, useParams } from 'react-router-dom'

const CardInfo = () => {
    const carts = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const cart = carts.find(cart => cart.id === idInt)
    console.log(cart)
    return (
        <div className='mx-auto w-[90%] gap-5'>

            <div className="hero min-h-screen bg-lime-100">
                <div className="hero-content gap-10  flex flex-col lg:flex-row lg:justify-center">
                    <img src={cart.image} className="lg:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className=" text-3xl font-bold lg:text-5xl lg:font-bold">{cart.estate_title}</h1>
                        {/* <p className="py-6">{cart.estate_title}</p> */}
                        <p className="py-6"><span className='font-bold'>description:</span>{cart.description}</p>
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
                            <p className=''>price:  <span className='font-semibold ml-3'>  {cart.price}</span></p>
                            <p className=''>status:  <span className='font-semibold ml-3'> {cart.status}</span></p>
                            <p className=''>area:   <span className='font-semibold ml-3'>{cart.area}</span></p>
                            <p className=''>location:  <span className='font-semibold ml-3'> {cart.location}</span></p>
                        </div>

                       
                    </div>
                </div>
            </div>


        </div>


    );
};

export default CardInfo;