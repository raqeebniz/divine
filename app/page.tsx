import { Header } from "./components/header/page";
import groq from 'groq';
import { client } from "@/sanity/lib/client";
import { Hero, Navbar, Product, Footer } from "./components";

 
export default async function Home() {
  const products = await client.fetch(groq `*[_type=="product"]`)
  // console.log(products)

  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <Product />
      <Footer />
    </div>
  )
}

// /*
// /*{ <header className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white">
//   <div className="container mx-auto flex justify-between items-center">
//     { Brand Logo/Name }
//     <h1 className="text-2xl font-bold tracking-wide">Divine Fragrance</h1>

//     {/* Contact Info */}
//     <div className="text-sm">
//       <p className="mb-1">
//         <span className="font-semibold">Customer Support:</span> 0317-3508220
//       </p>
//       <p>
//         <span className="font-semibold">Email:</span> support@divinefragrance.com
//       </p>
//     </div>
//   </div>

//   {/* Navigation */}
//   <nav className="bg-gray-900 p-2 mt-2 rounded-full">
//     <div className="container mx-auto flex justify-between items-center">
//       <ul className="flex space-x-6 text-white">
//         <li><a href="#" className="hover:text-gray-300">Home</a></li>
//         <li><a href="#" className="hover:text-gray-300">Product</a></li>
//         <li><a href="#" className="hover:text-gray-300">Catalog</a></li>
//         <li><a href="#" className="hover:text-gray-300">About Us</a></li>
//       </ul>
//       <div className="flex space-x-4">
//         {/* Search Icon */}
//         <button>
//           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 18l6-6m0 0l-6-6m6 6H3"></path>
//           </svg>
//         </button>
//         {/* User Icon */}
//         <button>
//           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11C16 7.686 13.314 5 10 5S4 7.686 4 11a4 4 0 008 0zm1 5c1.104 0 2.285.286 3 .8 1 .8 1 2 1 2H3s0-1.2 1-2c.715-.514 1.896-.8 3-.8h10z"></path>
//           </svg>
//         </button>
//         {/* Cart Icon */}
//         <button>
//           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.344 3.54a3.5 3.5 0 01-.71 6.36l-.03.005L9.34 21h5.32l6.736-8H7.703"></path>
//           </svg>
//         </button>
//       </div>
//     </div>
//   </nav>
// </header> 
