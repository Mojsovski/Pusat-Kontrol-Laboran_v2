import Swal from "sweetalert2";
import useStore from "../../../data/Data.js";
import { DeleteButton } from "./ActionButton.jsx";

const DeleteAlert = ({ id }) => {
  const { fetchData, deleteForm } = useStore();

  const handleDelete = () => {
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

  return <DeleteButton onClick={handleDelete} />;
};

export default DeleteAlert;
