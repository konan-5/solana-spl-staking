import React, { useState } from 'react';
import Image from "next/image";
import { countries } from './countryData';

const FlagSelector: React.FC = () => {
    const [langMenu, setLangMenu] = useState<boolean>(false);
    const [country, setCountry] = useState<string>('ireland')

    return (
        <div className='relative'>
            <button className='flex items-center ' onClick={() => setLangMenu((prev) => !prev)}>
                <Image
                    src={`/images/flag/${country}.png`}
                    alt="logo"
                    width={48}
                    height={30}
                    className="block"
                />
            </button>
            <div className={`absolute w-[100px] -right-1/2 top-[40px] bg-black  dark:bg-white/20 dark:hover:bg-white/5 transition-all duration-300 ${langMenu ? "opacity-1" : "hidden opacity-0"}`}>
                {
                    countries.map((lng, key) => (
                        <button onClick={() => { setCountry(countries[key]); setLangMenu(false) }}
                            className='flex py-2 items-center w-full px-5 hover:bg-white/40 dark:hover:bg-white/5' key={key}>
                            <Image
                                src={`/images/flag/${lng}.png`}
                                alt="Flag"
                                width={40}
                                height={20}
                                className="mx-auto block"
                            />
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default FlagSelector;
