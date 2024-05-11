import axios from "axios";

import {data} from './interface'


export const getAllData = async () => {
  try {
    const res = await axios.get("http://localhost:5000/pizza/all");
    const data:data = await res.data;

    return data;
  } catch (error) {
    console.log("🚀 ~ file: getAllData.ts:15 ~ error:", error);
  }
};
