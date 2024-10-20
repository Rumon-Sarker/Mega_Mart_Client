import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
// import { Autoplay, Pagination, } from 'swiper/modules';

const Brands = () => {
    return (
        <section className="container mx-auto">
            <h2 className="my-6 text-3xl font-semibold text-black">Our Brands :-  <Link to={"/shop"} className="text-base text-gray-500 underline ml-7">View all</Link></h2>
            <div >
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    slidesPerView={5}
                    spaceBetween={20}
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 30,
                        },
                        // when window width is >= 1280px
                        1280: {
                            slidesPerView: 7,
                            spaceBetween: 30,
                        },
                    }}


                >

                    <SwiperSlide>
                        <div className="flex justify-center py-6 my-12 text-center transition duration-300 transform rounded-full shadow-2xl hover:-translate-y-4">
                            <div className="text-xl font-bold text-transparent uppercase bg-gradient-to-r from-red-500 via-green-500 to-purple-500 bg-clip-text">
                                Shamsung
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex justify-center py-6 my-12 text-center transition duration-300 transform rounded-full shadow-2xl hover:-translate-y-4">
                            <div className="text-xl font-bold text-transparent uppercase bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 bg-clip-text">
                                Apple
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex justify-center py-6 my-12 text-center transition duration-300 transform rounded-full shadow-2xl hover:-translate-y-4">
                            <div className="text-xl font-bold text-transparent uppercase bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 bg-clip-text">
                                Nokia
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex justify-center py-6 my-12 text-center transition duration-300 transform rounded-full shadow-2xl hover:-translate-y-4">
                            <div className="text-xl font-bold text-transparent uppercase bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text">
                                Huawei
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex justify-center py-6 my-12 text-center transition duration-300 transform rounded-full shadow-2xl hover:-translate-y-4">
                            <div className="text-xl font-bold text-transparent uppercase bg-gradient-to-r from-purple-400 via-red-400 to-yellow-400 bg-clip-text">
                                OnePlus
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex justify-center py-6 my-12 text-center transition duration-300 transform rounded-full shadow-2xl hover:-translate-y-4">
                            <div className="text-xl font-bold text-transparent uppercase bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 bg-clip-text">
                                Xiaomi
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex justify-center py-6 my-12 text-center transition duration-300 transform rounded-full shadow-2xl hover:-translate-y-4">
                            <div className="text-xl font-bold text-transparent uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">
                                Oppo
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </section >
    );
};

export default Brands;