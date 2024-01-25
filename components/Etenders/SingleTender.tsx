"use client"
const SingleEtender = (props: {
    cpv_codes: string[]
    ca: string
    title: string
    estimated_value: string
    tenders_submission_deadline: string
    notice_pdf: string
    cft_files: string
}) => {
    const { cpv_codes, ca, title, estimated_value, tenders_submission_deadline, notice_pdf, cft_files } = props;
    const formatDate = (deadline: string) => {
        const date = new Date(deadline);
        const isoString = date.toISOString();
        const [year, month, day] = isoString.split('T')[0].split('-');
        return `${day}/${month}/${year}`;
    }
    return (
        <div className="w-full">
            <div
                className="wow fadeInUp shadow-three dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark relative z-10 rounded-sm bg-white px-8 py-4 hover:shadow-one"
                data-wow-delay=".1s"
            >
                <div className="flex mb-3">
                    {
                        cpv_codes.map((item, key) => {
                            if (key < 1) {
                                return (
                                    <div key={`cpv_code${key}`} className="w-[200px] mr-4 border-[1px] border-stroke dark:border-body-color bg-[#f8f8f8] dark:bg-[#2C303B] rounded-full text-center">{item}</div>
                                )
                            }
                        })
                    }
                </div>
                <div className="md:flex justify-between items-center border-b border-opacity-10 mb-3 pb-1 dark:border-white dark:border-opacity-10">
                    <h5 className=" text-body-color dark:text-white text-[24px] font-semibold ">Client: {ca}</h5>
                    <div className="sm:flex justify-between md:block">
                        <p className="">Value: € {estimated_value}</p>
                        <p className="">Deadline: € {formatDate(tenders_submission_deadline)}</p>
                    </div>
                </div>
                <p className=" border-body-color mb-2 text-base leading-relaxed text-body-color dark:text-body-color-dark dark:border-white dark:border-opacity-10">{title}</p>
                <div className="md:flex justify-center items-center border-b border-body-color border-opacity-10 pb-2 dark:border-white dark:border-opacity-10">
                    <button className="flex w-[200px] mx-auto mb-2 md:mx-2 items-center justify-center rounded-sm bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                        Notice Preview
                    </button>
                    <button className="flex w-[200px] mx-auto mb-2 md:mx-2 items-center justify-center rounded-sm bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                        Documents<i className='bx bxs-download'></i>
                    </button>
                </div>
                <div className="absolute bottom-0 right-0 z-[-1]">
                    <svg
                        width="179"
                        height="158"
                        viewBox="0 0 179 158"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            opacity="0.5"
                            d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
                            fill="url(#paint0_linear_70:153)"
                        />
                        <path
                            opacity="0.3"
                            d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
                            fill="url(#paint1_linear_70:153)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_70:153"
                                x1="69.6694"
                                y1="29.9033"
                                x2="196.108"
                                y2="83.2919"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_70:153"
                                x1="165.348"
                                y1="-75.4466"
                                x2="-3.75136"
                                y2="103.645"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default SingleEtender;