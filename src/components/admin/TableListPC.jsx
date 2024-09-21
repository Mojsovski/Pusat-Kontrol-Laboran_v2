import React from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

import useStore from "../../data/Data.js";
import usePaginationStore from "../../data/Pagination.js";
import useFilterAdmin from "../../data/filterAdmin.js";

import Pagination from "../global/Pagination.jsx";
import RoomButton from "../global/button/RoomButton.jsx";
import { ConditionAll } from "../global/Condition";
import {
  MoveButton,
  DeleteButton,
  EditButton,
  DetailButton,
} from "../global/ActionButton.jsx";

function TableListPC() {
  const { fetchData } = useStore();
  const { sortnamePC } = useFilterAdmin();
  const { currentPage, itemsPerPage, setCurrentPage } = usePaginationStore();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortnamePC.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Apa kamu yakin?",
      text: "Kamu tidak dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      cancelButtonText: "batal",
      confirmButtonText: "Ya, hapus inventaris!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteForm(id);
        await fetchData();
        Swal.fire({
          title: "Terhapus!",
          text: "Inventaris sudah terhapus.",
          icon: "success",
          timer: 700,
          showConfirmButton: false,
        });
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-12 gap-4 justify-items-center ">
        <RoomButton room="All" />
        <RoomButton room="D.2.A" />
        <RoomButton room="D.2.B" />
        <RoomButton room="D.2.C" />
        <RoomButton room="D.2.D" />
        <RoomButton room="D.2.E" />
        <RoomButton room="D.2.F" />
        <RoomButton room="D.2.G" />
        <RoomButton room="D.2.H" />
        <RoomButton room="D.2.I" />
        <RoomButton room="D.2.J" />
        <RoomButton room="D.2.K" />
        <RoomButton room="D.2.L" />
        <RoomButton room="D.2.M" />
        <RoomButton room="D.2.N" />
        <RoomButton room="D.2.UPT" />
      </div>
      <div className="overflow-x-auto relative ">
        <table className="w-full text-sm  rtl:text-right text-center ">
          <thead className="text-center">
            <tr>
              <th scope="col" className="px-1 py-3  ">
                No
              </th>
              <th scope="col" className="px-4 py-3 ">
                Nama
              </th>
              <th scope="col" className="px-4 py-3 ">
                Prosessor
              </th>
              <th scope="col" className="px-1 py-3 ">
                RAM
              </th>
              <th scope="col" className="px-3 py-3">
                Kartu grafis
              </th>
              <th scope="col" className="px-1 py-3 ">
                Penyimpanan
              </th>
              <th scope="col" className="px-1 py-3">
                Kategori
              </th>
              <th scope="col" className="px-1 py-3 ">
                Kondisi
              </th>
              <th scope="col" className="px-1 py-3">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((inv, index) => (
              <tr key={inv.id}>
                <td scope="col" className="px-1 py-3">
                  {indexOfFirstItem + index + 1}
                </td>
                <td scope="col" className="px-4 py-3">
                  {inv.name}
                </td>
                <td scope="col" className="px-4 py-3">
                  {inv.pc.cpu}
                </td>
                <td scope="col" className="px-1 py-3">
                  {inv.pc.ram}
                </td>
                <td scope="col" className="px-3 py-3">
                  {inv.pc.gpu}
                </td>
                <td scope="col" className="px-1 py-3">
                  {inv.pc.storage}
                </td>
                <td scope="col" className="px-1 py-3 ">
                  {inv.pc.category}
                </td>
                <td scope="col" className="px-1 py-3">
                  <ConditionAll condition={inv.condition} />
                </td>
                <td className="px-1 py-3 ">
                  <div className="w-full flex justify-center gap-2">
                    <MoveButton to={`/inventaris/pindah/pc/${inv.id}`} />
                    <DeleteButton onClick={() => handleDelete(inv.id)} />
                    <EditButton to={`/admin/inventaris/edit/pc/${inv.id}`} />
                    <DetailButton to={`/admin/inventaris/detail/${inv.id}`} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(sortnamePC.length / itemsPerPage)}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default TableListPC;
