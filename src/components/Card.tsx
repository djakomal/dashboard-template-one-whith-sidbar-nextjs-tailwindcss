import React from "react"
const Card =()=>{
    return(
            <div className="grid lg:grid-cols-5 gap-2 px-12 pt-12 min-w-screen">
                <div className="log:col-span-2 col-span-1 bg-white flex justify-between border p-4 rounded-lg">
                    <div className="flex flex-col w-full pd-4">
                        <p className="text-xl font-bold">
                                +$13.910</p>
                        <p className="text-gray-200">inconnu
                        </p>
                    </div>
                    <p className="bg-green-200 col-span-1 bg-white flex justify flex items-center p-é rounded-lg">
                    <span className="text-green-700 text-lg">+24%</span>
                    </p>
                  
                </div>

                <div className="log:col-span-2 col-span-1 bg-white flex justify-between border p-4 rounded-lg">
                    <div className="flex flex-col w-full pd-4">
                          <div className="flex justify-between items-center ">
                        
                          </div>
                        <p className="text-xl font-bold">
                                $7.846</p>
                        <p className="text-gray-200">Dally Renenue
                        </p>
                    </div>
                    <p className="bg-green-200 col-span-2 bg-white flex justify flex items-center p-2 rounded-lg">
                        <span className="text-green-700 text-lg">+18</span>
                    </p>
                    
                </div>

            {/* <div className="col-span-12 sm:col-span-4">
                <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-1xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14  absolute bottom-4 right-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </svg>
                  
                    <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">20</div>
                    <div className="text-sm text-gray-500">Components</div>
                </div>
            </div> */}
            </div>
    )
    
    
}
export default Card