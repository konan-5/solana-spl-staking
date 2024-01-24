import React, { useState } from 'react';
import Image from "next/image";
import { countries } from './countryData';

const FlagSelector: React.FC = () => {
    const [langMenu, setLangMenu] = useState<boolean>(false);
    const [country, setCountry] = useState<string>('ireland')

    return (
        <div className='relative'>
            <button className='' onClick={() => setLangMenu((prev) => !prev)}>
                <Image
                    src={`/images/flag/${country}.png`}
                    alt="logo"
                    width={48}
                    height={30}
                    className="mt-[6px] block"
                />
            </button>
            <div className={`absolute w-[100px] -right-1/2 top-[60px] bg-black hover:bg-black/90 dark:bg-white/20 dark:hover:bg-white/5 ${langMenu ? "" : "hidden"}`}>
                {
                    countries.map((lng, key) => (
                        <button onClick={() => {setCountry(countries[key]); setLangMenu(false)}} className='w-full px-5' key={key}>
                            <Image
                                src={`/images/flag/${lng}.png`}
                                alt="Flag"
                                width={40}
                                height={20}
                                className="mt-[6px] mx-auto block"
                            />
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default FlagSelector;
