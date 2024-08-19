import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import CircularProgress from "@mui/material/CircularProgress";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { TbHomeMove } from "react-icons/tb";

import useStore from "../../data/Data.js";
import { useAuthStore } from "../../data/Auth";
import usePaginationStore from "../../data/Pagination.js";

import Pagination from "../global/Pagination.jsx";
import Condition from "../global/Condition";
import Status from "../global/Status.jsx";
import {
  MoveButton,
  DeleteButton,
  EditButton,
  DetailButton,
} from "../global/ActionButton.jsx";

function TableListPC() {
  const { invpc, fetchData, loading, error, deleteForm } = useStore();
  const { user } = useAuthStore((state) => ({ user: state.user }));
  const { currentPage, itemsPerPage, setCurrentPage } = usePaginationStore();

  // Filter based on user's room
  const filterUser = invpc.filter(
    (inv) => inv.room === user?.user_metadata?.room
  );
  const filterPC = filterUser.sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return (
      <div className="flex justify-center">
        <CircularProgress />
      </div>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }

  const handleDelete = (id) => {
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterPC.slice(indexOfFirstItem, indexOfLastItem);
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
                Lokasi
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
                  <Status condition={inv.status} />
                </td>
                <td scope="col" className="px-1 py-3">
                  <Condition condition={inv.condition} />
                </td>
                <td className="px-1 py-3 ">
                  <div className="w-full flex justify-center gap-2">
                    <MoveButton to={`/inventaris/pindah/pc/${inv.id}`} />
                    <DeleteButton onClick={() => handleDelete(inv.id)} />
                    <EditButton to={`/inventaris/editpc/${inv.id}`} />
                    <DetailButton to={`/inventaris/detail/${inv.id}`} />
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
          totalPages={Math.ceil(filterPC.length / itemsPerPage)}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default TableListPC;
