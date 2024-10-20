
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, } from 'swiper/modules';
import useDataFetch from "../../../hooks/useDataFetch";

const ShopbyCategories = () => {
    const { data } = useDataFetch("category.json");

    const fixedData = data?.slice(0, 9);

    return (
        <section className="container flex flex-col mx-auto">
            <h2 className="my-6 text-3xl font-semibold text-black">Shop by Categories:-  <Link to={"/shop"} className="text-base text-gray-500 underline ml-7">View all</Link></h2>

            <div>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={6}
                    loop={true}
                    autoplay={{ delay: 4000 }}
                    pagination={{ clickable: true }}

                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                        // when window width is >= 1280px
                        1280: {
                            slidesPerView: 6,
                            spaceBetween: 30,
                        },
                    }}


                >
                    {
                        fixedData && fixedData.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div className="flex flex-col items-center justify-center p-3 pb-12">
                                    <div className="flex flex-col items-center justify-center mx-auto rounded-full w-52 h-52 " >
                                        <img className="p-4 rounded-full shadow-2xl w-44 h-44" src={product.image} alt="Caegory Img" />
                                        <h2 className="p-2 my-4 font-serif text-lg text-gray-600">{product.name}</h2>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>



        </section>
    );
};

export default ShopbyCategories;