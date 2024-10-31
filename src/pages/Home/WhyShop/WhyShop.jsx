import { FaHome, FaShippingFast, FaStar } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";


const WhyShop = () => {
    return (
        <section className="flex flex-col items-center py-12 bg-gradient-to-tr from-blue-400 to-green-300">
            <h1 className="container mx-auto text-5xl font-bold text-center">Why shop with us?</h1>
            <div className="container justify-center flex-none gap-4 pt-12 mx-auto space-y-2 lgl:flex lg:flex mdl:flex">
                <div className="p-12 text-center border rounded-lg shadow-2xl sm:w-full w-96 bg-slate-50 ">
                    <h1 className="flex items-center justify-center text-orange-500 text-8xl"><FaStar /></h1>
                    <h1 className="my-2 font-serif text-xl">QUALITY AND SAVING</h1>
                    <p className="text-lg">Comprehensive quality control and affordable prices</p>
                </div>
                <div className="p-12 text-center border rounded-lg shadow-2xl sm:w-full w-96 bg-slate-50 ">
                    <h1 className="flex items-center justify-center text-orange-500 text-8xl"><FaHome /></h1>
                    <h1 className="my-2 font-serif text-xl">GLOBAL WAREHOUSE</h1>
                    <p className="text-lg">37 overseas warehouses</p>
                </div>
                <div className="p-12 text-center border rounded-lg shadow-2xl sm:w-full w-96 bg-slate-50 ">
                    <h1 className="flex items-center justify-center text-orange-500 text-8xl"><FaShippingFast /></h1>
                    <h1 className="my-2 font-serif text-xl">FAST SHIPPING</h1>
                    <p className="text-lg">Fast and convenient door to door delivery</p>
                </div>
                <div className="p-12 text-center border rounded-lg shadow-2xl sm:w-full w-96 bg-slate-50 ">
                    <h1 className="flex items-center justify-center text-orange-500 text-8xl"><MdOutlineSecurity /></h1>
                    <h1 className="my-2 font-serif text-xl">PAYMENT SECURITY</h1>
                    <p className="text-lg">More than 10 different secure payment methods</p>
                </div>

            </div>
        </section>
    );
};

export default WhyShop;