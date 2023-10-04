import Logo from "../../assets/Logo1.png";
import Frame from "../../assets/Frame.png";
import Tick from "../../assets/tick-circle.png";
import ImgProd from "../../assets/imageProd.png";
import ProdImg from "../../assets/ProdImg.png";
import Stars from "../../assets/Stars.png";
import tickBlue from "../../assets/tick-circle-blue.png";
import Percent from "../../assets/percent.png";
import Button from "../Button/button";
import Payment from "../../assets/Payment.png";
import Lock from "../../assets/Lock.png";
import GuaranteeIcon from "../../assets/GuaranteeIcon.png";
import UserComent from "../../assets/UserComent.png";

export default function Main() {
  return (
    <>
      <div className="flex justify-center py-4 md:py-8 items-center w-full">
        <div className="flex w-full px-4 md:px-12 lg:px-24 justify-between">
          <img className="w-24 md:w-32 lg:w-48" src={Logo} alt="" />
          <img className="w-24 md:w-32 lg:w-48" src={Frame} alt="" />
        </div>
      </div>

      <div className="flex flex-col text-center">
        <h1 className="text-2xl md:text-5xl">
          Wait! Your order is in progress.
        </h1>
        <p className="text-base md:text-lg my-3 text-gray-700 font-manrope">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex  md:flex-row justify-evenly my-8">
        <div className="flex text-center items-center my-3">
          <div className="w-6 h-6 md:w-10 md:h-10 bg-[#85BF55] flex justify-center rounded-full">
            <img
              className="w-4 h-4 md:w-6 md:h-6 my-2 mx-2 md:mx-3"
              src={Tick}
              alt=""
            />
          </div>
          <p className="text-xs md:text-base mx-2 md:mx-3">
            Step 1: Cart Review
          </p>
        </div>

        <div className="flex text-center items-center my-3">
          <div className="w-6 h-6 md:w-10 md:h-10 bg-[#85BF55] flex justify-center rounded-full">
            <img
              className="w-4 h-4 md:w-6 md:h-6 my-2 mx-2 md:mx-3"
              src={Tick}
              alt=""
            />
          </div>
          <p className="text-xs md:text-base mx-2 md:mx-3">Step 2: Checkout</p>
        </div>

        <div className="flex text-center items-center my-3">
          <div className="w-6 h-6 md:w-10 md:h-10 bg-[#2C7EF8] flex justify-center rounded-full">
            <p className="flex items-center text-white text-xs md:text-base">
              3
            </p>
          </div>
          <p className="text-xs md:text-base mx-2 md:mx-3 font-bold">
            Step 3: Special Offer
          </p>
        </div>

        <div className="flex text-center items-center my-3">
          <div className="w-6 h-6 md:w-10 md:h-10 border-solid border-2 border-[#2C7EF8] bg-white flex justify-center rounded-full">
            <p className="flex items-center text-[#2C7EF8] text-xs md:text-base">
              4
            </p>
          </div>
          <p className="text-xs md:text-base mx-2 md:mx-3">
            Step 4: Confirmation
          </p>
        </div>
      </div>

      <div
        id="main"
        className="flex flex-col md:flex-row justify-center mx-auto ali w-full md:w-[1245px] bg-[#FAFAFA]"
      >
        <div id="divColum1" className="flex-1 flex flex-col">
          <img
            className="my-4 mx-4 md:mx-10 w-full md:w-[575px] h-[auto] md:h-[591px]"
            src={ImgProd}
            alt=""
          />
          <div className="bg-white mx-4 md:mx-0 md:w-[622px]">
            <img className="w-[237px] h-[48px]" src={UserComent} alt="" />
            <div className="w-[622px]">
              <p className="px-4 md:px-5">
                “As soon as the Clarifions arrived I put one in my bedroom. This
                was late in the afternoon. When I went to the bedroom in the
                evening it smelled clean. When I went to bed I felt I could
                breathe better. Wonderful.”
              </p>
            </div>
          </div>
        </div>
        <div id="divColum2" className="flex-1 mx-4 md:mx-10 flex flex-col">
          <div className="bg my-4 flex flex-col md:flex-row mx-0">
            <div>
              <div className="text-center md:text-left w-full md:w-[270px] flex flex-col text-lg md:text-[32px]">
                <div className="w-full text-lg md:text-[32px]">
                  <span className="text-[#2C7EF8]">ONE TIME ONLY</span> special
                  price for 6 extra Clarifion for{" "}
                  <span className="text-[#2C7EF8] text-lg md:text-[32px]">
                    only $14 each
                  </span>{" "}
                  ($84.00 total!)
                </div>
              </div>

              <div className="my-6 flex ">
                <img
                  className="w-24 h-24 md:w-[134px] md:h-[134px]"
                  src={ProdImg}
                  alt=""
                />

                <div className="flex flex-col flex-grow justify-between text-lg md:text-[20px] px-4">
                  <p className="flex justify-between items-center">
                    Clarifion Air Ionizer
                    <div className="flex items-center">
                      <div className="my-1 text-[16px] md:text-[16px] mx-2 md:mx-3 line-through">
                        $180
                      </div>{" "}
                      <div className="text-[#2C7EF8] text-lg md:text-[20px] leading-8 font-bold">
                        $84
                      </div>
                    </div>
                  </p>
                  <div className="ImgStars flex flex-col bg">
                    <img
                      className="w-24 h-4 md:w-[98px] md:h-5 my-2 md:mx-5"
                      src={Stars}
                      alt=""
                    />
                  </div>
                  <div className="RadioButton bg-[#FAFAFA] flex my-2">
                    <input
                      className="mx-2 md:mx-6"
                      type="radio"
                      name="radio-group"
                    />
                    <p className="text-xs md:text-base">12 left in Stock</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-base mx-3 md:mx-7">
                      Simply plug a Clarifion into any standard outlet and
                      replace bulky, expensive air purifiers with a simple.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <img className="w-6 h-6 md:w-8 md:h-8" src={tickBlue} alt="" />
                <p className="text-xs md:text-base mx-2 md:mx-3">
                  Negative Ion Technology may{" "}
                  <span className="text-black font-bold">
                    help with allergens
                  </span>
                </p>
              </div>
              <div className="flex">
                <img className="w-6 h-6 md:w-8 md:h-8" src={tickBlue} alt="" />
                <p className="text-xs md:text-base mx-2 md:mx-3">
                  Designed for{" "}
                  <span className="text-black font-bold">air rejuvenation</span>
                </p>
              </div>
              <div className="flex">
                <img className="w-6 h-6 md:w-8 md:h-8" src={tickBlue} alt="" />
                <p className="text-xs md:text-base mx-2 md:mx-3">
                  <span className="text-black font-bold">
                    Perfect for every room
                  </span>{" "}
                  in all types of places.
                </p>
              </div>
              <div className="Percent Box flex text-center my-6 justify-center rounded-lg bg-[#EDF3FD] w-full md:w-[542px] h-[56px]">
                <div className="boxPercent w-6 h-6 md:w-8 md:h-8 my-3 text-center bg-blue-500 flex items-center justify-center rounded-full">
                  <img src={Percent} alt="" />
                </div>
                <p className="text-xs md:text-base my-3 mx-2 md:mx-3">
                  Save 53% and get 6 extra Clarifion for only $14 Each.
                </p>
              </div>
              <Button />

              <div className="text-xs my-4 flex justify-evenly items-center border-2 rounded-md border-[#CFCFCF] w-full md:w-[542px] h-[33px] ">
                <p>Free shipping</p>|
                <img src={Lock} alt="" /> <p>Secure 256-bit SSL encryption.</p>
                |<img className="w-36 h-2" src={Payment} alt="" />
              </div>
              <div className="bg-slate-400"></div>
              <p className="underline text-base font-bold flex justify-center text-red-600">
                No thanks, I don’t want this.
              </p>
            </div>
          </div>
          <div className="flex  px-4 md:px-8 ">
            <img className="w-12 h-12 mx-3" src={GuaranteeIcon} alt="" />
            <p className="mx-2 text-xs md:text-base">
              If you are not completely thrilled with your Clarifion - We have a{" "}
              <span className="font-bold">30 day satisfaction guarantee.</span>{" "}
              Please refer to our return policy at the bottom of the page for
              more details. Happy Shopping!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
