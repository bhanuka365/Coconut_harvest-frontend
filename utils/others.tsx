import { Dialog } from "@/components/Components";

export const handleLogout = async (path:any) => {
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