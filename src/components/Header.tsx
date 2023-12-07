import React from 'react'
import { FaBell } from "react-icons/fa";
import Card from '@/components/Card';
const Header = () => {
    return (
        <div className='fixed inset-Y-5 left-40 w-40 w-screen px-12  shadow-xl h-20 bg-white  ml-5  border-r-[1px] flex flex-col justify-between mr-4 pt-4 maxèAuto' >
            {/* <div className=' dixzde inset-Y-4   left-30 pl-6 '>
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-4 left-6 flex items-center pb-2">
                    <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                </span> */}
               
            {/* </div> */}

             <div className="flex justify-between   items-center h-11 bg-white-600  header-right">
                <div className="bg-white rounded flex items-center w-full max-w-sm ml-1 p-0    shadow-xl  border-gray-400">
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-5 pr-7 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-600 focus:ring-1 sm:text-sm" placeholder="Search" type="text" name="search" />
                    <span className='outline-none focus:outline-none'></span>
                </div>
                {/* <div> */}
                {/* <a href="#" className="flex items-center mr-5 hover:text-blue-100">
                        <span className="inline-flex mr-8">
                            <li className="flex items-center flex-col">
                               
                                    <h5 className="font-semibold">Dianna</h5>
                            </li>
                        </span>
                    </a> */}
                {/* </div> */}
                < div className="relative flex flex-row  h-12 focus:outline-none  border-2-3 border-transparent  pr-12 mr-10">
                <div className="inline-flex justify-center items-center mr-12">
                    <span className='mr-4'><FaBell size={20}/></span>
                    <img src="https://randomuser.me/api/portraits/women/28.jpg" alt="" className="rounded-full  mr-10 w-10 h-10 object-cover"/>
                    <div  className=''>
                        <p className="text-sm font-light tracking-wide text-gray-400 space-X-12">Dianna
                        </p> <br/>
                        <p className='text-gray-300 '>Manger</p>
                    </div>
                </div>
                
                
              </div>
            </div>
            <Card />

            <div>
            </div>
        </div>

    )
}
export default Header