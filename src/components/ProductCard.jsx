import { useContext } from "react";
import { GiSelfLove } from "react-icons/gi";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const ProductCard = ({ product }) => {
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const { name, price, image, discountPrice, category, id } = product;

    const handlaeAddToCart = () => {
        if (user) {
            ({
                id,
                name,
                price: Number(product.price),
                image,
                discountPrice,
                category,
                quantity: 1,

            });
            toast.success(`${name} add to cart Success`, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",

            });
        }
        else {
            navigate("/signin")
        }




    }

    return (
        <div className="container mx-auto">
            <div className="max-w-sm p-4 mx-auto mb-12 transition duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl">
                {/* Product Image */}
                <img
                    src={image}
                    alt="product"
                    className="object-cover w-full h-48 p-3 transition duration-300 transform rounded-lg hover:scale-105"
                />
                <div className="mt-4 text-xl font-bold">
                    <h2 className="text-lg font-bold text-gray-800">{name}</h2>
                    <div className="flex gap-2">
                        <p className="text-gray-500 line-through">${discountPrice}</p>
                        <span> form </span>
                        <p className="text-xl font-semibold text-red-500">${price}</p>
                    </div>
                </div>

                <div className="mt-4">
                    <p className="text-gray-700">Select Color:</p>
                    <div className="flex gap-2 mt-2">
                        {/* Red Color Option */}
                        <label>
                            <input
                                type="radio"
                                name="color"
                                value="red"
                                className="hidden"
                            />
                            <span
                                className={`inline-block w-6 h-6 rounded-full bg-gray-500 cursor-pointer border-2`}
                            ></span>
                        </label>

                        {/* Blue Color Option */}
                        <label>
                            <input
                                type="radio"
                                name="color"
                                value="blue"
                                className="hidden"
                            />
                            <span
                                className={`inline-block w-6 h-6 rounded-full cursor-pointer border-2`}
                            ></span>
                        </label>

                        {/* Green Color Option */}
                        <label>
                            <input
                                type="radio"
                                name="color"
                                value="green"
                                className="hidden"
                            />
                            <span
                                className={`inline-block w-6 h-6 bg-green-500 rounded-full cursor-pointer border-2 `}

                            ></span>
                        </label>
                    </div>
                </div>

                <div className="flex gap-12 mt-6 text-center">
                    <button onClick={() => handlaeAddToCart(product)} className="px-4 py-2 text-black transition duration-200 border border-green-400 rounded-full btn-outline hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        Add To Card
                    </button>
                    <button className="text-2xl">
                        <Link> <GiSelfLove /></Link>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;