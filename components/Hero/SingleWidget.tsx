import Image from "next/image";
import Link from "next/link";

type Blog = {
  is_private: boolean;
  newTenders: number;
  totalTenders: number;
};

const SingleWidget = ({ widget }: { widget: Blog }) => {
  const { is_private, newTenders, totalTenders } = widget;

  return (
    <>
      <div
        className="wow fadeInUp max-w-[360px] mx-auto hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-white/20"
        data-wow-delay=".1s"
      >
        {/* <Link
          href="/etenders"
          className="relative block aspect-[37/22] w-full"
        >
          <Image style={{ objectFit: 'cover' }} src={`/images/hero/widget-${is_private ? 'private' : 'public'}.jpg`} alt="image" fill />
        </Link> */}
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <Link
            href="/etenders?cpv=latest"
            className="">
            <span className="right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
              View Latest Tenders
            </span>
          </Link>
          <h3 className="my-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl">
            {is_private ? 'Private' : 'Public'} Tenders
          </h3>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image style={{ objectFit: 'cover' }} src={`/images/hero/widget-public.jpg`} alt="author" fill />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                  {newTenders}
                </h4>
                <p className="text-xs text-body-color-dark">NEW in last 24 hours</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                {totalTenders}
              </h4>
              <p className="text-xs text-body-color-dark">Listed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleWidget;
