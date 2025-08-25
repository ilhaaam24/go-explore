import { useEffect, useState } from "react";

import { motion } from "framer-motion";
export default function Hero() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: window.top,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative pb-30  md:py-20 lg:min-h-screen overflow-hidden px-4 md:px-8 lg:px-40 ">
      <div className="absolute -top-36 -right-16 h-[500px] w-[500px] md:h-[720px] md:w-[600px] lg:h-[872px] lg:w-[766px] -z-10">
        <img src="./assets/images/elemen_hero_section_1.png" alt="" />
      </div>
      <div className=" flex flex-col-reverse gap-8 md:gap-0 md:flex-row items-center mt-24 ">
        <div className="">
          <motion.p initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, speed: 1, ease: "anticipate" }} className="uppercase font-poppins font-bold text-base md:text-lg lg:text-xl text-[#DF6951]">
            Best Destinations around the world
          </motion.p>
          <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5, speed: 2, ease: "circInOut" }} className="mt-6 relative">
            <img src="./assets/images/decore_2.png" alt="decore" className="absolute top-9 right-18 -rotate-2 md:top-12 lg:top-16 lg:rotate-0 lg:-right-12 h-2 w-[80%] lg:h-3 lg:w-auto -z-10" />
            <h1 className="font-volkhov text-4xl  md:text-5xl lg:text-[84px] font-bold leading-12  md:leading-16 lg:leading-[89px] tracking-tighter text-[#181E4B] z-10">Travel, enjoy and live a new and full life</h1>
          </motion.div>

          <p className="font-poppins font-medium text-base md:mt-4 lg:mt-8 leading-6 md:leading-7 lg:leading-8 max-w-[477px]">
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
          </p>
          <div className="flex items-center  mt-9">
            <button className=" text-base md:text-lg font-medium text-white bg-[#F1A501]  rounded-[10px] px-4 py-4 md:px-6 md:py-4 shadow-2xl/50 shadow-[#F1A501] cursor-pointer">Find out more</button>
            <div className="ml-11  flex items-center gap-5 ">
              <button className="rounded-full bg-[#DF6951] size-[48px] md:size-[58px] flex items-center justify-center shadow-2xl/80 shadow-[#DF6951] cursor-pointer">
                <img src="./assets/icons/polygon.png" alt="icon polygon" className="size-[15px]" />
              </button>
              <p className="font-medium font-poppins text-lg text-[#686D77]">Play Demo</p>
            </div>
          </div>
        </div>
        {/* Gambar utama */}
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="mt-6 md:mt-8 w-[380px] md:w-[700px] lg:w-auto ">
          <img src="./assets/images/main_image.png" alt="main" className="w-full" />
        </motion.div>
      </div>
      {/* Scroll to top button */}
      <div
        className={`size-12 bg-[#181E4B] rounded-full fixed bottom-5 right-5 z-50 cursor-pointer flex items-center justify-center transition-opacity duration-500 ${active ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={handleClick}>
        <img src="./assets/icons/arrow_up.png" alt="arrow" className="size-6" />
      </div>
    </section>
  );
}
