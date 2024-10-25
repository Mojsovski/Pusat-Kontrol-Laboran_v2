import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

import useLogStore from "../../data/Log.js";

import { DetailButton } from "../global/ActionButton.jsx";
import { Action } from "../global/Condition.jsx";

function TableLogInv() {
  const { loginv, fetchLogInv } = useLogStore();

  const sortLog = loginv
    .slice()
    .sort((a, b) => new Date(b.log_time) - new Date(a.log_time));

  useEffect(() => {
    fetchLogInv();
  }, []);

  return (
    <>
      <div className="overflow-x-auto relative ">
        <table className="w-full text-sm  rtl:text-right  text-center">
          <thead className="text-center">
            <tr>
              <th scope="col" className="px-1 py-3  ">
                No
              </th>
              <th scope="col" className="px-10 py-3 ">
                Nama
              </th>

              <th scope="col" className="px-1 py-3">
                Tanggal
              </th>
              <th scope="col" className="px-1 py-3 ">
                Waktu
              </th>
              <th scope="col" className="px-1 py-3 ">
                Ruang Lab
              </th>
              <th scope="col" className="px-1 py-3">
                Status
              </th>
              <th scope="col" className="px-1 py-3">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {sortLog.map((log, index) => (
              <tr key={log.id}>
                <td scope="col" className="px-1 py-3">
                  {index + 1}
                </td>
                <td scope="col" className="px-4 py-3 ">
                  {log.name}
                </td>
                <td scope="col" className="px-1 py-3">
                  {new Date(log.log_time).toLocaleDateString("id-ID")}
                </td>
                <td scope="col" className="px-1 py-3">
                  {new Date(log.log_time).toLocaleTimeString("id-ID")}
                </td>
                <td scope="col" className="px-1 py-3">
                  {log.room}
                </td>
                <td scope="col" className="px-1 py-3">
                  <div className="flex justify-center">
                    <Action action={log.action} />
                  </div>
                </td>
                <td scope="col" className="px-1 py-3 flex justify-center ">
                  {/* <DetailButton to={`/log/pc/detail/${log.id_log}`} /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableLogInv;
