import React from "react";

const ConditionAll = ({ condition }) => {
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

const ConditionDetail = ({ condition }) => {
  const className =
    condition === "baik"
      ? "bg-[#07AC22AB] my-1 w-24 text-white text-sm items-center flex justify-center rounded-full shadow"
      : condition === "rusak ringan"
      ? "bg-[#fdcd49] my-1 w-24 text-black text-sm items-center flex justify-center rounded-full shadow"
      : condition === "rusak berat"
      ? "bg-[#FF0000] my-1 w-24 text-white text-sm items-center flex justify-center rounded-full shadow"
      : "bg-[#FF0000] my-1 w-24 text-white text-sm items-center flex justify-center rounded-full shadow";

  return <div className={className}>{condition}</div>;
};

const Condition = ({ condition }) => {
  const className =
    condition === "baik"
      ? "bg-[#07AC22AB] w-24 py-1 text-white text-sm rounded-2xl shadow"
      : condition === "rusak ringan"
      ? "bg-[#fdcd49]  w-24 py-1  text-black text-sm  rounded-2xl shadow"
      : condition === "rusak berat"
      ? "bg-[#FF0000]  w-24 py-1 text-white text-sm rounded-2xl shadow"
      : "bg-[#FF0000]  w-24 py-1 text-white text-sm rounded-2xl shadow";

  return <div className={className}>{condition}</div>;
};

const ConditionForm = ({ condition }) => {
  if (!condition) return "bg-white text-black";

  const className =
    condition === "baik"
      ? "bg-[#07AC22AB] text-white"
      : condition === "rusak ringan"
      ? "bg-[#fdcd49] text-black"
      : condition === "rusak berat"
      ? "bg-[#FF0000] text-white"
      : "bg-[#FF0000] text-white";

  return className;
};

const Action = ({ action }) => {
  const className =
    action === "insert"
      ? "bg-[#07AC22AB] px-6 py-1 text-white text-sm rounded-2xl shadow"
      : action === "update"
      ? "bg-[#fdcd49] px-6 py-1  text-black text-sm  rounded-2xl shadow"
      : action === "delete"
      ? "bg-[#FF0000] px-6 py-1 text-white text-sm rounded-2xl shadow"
      : "bg-[#FF0000] px-6 py-1 text-white text-sm rounded-2xl shadow";

  return <div className={className}>{action}</div>;
};

export { ConditionAll, ConditionForm, Action, Condition, ConditionDetail };
export default Condition;
