export default function Button() {
  return (
    <button className="w-full md:max-w-[542px]">
      <p className="bg-[#59AE43] text-[20px] rounded-full text-[#f9f9f9] font-bold flex justify-center items-center h-[59px]">
        Yes - Claim my discount{" "}
        <span className="material-symbols-outlined font-bold text-[20px] px-2">
          arrow_forward
        </span>
      </p>
    </button>
  );
}
