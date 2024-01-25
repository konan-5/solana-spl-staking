"use client"
import { useState, useEffect } from "react";
import { categories } from "./categoryData";
import Link from "next/link";

const SearchBar = () => {
    const [keyword, setKeyword] = useState('');
    const [filteredCategories, setFilteredCategories] = useState([]);
    const sortedCategory = categories.slice().sort((a, b) => { return a.substring(9).localeCompare(b.substring(9)) });
    useEffect(() => {
        if (keyword) {
            const filteredCategories = sortedCategory.filter(category =>
                category.toLowerCase().includes(keyword.toLowerCase())
            );
            setFilteredCategories(filteredCategories.slice(0, 10));
        }
    }, [keyword])
    return (
        <div className="relative z-10">
            <div className="flex justify-center items-center relative overflow-hidden p-[10px] bg-gray-light dark:bg-black-dark rounded-md">
                <input
                    className="w-full lg:w-[500px] px-4 text-lg font-bold text-body-color dark:text-body-color-dark bg-gray-light dark:bg-black-dark focus:outline-0"
                    placeholder="Search Tenders..."
                    onChange={(e) => setKeyword(e.target.value)}
                    // onBlur={() => setKeyword('')}
                    value={keyword}
                />
                <div className="absolute right-[10px] w-[35px] h-[35px] flex justify-center items-center bg-primary rounded-md">
                    <i className={`bx search text-xl text-white bx-${keyword ? 'x' : 'search'}`}></i>
                </div>
            </div>
            {

                keyword &&
                <div className="absolute w-full bg-gray-light dark:bg-black-dark rounded-md">
                    {
                        filteredCategories.map((item, key) => {
                            return (
                                <Link href={`/etenders?cpv=${item}`} key={`asdf${key}`}>
                                    <button className="px-4 py-1 border-t-[1px] font-semibold dark:border-body-color hover:bg-white dark:hover:bg-body-color text-body-color dark:text-body-color-dark whitespace-nowrap overflow-hidden text-ellipsis w-full text-left">
                                        {item.substring(9)}
                                    </button>
                                </Link>
                            )
                        })
                    }
                </div>
            }
        </div>
    )

}
export default SearchBar;