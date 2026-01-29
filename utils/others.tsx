import { Dialog } from "@/components/Components";
import { toast } from "react-toastify";

export const handleLogout = async (path: any) => {
  const result = await Dialog(
    "Confirm Logout",
    "Are you sure you want to logout?",
    "warning",
    "#43ce76",
    "#ef4444",
  );
  if (result) {
    localStorage.clear();
    window.location.href = path;
  }
};

export const itemCopy = (val: any) => {
    navigator.clipboard
      .writeText(val)
      .then(() => toast.success("Phone number copied"))
      .catch(() => toast.error("Phone number copying failed"));
  };

  

