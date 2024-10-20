import { Link } from "react-router-dom";
import CaruselSilde from "../../../components/CaruselSilde";
import useProductData from "../../../hooks/useProductData";

const NewProducts = () => {
    const { data } = useProductData();

    const ElectronicsData = data?.filter((item) => item?.category === "Electronics");
    return (
        <div className="container mx-auto">
            <h2 className="my-6 text-3xl font-semibold text-black">New Products:-  <Link to={"/shop"} className="text-base text-gray-500 underline ml-7">View all</Link></h2>

            <CaruselSilde products={ElectronicsData} />
        </div>
    );
};

export default NewProducts;