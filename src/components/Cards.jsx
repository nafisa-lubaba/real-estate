
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';

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
                <h2 className="font-bold  text-5xl text-center mt-10 mb-5">Books</h2>

            </div>
            <div className="grid grid-rows-1 lg:grid-cols-3 gap-8">
                {
                    carts.map(cart => <Card key={cart.id} cart={cart}></Card>)

                }
            </div>
            
        </div>
    );
};

export default Cards;