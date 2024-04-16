import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Swiper = () => {
    return (
        <div className='mt-10'>
            <Carousel>
                <div className=''>
                    <img src="https://i.ibb.co/rZ2Cfzg/download-1.jpg" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src="https://i.ibb.co/RD1hKKG/download-2.jpg" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src="https://i.ibb.co/kJT6ckz/download-3.jpg" />
                    <p className="legend"></p>
                </div>






            </Carousel>

        </div>
    );
};

export default Swiper;