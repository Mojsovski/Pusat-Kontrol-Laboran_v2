import React, { useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";
import useStore from "../../../data/Data";
import { useAuthStore } from "../../../data/Auth";

function ExportInv() {
  const navigate = useNavigate();
  const { inv, invpc, fetchData, fetchDataNonPC } = useStore();
  const { user } = useAuthStore((state) => ({ user: state.user }));

  // Filter
  const filterUser = inv.filter(
    (inv) => inv.room === user?.user_metadata?.room
  );
  const filterInv = filterUser.sort((a, b) => a.name.localeCompare(b.name));
  const filterUserPC = invpc.filter(
    (inv) => inv.room === user?.user_metadata?.room
  );
  const filterPC = filterUserPC.sort((a, b) => a.name.localeCompare(b.name));

  const getStatusValue = (status) => {
    switch (status) {
      case "baik":
        return 3;
      case "rusak ringan":
        return 2;
      case "rusak berat":
        return 1;
      default:
        return 0;
    }
  };

  useEffect(() => {
    fetchData();
    fetchDataNonPC();
  }, []);

  const handleDownloadPDF = () => {
    const input1 = document.getElementById("pdf-content-page1");
    const input2 = document.getElementById("pdf-content-page2");
    const input3 = document.getElementById("pdf-content-page3");

    const pdf = new jsPDF("l", "mm", [3508, 2420]);

    html2canvas(input1).then((canvas) => {
      const imgData1 = canvas.toDataURL("image/png");
      const imgWidth = 3508;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData1, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.addPage();

      html2canvas(input2).then((canvas) => {
        const imgData2 = canvas.toDataURL("image/png");
        const imgHeight2 = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData2, "PNG", 10, 10, imgWidth, imgHeight2);
        pdf.addPage();

        html2canvas(input3).then((canvas) => {
          const imgData3 = canvas.toDataURL("image/png");
          const imgHeight3 = (canvas.height * imgWidth) / canvas.width;
          pdf.addImage(imgData3, "PNG", 10, 10, imgWidth, imgHeight3);
          pdf.save("checklist.pdf");
        });
      });
    });
  };

  return (
    <>
      <div className="m-5 flex justify-center space-x-2">
        <button
          onClick={handleDownloadPDF}
          className="px-4 h-10 mb-4 bg-blue-700 hover:bg-blue-500 text-white rounded-2xl"
        >
          unduh salinan rekap inventaris
        </button>
        <button
          onClick={() => navigate(-1)}
          className="px-4 h-10 mb-4 bg-blue-700 hover:bg-blue-500 text-white rounded-2xl"
        >
          kembali
        </button>
      </div>
      <div
        className=" w-screen h-[2480px] flex flex-col justify-start "
        id="pdf-content-page1"
      >
        {/* page 1 */}
        <div className="w-full h-full p-10 flex flex-col space-y-2 bg-white ">
          <div className="mx-6 flex flex-col justify-between ">
            <div className="flex justify-between">
              <div className="text-lg font-bold">
                Checklist kondisi komponen komputer
              </div>
              <div className="text-base">No. Dok: F-LABKOM-DINUS-SH-02-01</div>
            </div>
            <div className="text-lg">Ruang : {user?.user_metadata?.room}</div>
            <div className="flex justify-between">
              <div className="text-lg">Periode : </div>
              <div className="text-sm">halaman 1 dari 4</div>
            </div>
          </div>
          <div className="mx-6">
            <table className="table w-full border-black border-2">
              <thead>
                <tr>
                  <th className="text-center border-2 border-black px-4 py-2 w-[50px] h-16">
                    No PC
                  </th>
                  <th className="text-center border-2 border-black px-6 py-2 w-[50px] h-16">
                    CPU
                  </th>
                  <th className="text-center border-2 border-black px-6 py-2 w-[50px] h-16">
                    Mobo
                  </th>
                  <th className="text-center border-2 border-black px-7 py-2 w-[50px] h-16">
                    RAM
                  </th>
                  <th className="text-center border-2 border-black px-7 py-2 w-[50px] h-16">
                    GPU
                  </th>
                  <th className="text-center border-2 border-black px-4 py-2 w-[50px] h-16">
                    Storage
                  </th>
                  <th className="text-center border-2 border-black px-5 py-2 w-[50px] h-16">
                    Mouse
                  </th>
                  <th className="text-center border-2 border-black px-2 py-2 w-[50px] h-16">
                    Keyboard
                  </th>
                  <th className="text-center border-2 border-black px-4 py-2 w-[50px] h-16">
                    Monitor
                  </th>
                  <th className="text-center border-2 border-black px-8 py-2 w-[50px] h-16">
                    PSU
                  </th>
                  <th className="text-center border-2 border-black px-4 py-2 h-16">
                    Keterangan
                  </th>
                </tr>
              </thead>
              <tbody>
                {filterPC.slice(0, 20).map((item, index) => (
                  <tr key={item.id}>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {index + 1}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.cpu)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.mobo)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.ram)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.gpu)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.storage)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.mouse)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.keyboard)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.monitor)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.psu)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {item.comment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mx-6">
            <div className="text-base">[0] : Tidak Ada</div>
            <div className="text-base">[1] : Kerusakan Berat / Mati</div>
            <div className="text-base">
              [2] : Kerusakan Ringan / Masih bisa digunakan
            </div>
            <div className="text-base">[3] : Normal / Baru </div>
          </div>
        </div>
        {/* page 2 */}
        <div
          id="pdf-content-page2"
          className="w-full h-full p-10 flex flex-col space-y-2 "
        >
          <div className="mx-6 flex flex-col justify-between ">
            <div className="flex justify-between">
              <div className="text-lg">Ruang : {user?.user_metadata?.room}</div>
              <div className="text-sm">halaman 2 dari 4</div>
            </div>
          </div>
          <div className="mx-6">
            <table className="table w-full border-black border-2">
              <thead>
                <tr>
                  <th className="text-center border-2 border-black px-4 py-2 w-[50px] h-16">
                    No PC
                  </th>
                  <th className="text-center border-2 border-black px-6 py-2 w-[50px] h-16">
                    CPU
                  </th>
                  <th className="text-center border-2 border-black px-6 py-2 w-[50px] h-16">
                    Mobo
                  </th>
                  <th className="text-center border-2 border-black px-7 py-2 w-[50px] h-16">
                    RAM
                  </th>
                  <th className="text-center border-2 border-black px-7 py-2 w-[50px] h-16">
                    GPU
                  </th>
                  <th className="text-center border-2 border-black px-4 py-2 w-[50px] h-16">
                    Storage
                  </th>
                  <th className="text-center border-2 border-black px-5 py-2 w-[50px] h-16">
                    Mouse
                  </th>
                  <th className="text-center border-2 border-black px-2 py-2 w-[50px] h-16">
                    Keyboard
                  </th>
                  <th className="text-center border-2 border-black px-4 py-2 w-[50px] h-16">
                    Monitor
                  </th>
                  <th className="text-center border-2 border-black px-8 py-2 w-[50px] h-16">
                    PSU
                  </th>
                  <th className="text-center border-2 border-black px-4 py-2 h-16">
                    Keterangan
                  </th>
                </tr>
              </thead>
              <tbody>
                {filterPC.slice(20, 40).map((item, index) => (
                  <tr key={item.id}>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {index + 21}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.cpu)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.mobo)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.ram)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.gpu)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.storage)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.mouse)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.keyboard)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.monitor)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.psu)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {item.comment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mx-6">
            <div className="text-base">[0] : Tidak Ada</div>
            <div className="text-base">[1] : Kerusakan Berat / Mati</div>
            <div className="text-base">
              [2] : Kerusakan Ringan / Masih bisa digunakan
            </div>
            <div className="text-base">[3] : Normal / Baru </div>
          </div>
        </div>
        {/* page 3 */}
        <div
          id="pdf-content-page3"
          className="w-full h-full p-10 flex flex-col space-y-3  "
        >
          <div className="mx-6 flex flex-col justify-between ">
            <div className="flex justify-between">
              <div className="text-lg">Ruang : {user?.user_metadata?.room}</div>
              <div className="text-sm">halaman 4 dari 4</div>
            </div>
          </div>
          <div className="mx-6">
            <table className="table w-full border-black border-2">
              <thead>
                <tr>
                  <th className="text-center border-2 border-black px-4 py-2 w-[50px] h-16">
                    No PC
                  </th>
                  <th className="text-center border-2 border-black px-6 py-2 w-[50px] h-16">
                    CPU
                  </th>
                  <th className="text-center border-2 border-black px-6 py-2 w-[50px] h-16">
                    Mobo
                  </th>
                  <th className="text-center border-2 border-black px-7 py-2 w-[50px] h-16">
                    RAM
                  </th>
                  <th className="text-center border-2 border-black px-7 py-2 w-[50px] h-16">
                    GPU
                  </th>
                  <th className="text-center border-2 border-black px-4 py-2 w-[50px] h-16">
                    Storage
                  </th>
                  <th className="text-center border-2 border-black px-5 py-2 w-[50px] h-16">
                    Mouse
                  </th>
                  <th className="text-center border-2 border-black px-2 py-2 w-[50px] h-16">
                    Keyboard
                  </th>
                  <th className="text-center border-2 border-black px-4 py-2 w-[50px] h-16">
                    Monitor
                  </th>
                  <th className="text-center border-2 border-black px-8 py-2 w-[50px] h-16">
                    PSU
                  </th>
                  <th className="text-center border-2 border-black px-4 py-2 h-16">
                    Keterangan
                  </th>
                </tr>
              </thead>
              <tbody>
                {filterPC.slice(40, 60).map((item, index) => (
                  <tr key={item.id}>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {index + 41}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.cpu)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.mobo)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.ram)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.gpu)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.storage)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.mouse)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.keyboard)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.monitor)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {getStatusValue(item.condition.psu)}
                    </td>
                    <td className="text-center border-2 px-4 py-1 border-black">
                      {item.comment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mx-6 font-semibold text-justify pt-2 ">No PC</div>
          <div className="flex justify-between">
            <div className="ml-6 mr-2 w-full">
              <table className="table w-full border-black border-2">
                <thead>
                  <tr>
                    <th className="text-center border-2 border-black px-4 py-2 w-[50px] h-16">
                      No
                    </th>
                    <th className="text-center border-2 border-black px-5 py-2 w-[50px] h-16">
                      Nama Barang
                    </th>
                    <th className="text-center border-2 border-black px-4 py-2 w-[50px] h-16">
                      Jml
                    </th>
                    <th className="text-center border-2 border-black px-2 py-2 w-[50px] h-16">
                      Kondisi
                    </th>
                    <th className="text-center border-2 border-black px-8 py-2 w-[50px] h-16">
                      Keterangan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filterInv.slice(0, 10).length === 0
                    ? Array.from({ length: 10 }).map((_, index) => (
                        <tr key={index}>
                          <td className="text-center border-2 border-black px-4 py-1">
                            {index + 11}
                          </td>
                          <td className="text-center border-2 border-black px-4 py-1"></td>
                          <td className="text-center border-2 border-black px-4 py-1"></td>
                          <td className="text-center border-2 border-black px-4 py-1"></td>
                          <td className="text-center border-2 border-black px-4 py-1"></td>
                        </tr>
                      ))
                    : filterInv.slice(0, 10).map((item, index) => (
                        <tr key={item.id}>
                          <td className="text-center border-2 px-4 py-1 border-black">
                            {index + 1}
                          </td>
                          <td className="text-center border-2 px-4 py-1 border-black">
                            {item.name}
                          </td>
                          <td className="text-center border-2 px-4 py-1 border-black">
                            {item.quantity}
                          </td>
                          <td className="text-center border-2 px-4 py-1 border-black">
                            {getStatusValue(item.status)}
                          </td>

                          <td className="text-center border-2 px-4 py-1 border-black">
                            {item.comment}
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
            <div className="mr-6 ml-2 w-full">
              <table className="table w-full border-black border-2">
                <thead>
                  <tr>
                    <th className="text-center border-2 border-black px-4 py-2 w-[50px] h-16">
                      No
                    </th>
                    <th className="text-center border-2 border-black px-5 py-2 w-[50px] h-16">
                      Nama Barang
                    </th>
                    <th className="text-center border-2 border-black px-4 py-2 w-[50px] h-16">
                      Jml
                    </th>
                    <th className="text-center border-2 border-black px-2 py-2 w-[50px] h-16">
                      Kondisi
                    </th>
                    <th className="text-center border-2 border-black px-8 py-2 w-[50px] h-16">
                      Keterangan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filterInv.slice(10, 20).length === 0
                    ? Array.from({ length: 10 }).map((_, index) => (
                        <tr key={index}>
                          <td className="text-center border-2 border-black px-4 py-1">
                            {index + 11}
                          </td>
                          <td className="text-center border-2 border-black px-4 py-1"></td>
                          <td className="text-center border-2 border-black px-4 py-1"></td>
                          <td className="text-center border-2 border-black px-4 py-1"></td>
                          <td className="text-center border-2 border-black px-4 py-1"></td>
                        </tr>
                      ))
                    : filterInv.slice(10, 20).map((item, index) => (
                        <tr key={item.id}>
                          <td className="text-center border-2 px-4 py-1 border-black">
                            {index + 1}
                          </td>
                          <td className="text-center border-2 px-4 py-1 border-black">
                            {item.name}
                          </td>
                          <td className="text-center border-2 px-4 py-1 border-black">
                            {item.quantity}
                          </td>
                          <td className="text-center border-2 px-4 py-1 border-black">
                            {getStatusValue(item.status)}
                          </td>
                          <td className="text-center border-2 px-4 py-1 border-black">
                            {item.comment}
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mx-6">
            <div className="text-base">[0] : Tidak Ada</div>
            <div className="text-base">[1] : Kerusakan Berat / Mati</div>
            <div className="text-base">
              [2] : Kerusakan Ringan / Masih bisa digunakan
            </div>
            <div className="text-base">[3] : Normal / Baru </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExportInv;
