import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

import useStore from "../../data/Data.js";
import usePaginationStore from "../../data/Pagination.js";
import useFilterAdmin from "../../data/filterAdmin.js";

import Pagination from "../global/Pagination.jsx";
import Condition from "../global/Condition";
import {
  MoveButton,
  DeleteButton,
  EditButton,
} from "../global/ActionButton.jsx";

function TableListInv() {
  const { fetchDataNonPC, deleteFormNonPC } = useStore();
  const { filtersortInv } = useFilterAdmin();
  const { currentPage, itemsPerPage, setCurrentPage } = usePaginationStore();

  const handleDeleteInv = (id) => {
    Swal.fire({
      title: "Apa kamu yakin?",
      text: "Kamu tidak dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "batal",
      confirmButtonText: "Ya, hapus inventaris!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteFormNonPC(id);
        await fetchDataNonPC();
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
    fetchDataNonPC();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filtersortInv.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
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
              <th scope="col" className="px-1 py-3">
                Jumlah
              </th>
              <th scope="col" className="px-3 py-3 ">
                Kondisi
              </th>
              <th scope="col" className="px-1 py-3">
                Ruang
              </th>
              <th scope="col" className="px-1 py-3">
                Ditambahkan
              </th>
              <th scope="col" className="px-1 py-3">
                Diedit
              </th>
              <th scope="col" className="px-1 py-3">
                Keterangan
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
                <td scope="col" className="px-4 py-3 ">
                  {inv.name}
                </td>
                <td scope="col" className="px-1 py-3">
                  {inv.quantity}
                </td>
                <td
                  scope="col"
                  className="px-3 py-3 flex items-center justify-center"
                >
                  <Condition condition={inv.condition} />
                </td>
                <td scope="col" className="px-1 py-3">
                  {inv.room}
                </td>
                <td scope="col" className="px-1 py-3">
                  {new Date(inv.created_at).toLocaleDateString("id-ID")}
                </td>
                <td scope="col" className="px-1 py-3">
                  {inv.updated_at
                    ? new Date(inv.updated_at).toLocaleDateString("id-ID")
                    : "belum pernah"}
                </td>
                <td scope="col" className="px-1 py-3">
                  {inv.comment || "-"}
                </td>
                <td className="px-1 py-3 ">
                  <div className="w-full flex justify-center gap-2">
                    <MoveButton to={`/inventaris/pindah/inv/${inv.id}`} />
                    <DeleteButton onClick={() => handleDeleteInv(inv.id)} />
                    <EditButton to={`/inventaris/edit/${inv.id}`} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=" flex justify-end">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filtersortInv.length / itemsPerPage)}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default TableListInv;
