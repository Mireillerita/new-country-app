import React from 'react';

const NavBar = () => {
  return (
    <div>
      <div className='flex justify-between px-4 md:px-24 py-4 md:py-10'> 
        <div className='flex flex-row items-center'>
          <img src='./src/images/logoipsum-296 (4).svg' alt='Logo' className='w-8 h-auto md:w-auto' /> 
          <h1 className='text-blue-500 text-[35px] font-extrabold md:text-2xl ml-2 md:ml-0 hidden md:block'>Logoipsum</h1>
        </div>
        <div className='text-white text-[17px] md:text-base flex gap-4 md:gap-12'> 
          <div className='md:flex hidden'>
            <ul className='flex list-none'>
              <li><a href=''>Countries</a></li>
              {/* <li><a href=''>Continents</a></li>
              <li><a href=''>Regions</a></li> */}
            </ul>
          </div>
          <div className='md:hidden'> 
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;