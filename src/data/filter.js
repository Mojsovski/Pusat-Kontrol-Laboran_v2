// import useStore from "../data/Data.js";
// import { useAuthStore } from "../data/Auth.js";

// export const { inv, invpc, fetchData, fetchDataNonPC } = useStore();
// export const { user } = useAuthStore.getState();

// //filter
// export const filterPrimaryPC = invpc.filter(
//   (item) => item.primaryItem === true && item.room === user.user_metadata.room
// );

// export const filterNonPC = inv.filter(
//   (item) => item.room === user.user_metadata.room
// );
// export const limitInv = filterNonPC.slice(0, 3);

// // count inv
// export const countCategory = (category) =>
//   invpc.filter(
//     (item) =>
//       item.pc.category === category && item.room === user.user_metadata.room
//   ).length;
// export const countClient = countCategory("client");
// export const countDosen = countCategory("dosen");
// export const countLaboran = countCategory("laboran");
// export const countCadangan = countCategory("cadangan");

// export const countStatus = (status) =>
//   invpc.filter(
//     (item) => item.status === status && item.room === user.user_metadata.room
//   ).length;
// export const countPinjam = countStatus("pinjam");
// export const countDipinjam = countStatus("dipinjam");

// export const countRusak = invpc.filter(
//   (item) =>
//     (item.status === "rusak ringan" || item.status === "rusak berat") &&
//     item.room === user.user_metadata.room
// ).length;

// export const countTotal = invpc.filter(
//   (item) => item.room === user.user_metadata.room
// ).length;
