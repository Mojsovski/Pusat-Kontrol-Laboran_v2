import React from "react";

const Status = ({ condition }) => {
  const className =
    condition === "rusak berat"
      ? "bg-[#FF0000] py-1 w-20 items-center flex justify-center rounded-full text-white shadow"
      : condition === "rusak ringan"
      ? "bg-[#fdcd49] py-1 w-20 text-black items-center flex justify-center rounded-full shadow"
      : condition === "baik"
      ? "bg-[#07AC22AB] py-1 w-20 text-white items-center flex justify-center rounded-full shadow"
      : condition === "lab"
      ? "bg-[#07AC22AB] py-1 w-20 text-white items-center flex justify-center rounded-full shadow"
      : condition === "pinjam"
      ? "bg-sky-700 py-1 w-20 items-center flex justify-center rounded-full text-white shadow"
      : condition === "dipinjam"
      ? "bg-indigo-500 py-1 w-20 items-center flex justify-center rounded-full text-white shadow"
      : "bg-[#FF0000] py-1 w-20 items-center flex justify-center rounded-full text-[#9B4332] shadow";

  const conditionText =
    condition === "rusak berat"
      ? "rusak berat"
      : condition === "rusak ringan"
      ? "rusak ringan"
      : condition === "baik"
      ? "baik"
      : condition === "lab"
      ? "lab"
      : condition === "pinjam"
      ? "pinjam"
      : condition === "dipinjam"
      ? "dipinjam"
      : "tidak diketahui";

  return (
    <div className="flex justify-center">
      <p className={className}>{conditionText}</p>
    </div>
  );
};

export default Status;
