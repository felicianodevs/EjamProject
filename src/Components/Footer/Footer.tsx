import Lock from "../../assets/lock2.png";

export default function Header() {
  return (
    <div className="flex text-center">
      <div className="flex items-center w-full h-12 justify-around text-white bg-[#252F3D] ">
        <div>
          <h4 className="flex ">
            <p>Copyright (c) 2023 | Clarifionsupport@clarifion.com</p>
          </h4>
        </div>

        <h4 className="flex">
          <div className="flex justify-center items-center">
            <img className="mx-2 w-[16px] h-[16px]" src={Lock} alt="" />
            Secure 256-bit SSL encryption.
          </div>
        </h4>
      </div>
    </div>
  );
}
