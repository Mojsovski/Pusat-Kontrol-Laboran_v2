import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

import useStore from "../../data/Data.js";
import { useAuthStore } from "../../data/Auth";
import usePaginationStore from "../../data/Pagination.js";

import icons from "../../assets/icons/icon.jsx";
import Pagination from "../global/Pagination.jsx";
import Status from "../global/Status";

function TableListInv() {
  const navigate = useNavigate();
  const { inv, fetchDataNonPC, deleteFormNonPC } = useStore();
  const { user } = useAuthStore((state) => ({ user: state.user }));
  const { currentPage, itemsPerPage, setCurrentPage } = usePaginationStore();

  const filterUser = inv.filter(
    (inv) => inv.room === user?.user_metadata?.room
  );
  const filterSort = filterUser.sort((a, b) => a.name.localeCompare(b.name));

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
        navigate("/inventaris/list-nonpc");
      }
    });
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterSort.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetchDataNonPC();
  }, []);

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
                  <Status condition={inv.status} />
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
                  <div className="flex">
                    <div className="w-full flex justify-center">
                      <Link
                        to={`/inventaris/edit/${inv.id}`}
                        className="bg-[#fdcd49] py-1 w-20  items-center flex justify-center rounded-xl shadow"
                      >
                        <EditRoundedIcon />
                      </Link>
                    </div>
                    <div className="w-full flex justify-center">
                      <button
                        onClick={() => handleDeleteInv(inv.id)}
                        className="bg-red-500 hover:bg-red-400 text-white py-1 w-20  items-center flex justify-center rounded-xl shadow"
                      >
                        <DeleteForeverRoundedIcon />
                      </button>
                    </div>
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
          totalPages={Math.ceil(filterSort.length / itemsPerPage)}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default TableListInv;
