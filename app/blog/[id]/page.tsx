import SingleBlogCard from "@/components/BlogComponents/SingleBlogCard";


export default function BlogId({ params }: { params: { id: string } }) {
    const {id}=params
  return <div>
    <SingleBlogCard id={id} />
  </div>;
}
