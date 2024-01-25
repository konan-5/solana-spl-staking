"use client";
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleEtender from "./SingleTender";
import { etenders } from "./mockData";
import Pagination from '@mui/material/Pagination';
import axios from "axios";

const Etenders = () => {

    const itemsPerPage = 10;
    const [page, setPage] = useState(1);
    const count = Math.ceil(etenders.length / itemsPerPage);

    const handleChange = (event, value) => {
        setPage(value);
    };
    const currentPageData = etenders.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const cpv: string = queryParams.get('cpv') !== null ? queryParams.get('cpv')! : "";
        if(cpv == 'latest') {
            axios.get(
                `http://3.253.3.32:9002/api/landing/latest/`
            ).then((response) => {console.log(response)})
            .catch((err) => {console.log(err)})
        }else {
            axios.post(
                `http://3.253.3.32:9002/api/landing/search/`,
                {cpv: cpv},
            ).then((resp) => {
                console.log(resp)
            }).catch((err) => {
                console.log(err)
            })
        }
    }, [])

    return (
        <section id="etenders" className="relative z-10 py-16 md:py-20 lg:py-28 pb-[40px] mt-[80px] md:pb-[60px] md:mt-[140px] xl:pb-[80px] xl:mt-[120px] 2xl:pb-[100px] 2xl:mt-[140px] bg-gray-light dark:bg-black-dark">
            <div className="container">
                <SectionTitle
                    title="Calls for tenders"
                    paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
                    center
                    width="665px"
                />
                <h5 className="text-body-color dark:text-white text-[20px] font-semibold mb-3"><strong>{etenders.length}</strong> tenders found</h5>
                <div className="grid grid-cols-1 gap-x-8 gap-y-5 ">
                    {
                        currentPageData.map((item, key) => (
                            <SingleEtender
                                {...item}
                                key={`etender${key}`} />
                        ))
                    }
                </div>
                <Pagination
                    count={count}
                    page={page}
                    size="small"
                    sx={{
                        mt: 2,
                        display:'flex',
                        justifyContent: 'flex-end'
                    }}
                    onChange={handleChange}
                />
            </div>
            <div className="absolute bottom-0 left-0 z-[-1]">
                <svg
                    width="239"
                    height="601"
                    viewBox="0 0 239 601"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        opacity="0.3"
                        x="-184.451"
                        y="600.973"
                        width="196"
                        height="541.607"
                        rx="2"
                        transform="rotate(-128.7 -184.451 600.973)"
                        fill="url(#paint0_linear_93:235)"
                    />
                    <rect
                        opacity="0.3"
                        x="-188.201"
                        y="385.272"
                        width="59.7544"
                        height="541.607"
                        rx="2"
                        transform="rotate(-128.7 -188.201 385.272)"
                        fill="url(#paint1_linear_93:235)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_93:235"
                            x1="-90.1184"
                            y1="420.414"
                            x2="-90.1184"
                            y2="1131.65"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#4A6CF7" />
                            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_93:235"
                            x1="-159.441"
                            y1="204.714"
                            x2="-159.441"
                            y2="915.952"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#4A6CF7" />
                            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default Etenders;