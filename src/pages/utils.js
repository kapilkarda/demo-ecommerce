// import Image from "next/image";
// import { Inter } from "next/font/google";
// import { useEffect, useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     const url = "https://fakestoreapi.com/products";
//     const FetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const json = await response.json();
//         setProducts(json);
//         console.log(json);
//       } catch (error) {
//         console.log("error", error);
//       }
//     };
//     FetchData();
//   }, []);
//   return (
//     <>
//       <div>
//         <div className="max-w-screen-lg mx-auto  p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {products.map((product) => (
//             <div key={product.id}>
//               <a href="#">
//                 <img className="w-fill" src={product.image} />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const [products, setProducts] = useState([]);

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

//   return (
//     <div className="mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 bg-current">
//       {products.map((product) => (
//         <div
//           key={product.id}
//           className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-4 flex flex-col"
//         >
//           <a href="#">
//             <img
//               className="rounded-t-lg w-full h-40 object-center"
//               src={product.image}
//               alt={product.title}
//             />
//           </a>
//           <div className="flex flex-col flex-grow p-5 bg-yellow-500">
//             <a href="#">
//               <h5 className="mb-2 text-lg font-bold tracking-tight">
//                 {product.title}
//               </h5>
//             </a>
//             <h5 className="mt-auto text-red-500 font-bold">
//               {product.rating?.rate}/5
//             </h5>
//             <Link href={`/product-detail-page/${product.id}`}>
//               <button
//                 type="button"
//                 className="text-white bg-purple-700 font-medium rounded-lg text-sm py-2.5 dark:bg-purple-600 mt-auto"
//               >
//                 View Product
//               </button>
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import "./FontAwesome";

// const ProductDetails = () => {
//   const [products, setProducts] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const url = `https://fakestoreapi.com/products/${router.query.index}`;

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
//   console.log(products, "products");
//   const addToCart = () => {
//     setCartCount(cartCount + 1);
//   };
//   const openModal = () => {
//     setIsModalOpen(true);
//   };
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <div>
//         <FontAwesomeIcon
//           icon="shopping-cart"
//           className="text-blue-500"
//           onClick={openModal}
//         />
//         <span className=" ml-2">{cartCount}</span>
//       </div>
//       <div class="container px-5 py-24 mx-auto">
//         <div class="lg:w-4/5 mx-auto flex ">
//           <img
//             src={products.image}
//             class="lg:w-1/2 w-full h-96 object-center rounded border border-gray-200"
//           />

//           <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 bg-red-500 text-white">
//             <h5 class="text-4xl pb-8">{products.title}</h5>
//             {/* <h5>{products.category}</h5> */}
//             <div className="flex items-center mt-auto pb-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 className="w-4 h-4 text-yellow-500 "
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 2 L14.39 8.26 L21 9.27 L16.47 14.14 L18.94 21 L12 17.77 L5.06 21 L7.53 14.14 L3 9.27 L9.61 8.26 L12 2 M12 5 L10.83 10 L6 10.77 L9.24 14 L8.47 18 L12 15.77 L15.53 18 L14.76 14 L18 10.77 L13.17 10 L12 5 Z"></path>
//               </svg>
//               <h5 className="text-white-500 font-bold">
//                 {products.rating?.rate}
//               </h5>
//             </div>
//             <h5 class="leading-relaxed pb-4">{products.description}</h5>
//             <h6 class="text-xl pb-8">${products.price}</h6>
//             <div className="">
//               <button
//                 type="button"
//                 className="text-white bg-yellow-500 font-medium rounded-lg text-sm py-2.5 mt-auto mx-auto block w-80"
//                 onClick={addToCart}
//               >
//                 Add to Cart
//               </button>
//               {/* <span className="text-white ml-2">Cart Count: {cartCount}</span> */}
//             </div>
//           </div>
//         </div>
//       </div>
//       {isModalOpen && (
//         <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
//           <div className="fixed inset-0 bg-black bg-opacity-50"></div>
//           <div className="bg-white p-8 rounded-md z-10">
//             <p>Modal Content</p>
//             <p>{cartCount}</p>
//             <p> {products.price}</p>
//             <button
//               className="text-white bg-red-500 px-4 py-2 mt-4 rounded-md"
//               onClick={closeModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
// export default ProductDetails;

// add to cart only open modal
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import "./FontAwesome";

// const ProductDetails = () => {
//   const [products, setProducts] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const url = `https://fakestoreapi.com/products/${router.query.index}`;

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
//   console.log(products, "products");
//   const addToCart = () => {
//     setCartCount(cartCount + 1);
//   };
//   const openModal = () => {
//     setIsModalOpen(true);
//   };
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <div>
//         <FontAwesomeIcon
//           icon="shopping-cart"
//           className="text-blue-500"
//           onClick={openModal}
//         />
//         <span className=" ml-2">{cartCount}</span>
//       </div>
//       <div class="container px-5 py-24 mx-auto">
//         <div class="lg:w-4/5 mx-auto flex ">
//           <img
//             src={products.image}
//             class="lg:w-1/2 w-full h-96 object-center rounded border border-gray-200"
//           />

//           <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 bg-red-500 text-white">
//             <h5 class="text-4xl pb-8">{products.title}</h5>
//             {/* <h5>{products.category}</h5> */}
//             <div className="flex items-center mt-auto pb-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 className="w-4 h-4 text-yellow-500 "
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 2 L14.39 8.26 L21 9.27 L16.47 14.14 L18.94 21 L12 17.77 L5.06 21 L7.53 14.14 L3 9.27 L9.61 8.26 L12 2 M12 5 L10.83 10 L6 10.77 L9.24 14 L8.47 18 L12 15.77 L15.53 18 L14.76 14 L18 10.77 L13.17 10 L12 5 Z"></path>
//               </svg>
//               <h5 className="text-white-500 font-bold">
//                 {products.rating?.rate}
//               </h5>
//             </div>
//             <h5 class="leading-relaxed pb-4">{products.description}</h5>
//             <h6 class="text-xl pb-8">${products.price}</h6>
//             <div className="">
//               <button
//                 type="button"
//                 className="text-white bg-yellow-500 font-medium rounded-lg text-sm py-2.5 mt-auto mx-auto block w-80"
//                 onClick={addToCart}
//               >
//                 Add to Cart
//               </button>
//               {/* <span className="text-white ml-2">Cart Count: {cartCount}</span> */}
//             </div>
//           </div>
//         </div>
//       </div>
//       {isModalOpen && (
//         <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
//           <div className="fixed inset-0 bg-black bg-opacity-50"></div>
//           <div className="bg-white p-8 rounded-md z-10">
//             <p>Modal Content</p>
//             <button
//               className="text-white bg-red-500 px-4 py-2 mt-4 rounded-md"
//               onClick={closeModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
// export default ProductDetails;

// fin
// import { useRouter } from "next/router";
// import { useEffect, useState, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import "./FontAwesome";

// const ProductDetails = () => {
//   const [products, setProducts] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const router = useRouter();
//   const modalRef = useRef(null);

//   useEffect(() => {
//     const url = `https://fakestoreapi.com/products/${router.query.index}`;

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
//   }, [router.query.index]);
//   console.log(products, "products");

//   useEffect(() => {
//     // Load cart count from local storage on component mount
//     const storedCartCount = localStorage.getItem("cartCount");
//     if (storedCartCount) {
//       setCartCount(parseInt(storedCartCount, 10));
//     }
//   }, []);

//   const addToCart = () => {
//     const updatedCartCount = cartCount + quantity;
//     setCartCount(updatedCartCount);
//     setSelectedProduct(products);
//   };
//   const openModal = () => {
//     setIsModalOpen(true);
//   };
//   const closeModal = () => {
//     document.body.removeEventListener("click", handleOutsideClick);
//     setIsModalOpen(false);
//     setSelectedProduct(null);
//   };
//   const handleOutsideClick = (event) => {
//     if (modalRef.current && !modalRef.current.contains(event.target)) {
//       closeModal();
//     }
//   };
//   const handleQuantityChange = (e) => {
//     const newQuantity = parseInt(e.target.value, 10) || 1;
//     setQuantity(newQuantity);
//   };

//   const calculateTotalPrice = () => {
//     return selectedProduct ? selectedProduct.price * quantity : 0;
//   };

//   return (
//     <>
//       <div>
//         <FontAwesomeIcon
//           icon="shopping-cart"
//           className="text-blue-500"
//           onClick={openModal}
//         />
//         <span className=" ml-2">{cartCount}</span>
//       </div>
//       <div class="container px-5 py-24 mx-auto">
//         <div class="lg:w-4/5 mx-auto flex ">
//           <img
//             src={products.image}
//             class="lg:w-1/2 w-full h-96 object-center rounded border border-gray-200"
//           />

//           <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 bg-red-500 text-white">
//             <h5 class="text-4xl pb-8">{products.title}</h5>
//             {/* <h5>{products.category}</h5> */}
//             <div className="flex items-center mt-auto pb-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 className="w-4 h-4 text-yellow-500 "
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 2 L14.39 8.26 L21 9.27 L16.47 14.14 L18.94 21 L12 17.77 L5.06 21 L7.53 14.14 L3 9.27 L9.61 8.26 L12 2 M12 5 L10.83 10 L6 10.77 L9.24 14 L8.47 18 L12 15.77 L15.53 18 L14.76 14 L18 10.77 L13.17 10 L12 5 Z"></path>
//               </svg>
//               <h5 className="text-white-500 font-bold">
//                 {products.rating?.rate}
//               </h5>
//             </div>
//             <h5 class="leading-relaxed pb-4">{products.description}</h5>
//             <h6 class="text-xl pb-8">${products.price}</h6>
//             <div className="">
//               <button
//                 type="button"
//                 className="text-white bg-yellow-500 font-medium rounded-lg text-sm py-2.5 mt-auto mx-auto block w-80"
//                 onClick={addToCart}
//               >
//                 Add to Cart
//               </button>
//               {/* <span className="text-white ml-2">Cart Count: {cartCount}</span> */}
//             </div>
//           </div>
//         </div>
//       </div>
//       {isModalOpen && selectedProduct && (
//         <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50"
//             onClick={closeModal}
//           ></div>
//           <div className="bg-white p-8 rounded-md z-10 flex" ref={modalRef}>
//             <img
//               src={selectedProduct.image}
//               alt={selectedProduct.title}
//               className="w-20 h-24 object-center rounded border border-gray-200 mb-4"
//             />
//             <div>
//               <h3 className="text-2xl font-bold mb-2">
//                 {selectedProduct.title}
//               </h3>
//               <p className="text-xl font-bold mb-4">${selectedProduct.price}</p>

//               <label className="text-lg font-semibold mb-2">Quantity:</label>
//               <input
//                 type="number"
//                 value={quantity}
//                 onChange={handleQuantityChange}
//                 min="1"
//                 className="border border-gray-300 p-2 mb-4 w-16"
//               />
//               <p className="text-lg font-semibold mb-4">
//                 Total Price: ${calculateTotalPrice()}
//               </p>
//               <div className="">
//                 <button
//                   type="button"
//                   className="text-white bg-red-500 font-medium rounded-lg text-sm py-2.5 mt-auto mx-auto block w-40 "
//                   onClick={addToCart}
//                 >
//                   Checkout
//                 </button>
//                 {/* <span className="text-white ml-2">Cart Count: {cartCount}</span> */}
//               </div>
//             </div>
//             <div>
//               <button
//                 className="text-white bg-red-500 px-4 py-2 ml-8 rounded-md"
//                 onClick={closeModal}
//               >
//                 X
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
// export default ProductDetails;

// index.js
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const [products, setProducts] = useState([]);

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
//                 <Link href={`/product-detail-page/${product.id}`}>
//                   <button
//                     type="button"
//                     className="text-white bg-red-700 font-medium rounded-lg text-sm py-2.5 dark:bg-purple-600 mt-auto w-full"
//                   >
//                     View
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// utils2
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import "./FontAwesome";

// const ProductDetails = () => {
//   const [products, setProducts] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [quantity, setQuantity] = useState(0);
//   const router = useRouter();

//   useEffect(() => {
//     const url = `https://fakestoreapi.com/products/${router.query.index}`;

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
//   console.log(products, "products");

//   const addToCart = () => {
//     setCartCount(cartCount + 1);
//     setQuantity(quantity + 1);
//   };
//   const openModal = () => {
//     setIsModalOpen(true);
//   };
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };
//   const handleQuantityChange = (e) => {
//     setQuantity(parseInt(e.target.value, 10) || 0);
//   };
//   const calculateTotalPrice = () => {
//     return products ? products.price * quantity : 0;
//   };

//   return (
//     <>
//       <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
//         <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
//             <img
//               src="https://flowbite.com/docs/images/logo.svg"
//               class="h-8"
//               alt="Flowbite Logo"
//             />
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
//               <div>
//                 <FontAwesomeIcon
//                   icon="shopping-cart"
//                   className="text-blue-500"
//                   onClick={openModal}
//                 />
//                 <span className=" ml-2">{cartCount}</span>
//               </div>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div className="container px-5 py-24 mx-auto">
//         <div className="lg:w-4/5 mx-auto flex ">
//           <img
//             src={products.image}
//             className="lg:w-1/2 w-full h-96 object-center rounded border border-gray-200"
//           />

//           <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 bg-emerald-500">
//             <h5 className="text-4xl pb-6 font-bold">{products.title}</h5>
//             <h5 className="pb-4 font-semibold">{products.category}</h5>
//             <div className="flex items-center mt-auto pb-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 className="w-4 h-4 text-yellow-500 "
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 2 L14.39 8.26 L21 9.27 L16.47 14.14 L18.94 21 L12 17.77 L5.06 21 L7.53 14.14 L3 9.27 L9.61 8.26 L12 2 M12 5 L10.83 10 L6 10.77 L9.24 14 L8.47 18 L12 15.77 L15.53 18 L14.76 14 L18 10.77 L13.17 10 L12 5 Z"></path>
//               </svg>
//               <h5 className="text-white-500 font-bold">
//                 {products.rating?.rate}
//               </h5>
//             </div>
//             <h5 className="leading-relaxed pb-4">{products.description}</h5>
//             <h6 className="text-xl pb-8">${products.price}</h6>
//             <div className="">
//               <button
//                 type="button"
//                 className="text-white bg-red-500 font-medium rounded-lg text-sm py-2.5 mt-auto mx-auto block w-80"
//                 onClick={addToCart}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {isModalOpen && (
//         <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50"
//             onClick={closeModal}
//           ></div>
//           <div className="bg-white p-8 rounded-md z-10 ">
//             <div className="flex justify-between">
//               <h1 className="text-4xl font-bold mb-4">Your Cart</h1>
//               <div>
//                 <button
//                   className="text-white bg-red-500 px-4 py-2 ml-8 rounded-md"
//                   onClick={closeModal}
//                 >
//                   X
//                 </button>
//               </div>
//             </div>
//             <div className="flex">
//               {cartCount > 0 ? (
//                 <>
//                   <img
//                     src={products.image}
//                     alt={products.title}
//                     className="w-20 h-24 object-center rounded border border-gray-200 mb-4"
//                   />
//                   <div className="ml-4">
//                     {/* <div className="flex justify-between"> */}
//                     <h3 className="text-2xl font-bold mb-2">
//                       {products.title}
//                     </h3>
//                     {/* <FontAwesomeIcon icon="trash" /> */}
//                     {/* </div> */}
//                     <p className="text-xl font-bold mb-4">${products.price}</p>

//                     <label className="text-lg font-semibold mb-2">
//                       Quantity:
//                     </label>
//                     <input
//                       type="number"
//                       value={quantity}
//                       onChange={handleQuantityChange}
//                       className="border border-gray-300 p-2 mb-4 w-16"
//                     />
//                     <p className="text-lg font-semibold mb-4">
//                       Total Price: ${calculateTotalPrice()}
//                     </p>
//                     <div className="">
//                       <button
//                         type="button"
//                         className="text-white bg-red-500 font-medium rounded-lg text-sm py-2.5 mt-auto  block w-40 "
//                         onClick={addToCart}
//                       >
//                         Confirm Order
//                       </button>
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 <p>Your cart is empty</p>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
// export default ProductDetails;

// utils2.2
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./FontAwesome";
import ModalCart from "../ModalCart/ModalCart";
import Link from "next/link";
import Chg from "../OrderSummary/Chg";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const url = `https://fakestoreapi.com/products/${router.query.index}`;

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
  console.log(products, "products");

  const addToCart = () => {
    setCartCount(cartCount + 1);
    setQuantity(quantity + 1);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10) || 0);
  };
  const calculateTotalPrice = () => {
    return products ? products.price * quantity : 0;
  };

  return (
    <>
      <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div class="flex items-center space-x-3 rtl:space-x-reverse">
            <Link href="/">
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Ecommerce
              </span>
            </Link>
          </div>
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
              <div>
                {/* <Link href="/OrderSummary/Chg"> */}
                <FontAwesomeIcon
                  icon="shopping-cart"
                  className="text-blue-500"
                  onClick={openModal}
                />
                <span className=" ml-2">{cartCount}</span>
                {/* </Link> */}
              </div>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex ">
          <img
            src={products.image}
            className="lg:w-1/2 w-full h-96 object-center rounded border border-gray-200"
          />

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 bg-teal-500">
            <h5 className="text-4xl pb-6 font-bold">{products.title}</h5>
            <h5 className="pb-4 font-semibold">{products.category}</h5>
            <div className="flex items-center mt-auto pb-4">
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
                {products.rating?.rate}
              </h5>
            </div>
            <h5 className="leading-relaxed pb-4">{products.description}</h5>
            <h6 className="text-xl pb-8">${products.price}</h6>
            <div className="">
              <button
                type="button"
                className="text-white bg-red-500 font-medium rounded-lg text-sm py-2.5 mt-auto mx-auto block w-80"
                onClick={addToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>
          <ModalCart
            closeModal={closeModal}
            products={products}
            quantity={quantity}
            handleQuantityChange={handleQuantityChange}
            calculateTotalPrice={calculateTotalPrice}
          />
        </div>
      )}
      <Chg products={products} />
    </>
  );
};
export default ProductDetails;
