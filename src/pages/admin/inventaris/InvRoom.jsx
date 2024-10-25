import React from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../../components/global/Sidebar";
import Navbar from "../../../components/global/Navbar";
import image from "../../../assets/images/image.jsx";
import icons from "../../../assets/icons/icon.jsx";

function InvRoom() {
  return (
    <div className="h-screen bg-[#C4C4C4] relative  ">
      <Sidebar />
      <Navbar title="Rekap Ruang Laboratorium" />
      <div className=" pr-10 py-28 pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] relative">
        <div className="relative w-full px-8 py-5 flex-col space-y-14">
          <div className="flex flex-wrap gap-5 items-center justify-between">
            <Link
              to={`/admin/inventaris/rekap/D.2.A`}
              className="w-60 h-[330px] min-w-[240px] min-h-[330px] rounded-3xl overflow-hidden shadow-lg bg-neutral-300 transition duration-200 hover:scale-110"
            >
              <img
                className="h-[272px] w-full rounded-3xl object-cover "
                src={image.ruanglab}
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4 pb-2">
                <div className=" font-semibold text-xl text-center">
                  Ruang D.2.A
                </div>
              </div>
            </Link>
            <Link
              to={`/admin/inventaris/rekap/D.2.B`}
              className="w-60 h-[330px] min-w-[240px] min-h-[330px] rounded-3xl overflow-hidden shadow-lg bg-neutral-300 transition duration-200 hover:scale-110"
            >
              <img
                className="h-[272px] w-full rounded-3xl object-cover"
                src={image.ruanglab}
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4 pb-2">
                <div className=" font-semibold text-xl text-center">
                  Ruang D.2.B
                </div>
              </div>
            </Link>
            <Link
              to={`/admin/inventaris/rekap/D.2.C`}
              className="w-60 h-[330px] min-w-[240px] min-h-[330px] rounded-3xl overflow-hidden shadow-lg bg-neutral-300 transition duration-200 hover:scale-110"
            >
              <img
                className="h-[272px] w-full rounded-3xl object-cover"
                src={image.ruanglab}
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4 pb-2">
                <div className=" font-semibold text-xl text-center">
                  Ruang D.2.C
                </div>
              </div>
            </Link>
            <Link
              to={`/admin/inventaris/rekap/D.2.D`}
              className="w-60 h-[330px] min-w-[240px] min-h-[330px] rounded-3xl overflow-hidden shadow-lg bg-neutral-300 transition duration-200 hover:scale-110"
            >
              <img
                className="h-[272px] w-full rounded-3xl object-cover"
                src={image.ruanglab}
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4 pb-2">
                <div className=" font-semibold text-xl text-center">
                  Ruang D.2.D
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-wrap gap-5 items-center justify-between">
            <Link
              to={`/admin/inventaris/rekap/D.2.E`}
              className="w-60 h-[330px] min-w-[240px] min-h-[330px] rounded-3xl overflow-hidden shadow-lg bg-neutral-300 transition duration-200 hover:scale-110"
            >
              <img
                className="h-[272px] w-full rounded-3xl object-cover"
                src={image.ruanglab}
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4 pb-2">
                <div className=" font-semibold text-xl text-center">
                  Ruang D.2.E
                </div>
              </div>
            </Link>

            <Link
              to={`/admin/inventaris/rekap/D.2.F`}
              className="w-60 h-[330px] min-w-[240px] min-h-[330px] rounded-3xl overflow-hidden shadow-lg bg-neutral-300 transition duration-200 hover:scale-110"
            >
              <img
                className="h-[272px] w-full rounded-3xl object-cover"
                src={image.ruanglab}
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4 pb-2">
                <div className=" font-semibold text-xl text-center">
                  Ruang D.2.F
                </div>
              </div>
            </Link>
            <Link
              to={`/admin/inventaris/rekap/D.2.G`}
              className="w-60 h-[330px] min-w-[240px] min-h-[330px] rounded-3xl overflow-hidden shadow-lg bg-neutral-300 transition duration-200 hover:scale-110"
            >
              <img
                className="h-[272px] w-full rounded-3xl object-cover"
                src={image.ruanglab}
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4 pb-2">
                <div className=" font-semibold text-xl text-center">
                  Ruang D.2.G
                </div>
              </div>
            </Link>
            <Link
              to={`/admin/inventaris/rekap/D.2.H`}
              className="w-60 h-[330px] min-w-[240px] min-h-[330px] rounded-3xl overflow-hidden shadow-lg bg-neutral-300 transition duration-200 hover:scale-110"
            >
              <img
                className="h-[272px] w-full rounded-3xl object-cover"
                src={image.ruanglab}
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4 pb-2">
                <div className=" font-semibold text-xl text-center">
                  Ruang D.2.H
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-wrap gap-5 items-center justify-between">
            <Link
              to={`/admin/inventaris/rekap/D.2.I`}
              className="w-60 h-[330px] min-w-[240px] min-h-[330px] rounded-3xl overflow-hidden shadow-lg bg-neutral-300 transition duration-200 hover:scale-110"
            >
              <img
                className="h-[272px] w-full rounded-3xl object-cover"
                src={image.ruanglab}
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4 pb-2">
                <div className=" font-semibold text-xl text-center">
                  Ruang D.2.I
                </div>
              </div>
            </Link>
            <Link
              to={`/admin/inventaris/rekap/D.2.J`}
              className="w-60 h-[330px] min-w-[240px] min-h-[330px] rounded-3xl overflow-hidden shadow-lg bg-neutral-300 transition duration-200 hover:scale-110"
            >
              <img
                className="h-[272px] w-full rounded-3xl object-cover"
                src={image.ruanglab}
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4 pb-2">
                <div className=" font-semibold text-xl text-center">
                  Ruang D.2.J
                </div>
              </div>
            </Link>
            <Link
              to={`/admin/inventaris/rekap/D.2.K`}
              className="w-60 h-[330px] min-w-[240px] min-h-[330px] rounded-3xl overflow-hidden shadow-lg bg-neutral-300 transition duration-200 hover:scale-110"
            >
              <img
                className="h-[272px] w-full rounded-3xl object-cover"
                src={image.ruanglab}
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4 pb-2">
                <div className=" font-semibold text-xl text-center">
                  Ruang D.2.K
                </div>
              </div>
            </Link>
            <Link
              to={`/admin/inventaris/rekap/D.3.L`}
              className="w-60 h-[330px] min-w-[240px] min-h-[330px] rounded-3xl overflow-hidden shadow-lg bg-neutral-300 transition duration-200 hover:scale-110"
            >
              <img
                className="h-[272px] w-full rounded-3xl object-cover"
                src={image.ruanglab}
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4 pb-2">
                <div className=" font-semibold text-xl text-center">
                  Ruang D.3.L
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-wrap gap-5 items-center justify-between">
            <Link
              to={`/admin/inventaris/rekap/D.3.M`}
              className="w-60 h-[330px] min-w-[240px] min-h-[330px] rounded-3xl overflow-hidden shadow-lg bg-neutral-300 transition duration-200 hover:scale-110"
            >
              <img
                className="h-[272px] w-full rounded-3xl object-cover"
                src={image.ruanglab}
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4 pb-2">
                <div className=" font-semibold text-xl text-center">
                  Ruang D.3.M
                </div>
              </div>
            </Link>
            <Link
              to={`/admin/inventaris/rekap/D.3.N`}
              className="w-60 h-[330px] min-w-[240px] min-h-[330px] rounded-3xl overflow-hidden shadow-lg bg-neutral-300 transition duration-200 hover:scale-110"
            >
              <img
                className="h-[272px] w-full rounded-3xl object-cover"
                src={image.ruanglab}
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4 pb-2">
                <div className=" font-semibold text-xl text-center">
                  Ruang D.3.N
                </div>
              </div>
            </Link>
            <Link
              to={`/admin/inventaris/rekap/UPT`}
              className="w-60 h-[330px] min-w-[240px] min-h-[330px] rounded-3xl overflow-hidden shadow-lg bg-neutral-300 transition duration-200 hover:scale-110"
            >
              <img
                className="h-[272px] w-full rounded-3xl object-cover"
                src={image.ruanglab}
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4 pb-2">
                <div className=" font-semibold text-xl text-center">
                  Ruang UPT
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvRoom;
