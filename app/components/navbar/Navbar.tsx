'use client';
import React, { useContext, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { TfiUser } from "react-icons/tfi";
import { HiMenu, HiX } from 'react-icons/hi';
import { Cart } from '..';
import { CartContext } from '@/app/context/CartContext';
import { SiShopify } from "react-icons/si";
import Link from 'next/link';


export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartCount = 1; // Example cart count, you can replace it with dynamic value

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const {totalQuantity, showCart, setShowCart}:any = useContext(CartContext);

  const handleClick = ( ) => {
    setShowCart(!showCart)
  }

  return (
    <>
    <div className='bg-slate-100 text-gray-700 py-4 '>
      <div className='container mx-auto flex justify-between items-center px-4'>
        
        {/* Left side: Menu, Search, and User icons */}
        <div className='flex items-center text-2xl gap-10'>
          {/* Mobile Menu Button (Hamburger Icon) */}
          <div className='lg:hidden'>
            {isMobileMenuOpen ? (
              <HiX onClick={toggleMobileMenu} className='text-2xl cursor-pointer' />
            ) : (
              <HiMenu onClick={toggleMobileMenu} className='text-2xl cursor-pointer' />
            )}
          </div>

          {/* Search Icon */} 
          <button>
            <Link href='/'>
          <SiShopify className='text-gray-700 hover:text-black transition-colors duration-300 cursor-pointer' />
          </Link>
          </button>
          {/* User Icon */}
          <TfiUser className='text-gray-700 hover:text-black transition-colors duration-300 cursor-pointer'/>
        </div>
        
        {/* Center: Navigation (Visible always, no movement on mobile) */}
        {/* <div className='hidden lg:flex  gap-32 text-gray-300'>
          <ul className='hover:text-white cursor-pointer transition-colors duration-300'>Home</ul>
          <ul className='hover:text-white cursor-pointer transition-colors duration-300'>Product</ul>
          <ul className='hover:text-white cursor-pointer transition-colors duration-300'>Catalog</ul>
          <ul className='hover:text-white cursor-pointer transition-colors duration-300'>About Us</ul>
        </div> */}

        {/* Right side: Cart Icon with Counter */}
        <div className='relative'>
          <button className="cart-icon" onClick={handleClick}>
          <TiShoppingCart className='text-gray-700 hover:text-black transition-colors duration-300 cursor-pointer text-2xl' />
            <span className='absolute -mt-2 top-0 right-0 left-3 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full'>
              {totalQuantity}
            </span>
            
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className='lg:hidden flex flex-col gap-4 text-center text-gray-300 py-4 bg-gray-700 rounded-md'>
          <ul className='hover:text-white cursor-pointer transition-colors duration-300 py-2 border-b border-gray-600'>Home</ul>
          <ul className='hover:text-white cursor-pointer transition-colors duration-300 py-2 border-b border-gray-600'>Product</ul>
          <ul className='hover:text-white cursor-pointer transition-colors duration-300 py-2 border-b border-gray-600'>Catalog</ul>
          <ul className='hover:text-white cursor-pointer transition-colors duration-300 py-2'>About Us</ul>
        </div>
      )}
    </div>
    {showCart && <Cart />}
    
    </>
  );
};
