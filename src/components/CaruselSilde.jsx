
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import ProductCard from './ProductCard';


const CaruselSilde = ({ products }) => {

    return (
        <div className='px-4 mx-auto shadow-2xl '>

            <Swiper

                navigation={true}
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={10}
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                    // when window width is >= 1280px
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}

            >
                {
                    products && products?.map((product) => (
                        <SwiperSlide key={product?.id}>
                            <ProductCard product={product} />
                        </SwiperSlide>

                    ))
                }

            </Swiper>

        </div>
    );
};

export default CaruselSilde;