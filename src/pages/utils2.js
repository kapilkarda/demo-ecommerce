// ind.js

// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import "./product-detail-page/FontAwesome";
// import Cart from "./Cart";

// export default function Home() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [isCartModalOpen, setIsCartModalOpen] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const url = "https://fakestoreapi.com/products";

//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const json = await response.json();
//         setProducts(json);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//     setCartCount(cartCount + 1);
//     console.log("Updated Cart:", cart);
//     router.push({
//       pathname: "/cart",
//       query: { cart: JSON.stringify([...cart, product]) },
//     });
//     console.log("Navigating to /cart");
//   };

//   const openCartModal = () => {
//     setIsCartModalOpen(true);
//   };

//   const closeCartModal = () => {
//     setIsCartModalOpen(false);
//   };

//   return (
//     <>
//       <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
//         <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
//             <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//               Ecommerce
//             </span>
//           </a>
//           <button
//             data-collapse-toggle="navbar-solid-bg"
//             type="button"
//             class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-solid-bg"
//             aria-expanded="false"
//           >
//             <span class="sr-only">Open main menu</span>
//             <svg
//               class="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//           <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
//             <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
//               <li>
//                 <a
//                   href="#"
//                   class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
//                   aria-current="page"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Pricing
//                 </a>
//               </li>
//               <div onClick={openCartModal}>
//                 <FontAwesomeIcon
//                   icon="shopping-cart"
//                   className="text-blue-500"
//                   // onClick={openModal}
//                 />
//                 <span className=" ml-2">{cartCount}</span>
//               </div>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div className="mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 bg-current">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-4 flex flex-col"
//           >
//             <a href="#">
//               <img
//                 className="rounded-t-lg w-full h-60 object-center"
//                 src={product.image}
//                 alt={product.title}
//               />
//             </a>
//             <div className="flex flex-col flex-grow p-5 bg-slate-300 rounded-lg">
//               <a href="#">
//                 <h5 className="mb-2 text-lg font-bold tracking-tight">
//                   {product.title}
//                 </h5>
//               </a>
//               <div className="flex items-center mt-auto mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   className="w-4 h-4 text-yellow-500 "
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2 L14.39 8.26 L21 9.27 L16.47 14.14 L18.94 21 L12 17.77 L5.06 21 L7.53 14.14 L3 9.27 L9.61 8.26 L12 2 M12 5 L10.83 10 L6 10.77 L9.24 14 L8.47 18 L12 15.77 L15.53 18 L14.76 14 L18 10.77 L13.17 10 L12 5 Z"></path>
//                 </svg>
//                 <h5 className="text-white-500 font-bold">
//                   {product.rating?.rate}
//                 </h5>
//               </div>
//               <div className="w-full mt-auto">
//                 {" "}
//                 {/* Ensure full width for the Link */}
//                 {/* <Link href={`/product-detail-page/${product.id}`}> */}
//                 <button
//                   type="button"
//                   className="text-white bg-red-700 font-medium rounded-lg text-sm py-2.5 dark:bg-purple-600 mt-auto w-full"
//                   onClick={() => addToCart(product)}
//                 >
//                   Add
//                 </button>
//                 {/* </Link> */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Cart
//         cart={cart}
//         isOpen={isCartModalOpen}
//         onClose={closeCartModal}
//         count={cartCount}
//       />
//     </>
//   );
// }

// Cart.js
// import React from "react";

// const Cart = ({ cart, isOpen, onClose, count }) => {
//   console.log("Cart Data:", cart);
//   return (
//     <div
//       className={`fixed bottom-0 right-0 m-4 p-4 bg-white shadow-md rounded-md ${
//         isOpen ? "block" : "hidden"
//       } max-h-[80vh] overflow-y-auto`}
//     >
//       <div className="flex justify-between">
//         <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
//         <button
//           className="text-white bg-red-500 px-4 py-2 ml-8 rounded-md"
//           onClick={onClose}
//         >
//           X
//         </button>
//       </div>
//       {cart?.length > 0 ? (
//         <ul>
//           {cart.map((item) => (
//             <li key={item.id} className="mb-2 flex">
//               <img src={item.image} className="w-10" />
//               <div className="ml-4">
//                 {item.title}
//                 <div className="flex justify-between">
//                   <div>
//                     <p>{item.price}</p>
//                   </div>
//                   <div className="flex">
//                     <button className="text-white bg-red-500 px-2  rounded-md">
//                       -
//                     </button>
//                     <p>{count}</p>
//                     <button className="text-white bg-red-500 px-1.5 rounded-md">
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// index.js
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import "./product-detail-page/FontAwesome";
// import Cart from "./Cart";

// export default function Home() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [isCartModalOpen, setIsCartModalOpen] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const url = "https://fakestoreapi.com/products";

//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const json = await response.json();
//         setProducts(json);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const addToCart = (product) => {
//     setCart([...cart, product]);

//     console.log("Updated Cart:", cart);
//     router.push({
//       pathname: "/cart",
//       query: { cart: JSON.stringify([...cart, product]) },
//     });
//     console.log("Navigating to /cart");

//     const existingProductIndex = cart.findIndex(
//       (item) => item.id === product.id
//     );

//     if (existingProductIndex !== -1) {
//       // If the product is in the cart, update the count
//       const updatedCart = [...cart];
//       updatedCart[existingProductIndex].count += 1;

//       setCart(updatedCart);
//       setCartCount((prevCount) => prevCount + 1);
//     } else {
//       // If the product is not in the cart, add it with count 1
//       setCart([...cart, { ...product, count: 1 }]);
//       setCartCount((prevCount) => prevCount + 1);
//     }
//   };

//   const openCartModal = () => {
//     setIsCartModalOpen(true);
//   };

//   const closeCartModal = () => {
//     setIsCartModalOpen(false);
//   };

//   return (
//     <>
//       <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
//         <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
//             <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//               Ecommerce
//             </span>
//           </a>
//           <button
//             data-collapse-toggle="navbar-solid-bg"
//             type="button"
//             class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-solid-bg"
//             aria-expanded="false"
//           >
//             <span class="sr-only">Open main menu</span>
//             <svg
//               class="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//           <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
//             <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
//               <li>
//                 <a
//                   href="#"
//                   class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
//                   aria-current="page"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Pricing
//                 </a>
//               </li>
//               <div onClick={openCartModal}>
//                 <FontAwesomeIcon
//                   icon="shopping-cart"
//                   className="text-blue-500"
//                   // onClick={openModal}
//                 />
//                 <span className=" ml-2">{cartCount}</span>
//               </div>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div className="mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 bg-current">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-4 flex flex-col"
//           >
//             <a href="#">
//               <img
//                 className="rounded-t-lg w-full h-60 object-center"
//                 src={product.image}
//                 alt={product.title}
//               />
//             </a>
//             <div className="flex flex-col flex-grow p-5 bg-slate-300 rounded-lg">
//               <a href="#">
//                 <h5 className="mb-2 text-lg font-bold tracking-tight">
//                   {product.title}
//                 </h5>
//               </a>
//               <div className="flex items-center mt-auto mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   className="w-4 h-4 text-yellow-500 "
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2 L14.39 8.26 L21 9.27 L16.47 14.14 L18.94 21 L12 17.77 L5.06 21 L7.53 14.14 L3 9.27 L9.61 8.26 L12 2 M12 5 L10.83 10 L6 10.77 L9.24 14 L8.47 18 L12 15.77 L15.53 18 L14.76 14 L18 10.77 L13.17 10 L12 5 Z"></path>
//                 </svg>
//                 <h5 className="text-white-500 font-bold">
//                   {product.rating?.rate}
//                 </h5>
//               </div>
//               <div className="w-full mt-auto">
//                 {" "}
//                 {/* Ensure full width for the Link */}
//                 {/* <Link href={`/product-detail-page/${product.id}`}> */}
//                 <button
//                   type="button"
//                   className="text-white bg-red-700 font-medium rounded-lg text-sm py-2.5 dark:bg-purple-600 mt-auto w-full"
//                   onClick={() => addToCart(product)}
//                 >
//                   Add
//                 </button>
//                 {/* </Link> */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Cart
//         cart={cart}
//         isOpen={isCartModalOpen}
//         onClose={closeCartModal}
//         count={cartCount}
//       />
//     </>
//   );
// }

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./product-detail-page/FontAwesome";
import Cart from "./Cart";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const router = useRouter();

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

  const addToCart = (product) => {
    setCart([...cart, product]);

    console.log("Updated Cart:", cart);
    router.push({
      pathname: "/cart",
      query: { cart: JSON.stringify([...cart, product]) },
    });
    console.log("Navigating to /cart");

    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // If the product is in the cart, update the count
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].count += 1;

      setCart(updatedCart);
      setCartCount((prevCount) => prevCount + 1);
    } else {
      // If the product is not in the cart, add it with count 1
      setCart([...cart, { ...product, count: 1 }]);
      setCartCount((prevCount) => prevCount + 1);
    }
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <>
      <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Ecommerce
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <div onClick={openCartModal}>
                <FontAwesomeIcon
                  icon="shopping-cart"
                  className="text-blue-500"
                  // onClick={openModal}
                />
                <span className=" ml-2">{cartCount}</span>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      <div className="mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 bg-current">
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
                {/* Ensure full width for the Link */}
                {/* <Link href={`/product-detail-page/${product.id}`}> */}
                <button
                  type="button"
                  className="text-white bg-red-700 font-medium rounded-lg text-sm py-2.5 dark:bg-purple-600 mt-auto w-full"
                  onClick={() => addToCart(product)}
                >
                  Add
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Cart
        cart={cart}
        isOpen={isCartModalOpen}
        onClose={closeCartModal}
        count={cartCount}
      />
    </>
  );
}
