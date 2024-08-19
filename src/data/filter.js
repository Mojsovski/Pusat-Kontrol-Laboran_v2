import useStore from "./Data.js";
import { useAuthStore } from "./Auth.js";

const useFilters = () => {
  const { inv, invpc } = useStore();
  const { user } = useAuthStore.getState();

  // Filter functions
  const filterStatus = (status) =>
    invpc.filter(
      (item) =>
        item.status === status && item.roomOld === user.user_metadata.room
    );

  const filterPinjam = invpc.filter(
    (item) =>
      item.status === "dipinjam" && item.roomNew === user.user_metadata.room
  );

  const filterDipinjam = invpc.filter(
    (item) =>
      item.status === "dipinjam" && item.roomOld === user.user_metadata.room
  );

  const filterRusak = invpc.filter(
    (item) =>
      Object.values(item.condition).some(
        (cond) => cond === "rusak ringan" || cond === "rusak berat"
      ) && item.room === user.user_metadata.room
  );

  const filterPrimaryPC = invpc.filter(
    (item) => item.primaryItem === true && item.room === user.user_metadata.room
  );

  const limitInv = inv
    .filter((item) => item.room === user.user_metadata.room)
    .slice(0, 3);

  // Count functions
  const countCategory = (category) =>
    invpc.filter(
      (item) =>
        item.pc.category === category && item.room === user.user_metadata.room
    ).length;

  const countClient = countCategory("client");
  const countDosen = countCategory("dosen");
  const countLaboran = countCategory("laboran");
  const countCadangan = countCategory("cadangan");

  const countStatus = (status) =>
    invpc.filter(
      (item) => item.status === status && item.room === user.user_metadata.room
    ).length;

  const countPinjam = countStatus("pinjam");
  const countDipinjam = countStatus("dipinjam");

  const countRusak = invpc.filter(
    (item) =>
      (item.status === "rusak ringan" || item.status === "rusak berat") &&
      item.room === user.user_metadata.room
  ).length;

  const countTotal = invpc.filter(
    (item) => item.room === user.user_metadata.room
  ).length;

  return {
    filterStatus,
    filterPinjam,
    filterDipinjam,
    filterRusak,
    filterPrimaryPC,
    limitInv,
    countClient,
    countDosen,
    countLaboran,
    countCadangan,
    countPinjam,
    countDipinjam,
    countRusak,
    countTotal,
  };
};

export default useFilters;
