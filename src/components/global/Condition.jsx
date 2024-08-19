import React from "react";

const Condition = ({ condition }) => {
  const className = Object.values(condition).some(
    (status) => status === "rusak berat"
  )
    ? "bg-[#FF0000] py-1 w-24 items-center flex justify-center rounded-full text-white shadow"
    : Object.values(condition).some((status) => status === "rusak ringan")
    ? "bg-[#fdcd49] py-1 w-24 text-black items-center flex justify-center rounded-full shadow"
    : Object.values(condition).every((status) => status === "baik")
    ? "bg-[#07AC22AB] py-1 w-24 text-white items-center flex justify-center rounded-full shadow"
    : "bg-[#FF0000] py-1 w-24 items-center flex justify-center rounded-full text-[#9B4332] shadow";

  const conditionText = Object.values(condition).some(
    (status) => status === "rusak berat"
  )
    ? "rusak berat"
    : Object.values(condition).some((status) => status === "rusak ringan")
    ? "rusak ringan"
    : Object.values(condition).every((status) => status === "baik")
    ? "baik"
    : "tidak diketahui";

  return (
    <div className="flex justify-center">
      <p className={className}>{conditionText}</p>
    </div>
  );
};

export default Condition;
