import React from "react";
import { Link } from "react-router-dom";
import { TbHomeMove } from "react-icons/tb";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { TbHomeMinus } from "react-icons/tb";

export const MoveButton = ({ to }) => (
  <Link
    to={to}
    className="bg-sky-700 hover:bg-sky-600 py-1 w-10 items-center flex justify-center rounded-xl shadow"
  >
    <TbHomeMove className="text-white size-5" />
  </Link>
);

export const DeleteButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-red-500 hover:bg-red-400 py-1 w-10 items-center flex justify-center rounded-xl shadow"
  >
    <DeleteForeverRoundedIcon style={{ color: "white" }} />
  </button>
);

export const EditButton = ({ to }) => (
  <Link
    to={to}
    className="bg-[#fdcd49] hover:bg-yellow-300 py-1 w-10 items-center flex justify-center rounded-xl shadow"
  >
    <EditRoundedIcon />
  </Link>
);

export const DetailButton = ({ to }) => (
  <Link
    to={to}
    className="bg-blue-700 hover:bg-blue-600 py-1 w-10 items-center flex justify-center rounded-xl shadow"
  >
    <SettingsSuggestIcon style={{ color: "white" }} />
  </Link>
);

export const HomeBackButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-sky-700 hover:bg-sky-600 py-1 w-10 items-center flex justify-center rounded-xl shadow"
  >
    <TbHomeMinus className="text-white size-5" />
  </button>
);
