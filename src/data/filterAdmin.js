import useStore from "./Data.js";
import { useParams } from "react-router-dom";

const useFilterAdmin = () => {
  const { inv, invpc } = useStore();
  const { room } = useParams();

  const sortnamePC = [...invpc].sort((a, b) => a.name.localeCompare(b.name));
  const sortnameInv = [...inv].sort((a, b) => a.name.localeCompare(b.name));

  const sortroomPC = [...invpc].sort((a, b) => a.room.localeCompare(b.room));
  const sortroomInv = [...inv].sort((a, b) => a.room.localeCompare(b.room));

  const filterRoomPC = (room) =>
    sortnamePC.filter((item) => item.room === room);
  const filterRoomInv = (room) =>
    sortnameInv.filter((item) => item.room === room);

  const filtersortInv = sortnameInv.sort((a, b) =>
    a.room.localeCompare(b.room)
  );

  const filterAllPrimaryPC = sortnamePC.filter(
    (item) => item.primaryItem === true
  );
  const filterPrimaryPC = sortnamePC.filter(
    (item) => item.primaryItem === true && item.room === room
  );

  const filterAllLimitInv = filtersortInv.slice(0, 7);
  const filterLimitInv = filtersortInv
    .filter((item) => item.room === room)
    .slice(0, 5);

  const filterPinjamPC = invpc.filter(
    (item) => item.status === "dipinjam" && item.roomNew === room
  );

  const filterDipinjamPC = invpc.filter(
    (item) => item.status === "dipinjam" && item.roomOld === room
  );

  const filterConditionPC = (status) =>
    invpc.filter(
      (item) =>
        Object.values(item.condition).some(
          (condition) => condition === status
        ) && item.room === room
    );

  const filterConditionPCAll = invpc.filter(
    (item) =>
      Object.values(item.condition).some(
        (condition) =>
          condition === "rusak ringan" || condition === "rusak berat"
      ) && item.room === room
  );

  const filterRusakRingan = filterConditionPC("rusak ringan");
  const filterRusakBerat = filterConditionPC("rusak");
  const filterD2A = filterRoomPC("D.2.A");
  const filterD2B = filterRoomPC("D.2.B");
  const filterD2C = filterRoomPC("D.2.C");
  const filterD2D = filterRoomPC("D.2.D");
  const filterD2E = filterRoomPC("D.2.E");
  const filterD2F = filterRoomPC("D.2.F");
  const filterD2G = filterRoomPC("D.2.G");
  const filterD2H = filterRoomPC("D.2.H");
  const filterD2I = filterRoomPC("D.2.I");
  const filterD2J = filterRoomPC("D.2.J");
  const filterD2K = filterRoomPC("D.2.K");
  const filterD3L = filterRoomPC("D.3.L");
  const filterD3M = filterRoomPC("D.3.M");
  const filterD3N = filterRoomPC("D.3.N");
  const filterUPT = filterRoomPC("UPT");

  return {
    sortnamePC,
    sortnameInv,
    filtersortInv,
    filterAllPrimaryPC,
    filterPrimaryPC,
    filterAllLimitInv,
    filterLimitInv,
    filterRusakRingan,
    filterRusakBerat,
    filterConditionPC,
    filterConditionPCAll,
    filterPinjamPC,
    filterDipinjamPC,
    filterD2A,
    filterD2B,
    filterD2C,
    filterD2D,
    filterD2E,
    filterD2F,
    filterD2G,
    filterD2H,
    filterD2I,
    filterD2J,
    filterD2K,
    filterD3L,
    filterD3M,
    filterD3N,
    filterUPT,
  };
};

export default useFilterAdmin;
