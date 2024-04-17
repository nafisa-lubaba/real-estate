
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';
import Marquee from "react-fast-marquee";

const Cards = () => {
    const [carts, sertCarts] = useState([])
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => sertCarts(data))
    },[])
    return (
        <div>
             <div>
             <Marquee pauseOnHover={true} speed={100}>
                <h2 className="font-bold  text-3xl text-center mt-10 mb-5">Hospitality of ours and excellent offer for you....</h2>
                </Marquee>

            </div>
            <div className="grid grid-rows-1 lg:grid-cols-3 gap-8 h-full">
                {
                    carts.map(cart => <Card key={cart.id} cart={cart}></Card>)

                }
            </div>
            
        </div>
    );
};

export default Cards;