export default function IncomeInvoice() {
  return (
    <div className="flex flex-col  p-[24px]  w-[100%] h-[100%] rounded-[8px] mt-[32px] bg-whiteTwo">
      <div className="font-bold flex justify-between">
        <div className="mb-[24px]">
          <span className="text-sky ">#</span>RT3080
        </div>

        <span className="text-skyTwo font-[500]">Jensen Huang</span>
      </div>
      <div className="flex  justify-between">
        <div className="">
          <span className="text-skyTwo font-[500]">Due 19 Aug 2021</span>
          <h3 className="font-bold text-black mt-[9px]">£ 1,800.90</h3>
        </div>
        <div className="flex justify-center items-center gap-[6px]  pt-[17px] pl-[30px] pr-[30px] pb-[15px] max-w-[104px] max-h-[40px] rounded-[6px] bg-green  bg-opacity-5">
          <div className="bg-green w-[8px] h-[8px] rounded-[50%] "></div>
          <span className="text-green font-bold ">Paid</span>
        </div>
      </div>
    </div>
  );
}
