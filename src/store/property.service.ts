import { API_URL } from "@/config";
import axios from "axios";

export async function getProperties() {
  try {
    const response = await axios.get(`${API_URL}/property`);
    if (response.status === 200) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.log("getProperties ~ error:", error);
  }
}
