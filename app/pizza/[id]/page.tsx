import SingleData from "@/components/SingleData";
import axios from "axios";
import {pizza} from '@/utils/interface'





export default async function Page({ params }: { params: { id: string } }) {
    const param=params.id

    const res = await axios.get(`https://backendpizza.vercel.app/pizza/all/${param}`);
    const data:pizza = await res.data.pizza;
    console.log("🚀 ~ file: page.tsx:12 ~ data:", data);

  return <div>
    <SingleData data={data} />
  </div>;

}
