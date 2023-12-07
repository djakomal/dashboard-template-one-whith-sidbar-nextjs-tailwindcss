import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoCard } from "react-icons/io5"
import { TbDeviceAnalytics } from "react-icons/tb"
import { RxDashboard, RxSketchLogo } from 'react-icons/rx'
import { LuFileVolume } from "react-icons/lu";
import { IoMdHelpCircle } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { PiFlagPennantFill } from "react-icons/pi";
const Sidebar = ({ children }) => {

    return <div className='flex'>


      <div className="fixed w-6S0 h-screen p-4 bg-white  border-r-[1px] flex flex-col justify-between">
        <div className=' flex flex-col items-center '>
                    <Link href=''>
                        <div className='bg-gray-300 text-white p-3 rounded-lg inline-block'>
                            <RxSketchLogo size={20} />
                        </div>
                    </Link>
            </div>
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center h-8">
              <div className='text-sm font-light tracking-wide text-gray-300 '>
                        <p>MAIN MENU</p>
                    </div>
              </div>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-blue-600 hover:text-blue-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-blue-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                    <RxDashboard size={20} />
                </span>
                <span className="text-sm font-light tracking-wide text-gray-400  ">Overview</span>
              </a>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-blue-600 hover:text-blue-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-blue-800 pr-6">
                <span className="inline-flex justify-center items-center  ml-4">
                            <IoCard size={20}  />
                </span>
                <span className="text-sm font-light tracking-wide text-gray-400 ">Wallet</span>
                
              </a>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-blue-600 hover:text-blue-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-blue-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                    <TbDeviceAnalytics size={20} />
                </span>
                <span className="text-sm font-light tracking-wide text-gray-400 ">Analytics</span>
              </a>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-blue-600 hover:text-blue-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-blue-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                        <LuFileVolume size={20} />
                </span>
                <span className="text-sm font-light tracking-wide text-gray-400 ">Log Activity</span>
              
              </a>
            </li>
            <span className='border-b-[2px] border-gray-100 w-full p-12 space-x-5'></span>
            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center mt-5 h-8">
                <div className="text-sm font-light tracking-wide text-gray-400 ">PREFERENCE</div>
              </div>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-blue-600 hover:text-blue-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-blue-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                    <IoMdHelpCircle size={20}/>
                </span>
                <span className="text-sm font-light tracking-wide text-gray-400 ">Help</span>
              </a>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-blue-600 hover:text-blue-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-blue-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                    <IoIosSettings size={20} />
                </span>
                <span className="text-sm font-light tracking-wide text-gray-400 ">Settings</span>
              </a>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-blue-600 hover:text-blue-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-blue-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                    <PiFlagPennantFill size={20} />
                </span>
                <span className="text-sm font-light tracking-wide text-gray-400 ">Report</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
        <main className='ml-20  w-full'>{children}</main>
    </div>
}
export default Sidebar