import Image from "next/image";
import Link from "next/link";
import SingleWidget from "./SingleWidget";
import SearchBar from "../Header/SeachBar";

const widget = {
  is_private: false,
  newTenders: 23,
  totalTenders: 4153,
}
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 dark:bg-black overflow-hidden pb-[40px] pt-[120px] md:pb-[60px] md:pt-[140px] xl:pb-[80px] xl:pt-[180px] 2xl:pb-[100px] 2xl:pt-[180px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <div className="hidden lg:block">
                  <h1 className={`mb-5 text-3xl font-bold leading-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-[linear-gradient(270deg,#5200ff_18.29%,#58adfe_47.4%,#7978ff_116.45%)]`}>
                    Automated Tendering
                  </h1>
                  <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl text-black dark:text-white font-medium">Streamline Your Success</h2>
                  <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                    Tendr is your innovative tool for navigating the complex world of tender submissions. Tailored for contractors and suppliers, our web app simplifies your journey from opportunity discovery to bid submission.
                  </p>
                </div>
                <div className="mb-5 lg:hidden">
                  <div className="mb-5 w-full">
                    <SearchBar />
                  </div>
                  <SingleWidget widget={widget} />
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="#waitlist"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Join WaitList
                  </Link>
                  <Link
                    href="#"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Launch App
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-[100px] overflow-hidden w-full lg:w-1/2 h-full lg:h-[70%] z-[-1]">
          <div className="absolute w-2/3 h-full z-10 -left-1/3 top-1/3 hidden lg:block">
            <div className="absolute w-full h-1/2 -top-[50%] dark:bg-navy bg-white -rotate-45">
            </div>
            <div className="absolute w-full h-1/2 bottom-[40%] dark:bg-navy bg-white rotate-[60deg]">
            </div>
          </div>
          <div className="absolute w-full h-full  opacity-30 lg:opacity-80">
            <Image className="object-cover" src={`/images/hero/background.png`} alt="" fill />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
