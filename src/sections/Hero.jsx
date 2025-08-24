export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-40">
      <div className="absolute -top-36 -right-16 h-[872px] w-[766px] -z-10">
        <img src="./assets/images/elemen_hero_section_1.png" alt="" />
      </div>
      <div className="flex items-center mt-24 ">
        <div className="">
          <p className="uppercase font-poppins font-bold text-xl text-[#DF6951]">Best Destinations around the world</p>
          <div className="mt-6 relative">
            <img src="./assets/images/decore_2.png" alt="decore" className="absolute top-16 -right-12 h-3 -z-10" />
            <h1 className="font-volkhov text-[84px] font-bold leading-[89px] tracking-tighter text-[#181E4B] z-10">Travel, enjoy and live a new and full life</h1>
          </div>

          <p className="font-poppins font-medium text-base mt-8 leading-8 max-w-[477px]">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
          <div className="flex items-center  mt-9">
            <button className="text-lg font-medium text-white bg-[#F1A501]  rounded-[10px] px-6 py-4 shadow-2xl/50 shadow-[#F1A501]">Find out more</button>
            <div className="ml-11  flex items-center gap-5 ">
              <button className="rounded-full bg-[#DF6951] size-[58px] flex items-center justify-center shadow-2xl/80 shadow-[#DF6951]">
                <img src="./assets/icons/polygon.png" alt="icon polygon" className="size-[15px]" />
              </button>
              <p className="font-medium font-poppins text-lg text-[#686D77]">Play Demo</p>
            </div>
          </div>
        </div>
        <div className=" mt-8">
          <img src="./assets/images/main_image.png" alt="main" className="" />
        </div>
      </div>
    </section>
  );
}
