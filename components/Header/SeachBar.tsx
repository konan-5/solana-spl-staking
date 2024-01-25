"use client"
import { useState } from "react";

const SearchBar = () => {
    const [keyword, setKeyword] = useState('');
    return (
        <div className="relative z-10">
            <div className="flex justify-center items-center relative overflow-hidden p-[10px] bg-white rounded-md">
                <input
                    className="w-full lg:w-[500px] px-4 text-lg font-bold text-navy bg-white focus:outline-0"
                    placeholder="Search Tenders..."
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <div className="w-[35px] h-[35px] flex justify-center items-center bg-[#4382CA] hover:bg-[#3069aa] rounded-md">
                    <i className='bx bx-search text-xl'></i>
                </div>
            </div>
            {
                keyword &&
                <div className="absolute w-full bg-white rounded-md h-[200px] border-t-[1px] ">

                </div>
            }
        </div>
    )

}
export default SearchBar;