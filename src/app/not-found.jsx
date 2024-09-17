import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='mt-40 font-bold flex flex-col italic text-[#AD343E] text-center m-auto w-full text-7xl'>
           <p>404 Page not found </p>
           <Link className='underline mt-10 text-4xl' href={"/"}>Back Home</Link>
        </div>
    );
}

export default NotFound;
