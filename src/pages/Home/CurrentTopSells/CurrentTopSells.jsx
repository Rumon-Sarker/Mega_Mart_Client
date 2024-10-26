
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/ProductCard';
import useProductData from '../../../hooks/useProductData';

import rewordImg from "../.././../assets/AllSubBannerPngImg/rewords.png";
import ledTv from "../.././../assets/AllSubBannerPngImg/LedTv.png";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination } from 'swiper/modules';


const CurrentTopSells = () => {
    const { data, loading, error } = useProductData();
    if (loading) {
        return <p>Loading.......</p>
    }
    if (error) {
        alert(error.message)
    }

    const filterData = data?.slice(2, 9);

    return (
        <section className="container mx-auto ">
            <h2 className="my-6 text-3xl font-semibold text-black">Current Top Sellers:-  <Link to={"/shop"} className="text-base text-gray-500 underline ml-7">View all</Link></h2>
            <div>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={6}
                    loop={true}
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
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        // when window width is >= 1280px
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                    }}

                    pagination={{ clickable: true }}



                >
                    {
                        filterData && filterData.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div>
                                    <ProductCard product={product} />
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>

            <div className='flex-none gap-12 my-12 space-y-3 xl:space-y-0 lgl:space-y-0 lg:flex lgl:flex'>
                <div className='w-full h-[250px] rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-12 shadow-lg'>
                    <div className="w-full xl:h-[200px] lgl:h-[160px]   transform transition hover:scale-105 duration-700 rounded-lg flex items-center">
                        {/* Left Side: Product Information */}
                        <div className="flex-1 space-y-2 text-white">
                            <h2 className="text-xl font-bold xl:text-4xl lgl:text-2xl lg:text-2xl mdl:text-2xl md:text-2xl">World Fist HD LED Tv</h2>
                            <p className="font-semibold xl:text-2xl lgl:text-xl md:text-xl">First Order and Take this offer.Not miss this offers</p>
                            <button className="px-6 py-4 font-semibold transition rounded-full bg-gradient-to-r from-purple-700 to-pink-500 hover:bg-purple-100">
                                Shop Now
                            </button>
                        </div>

                        {/* Right Side: Product Image with same gradient background */}
                        <div className="flex-shrink-0 rounded-lg">
                            <div className="relative xl:w-[250px] lg:-[200px] w-[180px] h-[200px] rounded-lg">
                                <img
                                    src={ledTv} // Replace with your PNG image URL
                                    alt="ledTv"
                                    className="absolute inset-0 object-contain w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[250px] rounded-lg bg-gradient-to-r from-yellow-500 to-pink-500 p-12 shadow-lg'>
                    <div className="w-full xl:h-[200px] lgl:h-[160px]   transform transition hover:scale-105 duration-700 rounded-lg  flex  items-center">
                        {/* Left Side: Product Information */}
                        <div className="flex-1 space-y-2 text-white">
                            <h2 className="text-xl font-bold xl:text-4xl lgl:text-3xl lg:text-3xl md:text-2xl">Rewords Programs</h2>
                            <p className="font-semibold xl:text-2xl lgl:text-xl md:text-xl">Welcome to megamart and Take to Your Rewords</p>
                            <button className="px-6 py-4 font-semibold transition rounded-full bg-gradient-to-r from-yellow-500 to-pink-500 hover:bg-purple-100">
                                Shop Now
                            </button>
                        </div>

                        {/* Right Side: Product Image with same gradient background */}
                        <div className="flex-shrink-0 rounded-lg">
                            <div className="relative xl:w-[250px] lgl:w-[200px] lg:-[200px] w-[180px] h-[200px] rounded-lg">
                                <img
                                    src={rewordImg} // Replace with your PNG image URL
                                    alt="rewordImg"
                                    className="absolute inset-0 object-contain w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>




        </section>
    );
};

export default CurrentTopSells;