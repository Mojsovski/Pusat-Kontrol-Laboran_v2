import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import logoInput from "../../assets/icons/pcinput.svg";
import useStore from "../../data/Data";

function InvDetail() {
  const inv = useStore((state) => state.inv);
  // console.log({ inv });
  return (
    <div className="h-screen bg-[#C4C4C4] relative  ">
      <Sidebar />
      <Navbar title="Inventaris" />
      <div className=" pr-10 py-28 pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] relative">
        <div className="relative w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md">
          <div className="h-10 flex flex-row gap-5 items-center">
            <div className="flex flex-row gap-4 ">
              <img src={logoInput} className="w-[25px] " />
              <div className="p-1 font-semibold text-xl ">
                Daftar Inventaris
              </div>
            </div>
          </div>
          <div className="">
            <div className="overflow-x-auto relative ">
              {/* table */}
              <table className="w-full text-center  ">
                <thead className="  ">
                  <tr>
                    <th scope="col" className="px-1 py-3 font-semibold">
                      No
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Nama
                    </th>
                    <th scope="col" className="px-5 py-3 font-semibold">
                      Prosessor
                    </th>
                    <th scope="col" className="px-1 py-3 font-semibold">
                      RAM
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Kartu grafis
                    </th>
                    <th scope="col" className="px- py-3 font-semibold">
                      Penyimpanan
                    </th>

                    <th scope="col" className="px-1 py-3 font-semibold">
                      Kategori
                    </th>
                    <th scope="col" className="px-1 py-3 font-semibold">
                      Kondisi
                    </th>
                    <th scope="col" className="px-1 py-3 font-semibold">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {inv.map((data) => (
                    <tr>
                      <td className="px-1 py-3">{data.id}</td>
                      <td>{data.invNama}</td>
                      <td>{data.invCPU}</td>
                      <td>{data.invRAM}</td>
                      <td>{data.invGPU}</td>
                      <td>{data.invStorage}</td>
                      <td>{data.invCategory}</td>
                      <td className="px-1 py-3 flex items-center justify-center">
                        <p
                          className={`${
                            data.invStatus === "baik"
                              ? "bg-[#9EC7BD] py-1 w-24 text-[#1F5C4D] items-center flex justify-center rounded-full"
                              : data.invStatus === "normal"
                              ? "bg-[#768DD5] py-1 w-24 text-white items-center flex justify-center rounded-full"
                              : data.invStatus === "rusak"
                              ? "bg-[#F8D46D] py-1 w-24 text-[#987201] items-center flex justify-center rounded-full"
                              : "bg-[#F3B1A5] py-1 w-28 items-center flex justify-center rounded-full text-[#9B4332]"
                          }`}
                        >
                          {data.invStatus}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvDetail;
