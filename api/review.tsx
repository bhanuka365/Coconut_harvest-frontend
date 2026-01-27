import { API_BASE_URL } from "@/config/apiConfig";
import axios from "axios";

export const getReviewsByUserName = async (userName: any, token: any) => {
  const result = await axios.get(`${API_BASE_URL}/review/${userName}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result;
};

export const addReview = async (jsonData: any, token: any) => {
  await axios.post(`${API_BASE_URL}/review/add`, jsonData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
