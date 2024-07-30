import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

import useProfileStore from "../../data/Users.js";

import icons from "../../assets/icons/icon.jsx";

function UsersTable() {
  const navigate = useNavigate();
  const { user, fetchProfile } = useProfileStore();

  const filterUsers = user.sort((a, b) => a.room.localeCompare(b.room));

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
        Swal.fire({
          title: "Terhapus!",
          text: "Inventaris sudah terhapus.",
          icon: "success",
          timer: 700,
          showConfirmButton: false,
        });
        navigate("/users");
      }
    });
  };

  useEffect(() => {
    fetchProfile();
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
              <th scope="col" className="px-3 py-3">
                Email
              </th>
              <th scope="col" className="px-1 py-3">
                Status
              </th>
              <th scope="col" className="px-1 py-3 ">
                Nomer HP
              </th>
              <th scope="col" className="px-1 py-3 ">
                Ruang Lab
              </th>
              <th scope="col" className="px-1 py-3">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {filterUsers.map((user, index) => (
              <tr key={user.id}>
                <td scope="col" className="px-1 py-3">
                  {index + 1}
                </td>
                <td scope="col" className="px-4 py-3 ">
                  {user.name}
                </td>
                <td scope="col" className="px-3 py-3">
                  {user.email}
                </td>
                <td scope="col" className="px-1 py-3">
                  {user.role}
                </td>
                <td scope="col" className="px-1 py-3">
                  {user.phone_number}
                </td>
                <td scope="col" className="px-1 py-3">
                  {user.room}
                </td>
                <td className="px-1 py-3  ">
                  <button
                    // onClick={() => handleDeleteInv(inv.id)}
                    className="bg-[#fdcd49] text-black py-1 w-20 text-center rounded-full shadow"
                  >
                    hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UsersTable;
