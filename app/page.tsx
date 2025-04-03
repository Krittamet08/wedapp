/*import Image from 'next/image'

export default function MyApp() {
  return (<div className="w-[80%] border rounded p-4 m-auto">
    <h1 className="text-2xl font-bold m-2 p-2">Hello world!!</h1>

    <Image
      className='p-2 m-4'
      src="https://computing.psu.ac.th/th/wp-content/uploads/2023/09/PSU-CoC-ENG_01_x49.png"
      width={150}
      height={150}
      alt="PSU Logo"
    />

    <Image
      className="p-2 m-4"
      src="/next.svg"
      width={150}
      height={150}
      alt="Next.js Logo"
    />

    <div className="w-64 p-2 border mb-2 rounded bg-blue-200">
      Lorem idivsum, dolor sit amet consectetur adidivisicing elit. Doloribus, consequuntur.
    </div>
    <div className="w-64 p-2 border mb-2 rounded bg-blue-600 text-white">
      Lorem idivsum, dolor sit amet consectetur adidivisicing elit. Doloribus, consequuntur.
    </div>
    <div className="w-64 p-2 border rounded bg-amber-300">
      Lorem idivsum, dolor sit amet consectetur adipisicing elit. Doloribus, consequuntur.
    </div>
  </div>)
}*/


/*(Home work 3/4/68)*/
import React from "react";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-wight-200">
      <div className="relative w-[350px] h-[150px] bg-green-500 text-white text-center">
        
        <h1 className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 bg-cyan-100 text-black px-3 py-1 text-lg border border-black">
          Banner
        </h1>

        <button className="absolute top-0 right-0 bg-gray-200 text-black px-1 border border-black text-xs rounded-sm">
          x
        </button>

        <div className="absolute left-[-30px] top-[30%] w-[60px] h-[60px] bg-white rounded-full"></div>

        <div className="absolute right-[-25px] bottom-[-25px] w-[90px] h-[55px] bg-white rounded-t-[40px] rounded-l-[30px]"></div>

        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 py-2 text-lg border border-dotted border-white">
          This is css position
        </span>
      </div>
    </div>
  );
}
