import SingleData from "@/components/SingleData";
import axios from "axios";
import {pizza} from '@/utils/interface'





export default async function Page({ params }: { params: { id: string } }) {
    const param=params.id

    const res = await axios.get(`http://localhost:5000/pizza/all/${param}`);
    const data:pizza = await res.data.pizza;
    console.log("🚀 ~ file: page.tsx:12 ~ data:", data);

  return <div>
    <SingleData data={data} />
  </div>;

}
