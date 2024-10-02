import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import useProductData from "../../hooks/useProductData";

const Shop = () => {
    const [category, setCategory] = useState();
    const [serchValue, setSerchValue] = useState("");
    const [sortDataValue, setSortDataValue] = useState("");
    // const [page, setPage] = useState(1);

    console.log(category);
    const { data } = useProductData();

    const Electronics = data?.filter((items) => items?.category === "Electronics");
    const Sports = data?.filter((items) => items?.category === "Sports");
    const Clothings = data?.filter((items) => items?.category === "Clothings");
    console.log("clotting data is", Clothings)
    const Furnitures = data?.filter((items) => items?.category === "Furnitures");
    const KidsKitchen = data?.filter((items) => items?.category === "Kids&Kitchen");
    const Jewelry = data?.filter((items) => items?.category === "Jewelry");


    const product = category ? data.filter((items) => items?.category === category) : data;

    const serchItems = product?.filter((items) => items?.name.toLowerCase().includes(serchValue?.toLocaleLowerCase()));
    const sortData = serchItems?.sort((prevItem, nextItem) => prevItem[sortDataValue] - nextItem[sortDataValue]);


    const handaleSortData = (e) => {
        setSortDataValue(e.target.value)
    }


    return (
        <section className="md:flex container mx-auto pt-40">
            {/* Category Sections  */}
            <div className="md:w-3/12 p-4 bg-slate-100">
                <h1 className="text-xl font-bold border-b pb-4">SEARCH FOR PRODUCT</h1>
                <label className="input input-bordered flex my-3 items-center gap-2">
                    <input onChange={(e) => setSerchValue(e.target.value)} type="text" className="grow border-r" placeholder="Search Products.." />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
                <h1 className="text-xl font-bold border-b my-4 pb-4">PRODUCT CATEGORIES</h1>
                <div className="flex flex-col items-start space-y-3">
                    <button onClick={() => setCategory()}>All Products-- ({data ? data.length : 0}) </button>
                    <button onClick={() => setCategory("Clothings")} >Clothings-- ({Clothings ? Clothings.length : 0}) </button>
                    <button onClick={() => setCategory("Electronics")}>Electronics-- ({Electronics ? Electronics.length : 0})</button>
                    <button onClick={() => setCategory("Kids&Kitchen")} >Kitchen & Kids-- ({KidsKitchen ? KidsKitchen.length : 0}) </button>
                    <button onClick={() => setCategory("Sports")} >Sports-- ({Sports ? Sports.length : 0})</button>
                    <button onClick={() => setCategory("Furnitures")} >Home & Furniture-- ({Furnitures ? Furnitures.length : 0})</button>
                    <button onClick={() => setCategory("Jewelry")}>Beauty & Jewelry-- ({Jewelry ? Jewelry.length : 0}) </button>
                </div>
            </div>
            {/* Product Sections  */}
            <div className="md:w-9/12 mx-auto bg-gray-50">
                {/* <h1 className="text-2xl md:text-4xl md:font-bold border-b-2  pb-3 uppercase ">All Products</h1> */}
                <div className="flex items-center justify-between my-12">
                    <h1> SHOWING  Out OF  RESULT</h1>
                    <select onClick={handaleSortData} className="select select-bordered max-w-xs">
                        <option disabled selected defaultValue={""}>SORTING</option>
                        <option value={"name"}>Sort By Name</option>
                        <option value={"price"}>Sort By Price</option>
                    </select>
                </div>
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                    {sortData?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Shop;