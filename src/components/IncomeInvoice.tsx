import dateFormat from "dateformat";

export default function IncomeInvoice({ item }) {
  console.log(item);

  const inputDate = item.paymentDue;
  const dateObject = new Date(inputDate);
  const formattedDate = dateFormat(dateObject, "Due d mmm yyyy");

  return (
    <div className="flex flex-col  p-[24px]  w-[100%] h-[100%] rounded-[8px] mt-[32px] bg-whiteTwo">
      <div className="font-bold flex justify-between">
        <div className="mb-[24px]">
          <span className="text-sky ">#</span>
          {item.id}
        </div>

        <span className="text-skyTwo font-[500]">{item.clientName}</span>
      </div>
      <div className="flex  justify-between">
        <div className="">
          <span className="text-skyTwo font-[500]"> {formattedDate}</span>
          <h3 className="font-bold text-black mt-[9px]">{`£ ${item.total}`}</h3>
        </div>

        <div
          className={`${
            item.status === "paid"
              ? "bg-green  "
              : item.status === "pending"
              ? "bg-yellow  "
              : item.status === "draft"
              ? "bg-Draft "
              : ""
          } bg-opacity-5 flex justify-center items-center gap-[6px] pt-[17px] pl-[30px] pr-[30px] pb-[15px] max-w-[104px] max-h-[40px] rounded-[6px]`}
        >
          <div
            className={`${
              item.status === "paid"
                ? "bg-green  "
                : item.status === "pending"
                ? "bg-yellow p-[4px] "
                : item.status === "draft"
                ? "bg-Draft p-[4px] "
                : ""
            }w-[8px] h-[8px] rounded-[50%]`}
          ></div>
          <span
            className={`${
              item.status === "paid"
                ? "text-green  "
                : item.status === "pending"
                ? "text-yellow  "
                : item.status === "draft"
                ? "text-Draft "
                : ""
            }font-bold`}
          >
            {item.status === "paid"
              ? "Paid  "
              : item.status === "pending"
              ? "Pending "
              : item.status === "draft"
              ? "Draft "
              : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
