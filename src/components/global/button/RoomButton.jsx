import React from "react";

const RoomButton = ({ room, onClick }) => {
  return (
    <button
      className="w-[75px] px-2 py-1 shadow-lg rounded-lg bg-blue-800 hover:bg-blue-600 focus:bg-blue-600"
      onClick={onClick}
    >
      <p className="text-white text-sm text-center">{room}</p>
    </button>
  );
};

export default RoomButton;
