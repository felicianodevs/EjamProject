import Arrow from "../../assets/fluent_arrow.png";
import Truck from "../../assets/truck.png";
import Set from "../../assets/set.png";
import Heart from "../../assets/hearth.png";

export default function Header() {
  return (
    <div className="flex text-center">
      <div className="flex items-center w-full h-12 justify-around text-white bg-[#252F3D] ">
        {/* Primeiro H4 */}
        <h4 className="hidden md:flex">
          <img className="w-6 h-6 mx-2" src={Set} alt="" />
          30-DAY SATISFACTION GUARANTEE
        </h4>

        {/* Segundo H4 */}
        <h4 className="hidden md:flex">
          <img className="mx-2 w-6 h-6" src={Truck} alt="" />
          FREE DELIVERY ON ORDERS OVER $40.00
        </h4>

        {/* Terceiro H4 */}
        <h4 className="hidden md:flex">
          <img className="w-6 h-6 mx-2" src={Heart} alt="" />
          50.000+ HAPPY CUSTOMERS
        </h4>

        {/* Quarto H4 (Transformado em botão em telas menores) */}
        <button className="md:hidden flex items-center">
          <img className="mx-2 w-6 h-6" src={Arrow} alt="" />
          100% MONEY BACK GUARANTEE
        </button>
      </div>
    </div>
  );
}
