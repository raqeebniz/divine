import React from 'react';
import Res from '../responsive/page';

export const Header = () => {
  return (
    <div className='bg-slate-100 text-black text-sm py-6'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center px-4'>
        
        {/* Mobile: Res component on the top, for larger screens on the right */}
      

        {/* Company Name */}
        <div className='font-bold text-xl text-center md:text-left'>
          <p>Divine Fragrance</p>
        </div>
        
        {/* Contact Information (Hidden on mobile, visible on larger screens) */}
        <div className='hidden md:flex gap-6 text-lg font-bold'>
          <p>Customer Support:0317-3508220</p>
          <p>Email: support@divinefragrance.com</p>
        </div>
      </div>

      {/* Mobile Contact Information (Visible on mobile only) */}
      <div className='flex md:hidden flex-col items-center mt-4 text-center'>
        <p>Customer Support:0317-3508220</p>
        <p>Email: support@divinefragrance.com</p>
      </div>
    </div>
  );
};
