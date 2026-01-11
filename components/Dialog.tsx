import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const Dialog = async (title: any,text: any,icon:any,confirmColor:any,cancelColor:any) => {
  const result = await MySwal.fire({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    confirmButtonColor: confirmColor,
    cancelButtonColor: cancelColor,
    customClass: {
      popup: "rounded-lg p-5 text-center",
      title: "text-xl font-bold",
      confirmButton:
        "px-5 py-2 rounded bg-green-500 hover:bg-green-600 text-white",
      cancelButton: "px-5 py-2 rounded bg-red-500 hover:bg-red-600 text-white",
    },
  });

  return result.isConfirmed
};
