import { API_BASE_URL } from "@/config/apiConfig";
import axios from "axios";

export const userLogin = async (userName: any, userPassword: any) => {
  const result = await axios.post(
    `${API_BASE_URL}/authentication`,
    { username: userName, password: userPassword },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return result;
};

export const userRegister = async (formData: any) => {
  await axios.post(`${API_BASE_URL}/registeruser`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getUsersByRoleName = async (roleType: any, token: any) => {
  const result = await axios.get(`${API_BASE_URL}/by-role/${roleType}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result;
};

export const getUserByUserName = async (userName: any, token: any) => {
  const result = await axios.get(`${API_BASE_URL}/user/${userName}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result;
};

export const updateUserByUserName = async (jsonData: any, token: any) => {
  await axios.put(`${API_BASE_URL}/user-update`, jsonData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllUserCountForDashboard = async () => {
  const result = await axios.get(`${API_BASE_URL}/dashboard/user-counts`);

  return result;
};
