import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./product-detail-page/FontAwesome";
import ModalCart from "./ModalCart/ModalCart";
import Navbar from "../Components/Navbar/Navbar";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 bg-current">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-4 flex flex-col"
          >
            <a href="#">
              <img
                className="rounded-t-lg w-full h-60 object-center"
                src={product.image}
                alt={product.title}
              />
            </a>
            <div className="flex flex-col flex-grow p-5 bg-slate-300 rounded-lg">
              <a href="#">
                <h5 className="mb-2 text-lg font-bold tracking-tight">
                  {product.title}
                </h5>
                <h5 className="font-semibold">{product.category}</h5>
              </a>
              <div className="flex items-center mt-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-500 "
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2 L14.39 8.26 L21 9.27 L16.47 14.14 L18.94 21 L12 17.77 L5.06 21 L7.53 14.14 L3 9.27 L9.61 8.26 L12 2 M12 5 L10.83 10 L6 10.77 L9.24 14 L8.47 18 L12 15.77 L15.53 18 L14.76 14 L18 10.77 L13.17 10 L12 5 Z"></path>
                </svg>
                <h5 className="text-white-500 font-bold">
                  {product.rating?.rate}
                </h5>
              </div>
              <div className="w-full mt-auto">
                {" "}
                <Link href={`/product-detail-page/${product.id}`}>
                  <button
                    type="button"
                    className="text-white bg-red-700 font-medium rounded-lg text-sm py-2.5 dark:bg-purple-600 mt-auto w-full"
                  >
                    View
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
