


const Card = ({ cart }) => {
    const { id, estate_title, image, facilities, location } = cart;
    return (
        <div>
            <div data-aos="fade-left" data-aos-duration='2000' className='card bg-base-100 shadow-xl rounded-lg border border-gray-200'>

                <figure className=''>
                    <img className='rounded-xl px-5 pt-5' src={image} alt={`image for the estate_title
${estate_title}`} />
                </figure>
                <div className='card-body'>
                    <div className='flex justify-between mb-3'>
                        {Array.isArray(facilities) && (
                            <>

                                <div className="flex gap-10">
                                    {facilities.map((facilitie, idx) => (
                                        <p className="text-green-500" key={idx}>{facilitie}</p>
                                    ))}
                                </div>
                            </>
                        )}

                    </div>
                    <h1 className='text-xl font-bold'>{estate_title}</h1>
                    <p className="gap-3">{location}</p>

                    <hr className='border-dotted my-2' />
                    <div className='flex justify-between mb-3'>

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