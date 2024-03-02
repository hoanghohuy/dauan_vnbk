import Detail from "@/components/chitiet/detail";

export const metadata = {
    title: `Chi tiết bài viết`
}

export default function page({params}) {
  return <Detail id={params.id} />
}