import { API_BASE_URL } from "@/config/apiConfig";
import axios from "axios";

export const getAllMyBookingsForFieldOwner = async (token: any) => {
  const result = await axios.get(`${API_BASE_URL}/bookings/my`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result;
};

export const updateBookingById = async (token: any, jsonData: any) => {
  await axios.put(`${API_BASE_URL}/bookings/update`, jsonData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteBookingById = async (id: any, token: any) => {
  await axios.delete(`${API_BASE_URL}/bookings/${Number(id)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addBooking = async (jsonData: any, token: any) => {
  await axios.post(`${API_BASE_URL}/bookings/add`, jsonData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getBookingById = async (token: any, id: any) => {
  const result = await axios.get(`${API_BASE_URL}/bookings/${Number(id)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result;
};

export const getAllPendingBookingsForHarvester = async (token: any) => {
  const result = await axios.get(`${API_BASE_URL}/bookings/my/pending`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result;
};

export const getAllBookingsByHarvesterName = async (
  token: any,
  userName: any,
) => {
  const result = await axios.get(
    `${API_BASE_URL}/bookings/harvester/${userName}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return result;
};

export const getAllCompleteBookingCountForDashboard = async () => {
  const result = await axios.get(
    `${API_BASE_URL}/dashboard/bookings/completed/count`,
  );

  return result;
};
