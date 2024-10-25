import useStore from "./Data.js";
import { useParams } from "react-router-dom";
import useFilterAdmin from "./filterAdmin.js";

const useCountAdmin = () => {
  const { inv, invpc } = useStore();
  const { room } = useParams();
  const { filterConditionPC, filterPinjamPC, filterDipinjamPC } =
    useFilterAdmin();

  const countCategory = (category) =>
    invpc.filter((item) => item.pc.category === category && item.room === room)
      .length;

  const countAllTotal = invpc.filter((item) => item.room).length;
  const countTotal = invpc.filter((item) => item.room === room).length;
  const countPC = (room) => invpc.filter((item) => item.room === room).length;
  const countA = countPC("D.2.A");
  const countB = countPC("D.2.B");
  const countC = countPC("D.2.C");
  const countD = countPC("D.2.D");
  const countE = countPC("D.2.E");
  const countF = countPC("D.2.F");
  const countG = countPC("D.2.G");
  const countH = countPC("D.2.H");
  const countI = countPC("D.2.I");
  const countJ = countPC("D.2.J");
  const countK = countPC("D.2.K");
  const countL = countPC("D.3.L");
  const countM = countPC("D.3.M");
  const countN = countPC("D.3.N");
  const countUPT = countPC("UPT");
  const countClient = countCategory("client");
  const countDosen = countCategory("dosen");
  const countLaboran = countCategory("laboran");
  const countCadangan = countCategory("cadangan");
  const countRusakRingan = filterConditionPC("rusak ringan").length;
  const countRusakBerat = filterConditionPC("rusak").length;
  const countPinjam = filterPinjamPC.length;
  const countDipinjam = filterDipinjamPC.length;

  return {
    countA,
    countB,
    countC,
    countD,
    countE,
    countF,
    countG,
    countH,
    countI,
    countJ,
    countK,
    countL,
    countM,
    countN,
    countUPT,
    countAllTotal,
    countTotal,
    countClient,
    countDosen,
    countLaboran,
    countCadangan,
    countRusakRingan,
    countRusakBerat,
    countPinjam,
    countDipinjam,
  };
};

export default useCountAdmin;
