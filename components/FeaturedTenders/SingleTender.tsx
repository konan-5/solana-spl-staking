import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTender = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>,
    );
  }

  return (
    <div className="w-full">
      <div
        className="wow fadeInUp shadow-two dark:shadow-three dark:hover:shadow-gray-dark rounded-sm bg-white p-6 duration-300 hover:shadow-one dark:bg-dark lg:px-3 xl:px-4 "
        data-wow-delay=".1s"
      >
        <div className="border-b border-opacity-10 pb-1 mb-3 text-body-color dark:border-white dark:border-opacity-10 dark:text-white text-[20px] font-semibold ">Construction Work</div>
        <p className=" border-body-color  text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10">
          “MORMQS Ltd T/A MacMinn O' Reilly Mahon</p>
        <div className="flex items-center">
          <div className="w-full">
            <h3 className="my-3 text-center text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-xl">
              {name}
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-sm text-body-color">Deadline: 24/1/2024</p>
              <p className="text-sm text-body-color">€ {new Intl.NumberFormat('en-US').format(parseFloat(`81000000`))}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTender;
