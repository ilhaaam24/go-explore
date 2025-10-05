export default function Tips() {
  return (
    <div className="lg:min-h-screen pb-30  md:py-20  flex flex-col  md:flex-row lg:flex-row  justify-between items-center relative px-4  md:px-8 lg:px-40 ">
      <div className=" w-full md:max-w-[380px] lg:max-w-[511px] ">
        <p className="font-poppins font-semibold text-lg text-[#5E6282]">Easy and Fast</p>
        <h2 className="font-volkhov text-3xl  lg:max-w-[511px] md:text-4xl lg:text-[50px] font-bold text-[#181E4B] mt-3.5">Book your next trip in 3 easy steps</h2>
        <div className="mt-[30px] flex flex-col gap-12">
          <div className="flex gap-4 md:gap-5 items-start">
            <div className="h-12 w-12 md:h-[52px] md:w-[52px] bg-[#F0BB1F] rounded-xl flex justify-center items-center flex-shrink-0">
              <img src="./assets/icons/selection.png" alt="selection" className="w-4 h-4 md:w-[22px] md:h-[22px]" />
            </div>
            <div className="flex-1 max-w-[320px]">
              <p className="font-poppins font-bold text-sm md:text-base text-[#5E6282]">Choose Destination</p>
              <p className="mt-1 font-poppins text-sm md:text-base text-[#5E6282]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4 md:gap-5 items-start">
            <div className="h-12 w-12 md:h-[52px] md:w-[52px] bg-[#F15A2B] rounded-xl flex justify-center items-center flex-shrink-0">
              <img src="./assets/icons/swimming.png" alt="selection" className="w-4 h-4 md:w-[22px] md:h-[22px]" />
            </div>
            <div className="flex-1 max-w-[320px]">
              <p className="font-poppins font-bold text-sm md:text-base text-[#5E6282]">Make Payment</p>
              <p className="mt-1 font-poppins text-sm md:text-base text-[#5E6282]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4 md:gap-5 items-start">
            <div className="h-12 w-12 md:h-[52px] md:w-[52px] bg-[#006380] rounded-xl flex justify-center items-center flex-shrink-0">
              <img src="./assets/icons/taxi.png" alt="selection" className="w-4 h-4 md:w-[22px] md:h-[22px]" />
            </div>
            <div className="flex-1 max-w-[320px]">
              <p className="font-poppins font-bold text-sm md:text-base text-[#5E6282]">Reach Airport on Selected Date</p>
              <p className="mt-1 font-poppins text-sm md:text-base text-[#5E6282]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative flex justify-center items-center mt-32 md:mt-0">
        <div className="relative  z-0 h-[300px] w-[300px] lg:h-[357px] lg:w-[357px] rounded-full bg-radial from-[#59B1E6]/50 to-white blur-3xl"></div>

        {/* small card */}
        <div className="absolute bottom-12 -right-9 lg:bottom-7 lg:right-1 shadow-lg/5 bg-white rounded-[18px] w-[200px] h-auto lg:w-[263px] lg:h-[129px] z-30">
          <div className="flex gap-3 px-5 py-[18px]">
            <img src="./assets/images/mosque.png" alt="mosque" className="size-[30px] lg:size-[50px] rounded-full " />
            <div>
              <p className="font-poppins font-medium text-sm text-[#5E6282]">Ongoing</p>
              <p className="font-poppins font-medium text-sm mt-1 lg:mt-1.5 ">Trip to rome</p>
              <div className="mt-2 lg:mt-3.5 flex gap-1 items-center">
                <p className="font-poppins font-medium text-sm text-[#8A79DF]  ">40%</p>
                <p className="font-poppins font-medium text-sm  ">completed</p>
              </div>
              <div className="mt-2.5 bg-[#8A79DF] h-[5px] w-[80px] rounded-full "></div>
            </div>
          </div>
        </div>
        {/* big card */}
        <div className="absolute -left-6 lg:-left-32 bg-white z-10 w-[300px] h-auto  lg:w-[370px] lg:h-[400px] px-6 py-5 rounded-[26px] shadow-2xl/10">
          <img src="./assets/images/greece.jpg" alt="tips" />
          <div className="mt-6">
            <p className="font-poppins font-semibold text-lg">Trip To Greece</p>
            <p className="mt-3.5 font-poppins font-semibold  text-[#5E6282]">14-29 June | by Robbin joseph</p>
            <div className="mt-5 flex gap-[18px]">
              <img src="./assets/icons/leaf.png" alt="" className="size-9" />
              <img src="./assets/icons/map.png" alt="" className="size-9" />
              <img src="./assets/icons/send.png" alt="" className="size-9" />
            </div>
            <div className="flex justify-between items-center mt-[30px]">
              <div className=" flex items-center gap-3.5">
                <img src="./assets/icons/building 1.png" alt="building" className="h-3.5" />
                <p className="font-poppins font-semibold  text-[#5E6282]">24 people going</p>
              </div>
              <img src="./assets/icons/love.png" alt="love icon" className="w-5 h-[18px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
