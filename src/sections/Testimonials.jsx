export default function Testimonials() {
  return (
    <div className="lg:min-h-screen pb-30  md:py-20  flex flex-col  md:flex-row lg:flex-row  justify-between items-center relative px-4  md:px-8 lg:px-40   ">
      <div>
        <p className="font-poppins font-semibold text-lg text-[#5E6282] uppercase">Testimonials</p>
        <h2 className="font-volkhov text-3xl  lg:max-w-[511px] md:text-4xl lg:text-[50px] font-bold text-[#181E4B] mt-2">What people say about Us.</h2>
        <div className="mt-[82px] flex gap-[26px]">
          <div className="size-3 rounded-full bg-[#181E4B]"></div>
          <div className="size-3 rounded-full bg-[#5E6282]"></div>
          <div className="size-3 rounded-full bg-[#5E6282]"></div>
        </div>
      </div>
      <div className="flex items-center ">
        <div className="relative">
          <div className="absolute -z-10  -bottom-24 -right-12 w-[300px] h-[150px] md:w-[504px] md:h-[245px] bg-white rounded-[10px] shadow-2xl/5 px-4 py-6 md:px-8  md:py-7">
            <p className="font-poppins text-sm md:text-base font-medium leading-4 md:leading-8 text-[#5E6282]">
              “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
            </p>
            <p className="mt-2 md:mt-[34px] font-poppins font-semibold text-sm md:text-lg text-[#5E6282] ">Mike taylor</p>
            <p className="md:mt-1 font-poppins font-mediut text-sm text-[#5E6282]  ">Mike taylor</p>
          </div>
          <div className="relative z-20  w-[300px] h-[150px] md:w-[504px] md:h-[245px] bg-white rounded-[10px] shadow-2xl/5 px-4 py-6 md:px-8  md:py-7">
            <img src="./assets/images/europe.png" alt="" className="absolute left-[-40px] top-[-40px] h-[68px] w-[68px] rounded-full object-cover" />
            <p className="font-poppins text-sm md:text-base font-medium leading-4 md:leading-8 text-[#5E6282]">
              “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
            </p>
            <p className="mt-2 md:mt-[34px] font-poppins font-semibold text-sm md:text-lg text-[#5E6282]  ">Mike taylor</p>
            <p className="md:mt-1 font-poppins font-mediut text-sm text-[#5E6282]  ">Mike taylor</p>
          </div>
        </div>
        <div className="absolute right-20 flex flex-col gap-14  w-[14px]">
          <img src="./assets/icons/pagination.png" alt="" className="h-[7px] w-[14px]  transform rotate-180 cursor-pointer " />
          <img src="./assets/icons/pagination.png" alt="" className="h-[7px] w-[14px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
